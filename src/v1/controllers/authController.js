const User = require('../models/userModel'); // Import du modèle
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// --- REGISTER ---
exports.register = async (req, res) => {
    const { email, password, nom, prenom } = req.body;

    try {
        const existingUser = await User.findByEmail(email);
        if (existingUser) {
            return res.status(400).json({ message: "Utilisateur déjà existant" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const forcedRole = 'user';

        const userId = await User.create({
            email,
            password: hashedPassword,
            nom,
            prenom,
            role: forcedRole
        });

        res.status(201).json({
            message: "Utilisateur créé !",
            user: { id: userId, email, nom, prenom, role: forcedRole }
        });

    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};

// --- LOGIN ---
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findByEmail(email);

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "Identifiants invalides" });
        }

        const token = jwt.sign(
            { id: user.id, role: user.role },
            process.env.JWT_SECRET || 'secret_par_defaut',
            { expiresIn: '1h' }
        );

        const { password: _, ...userWithoutPassword } = user;

        res.json({
            message: "Connecté !",
            token,
            user: userWithoutPassword
        });

    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};