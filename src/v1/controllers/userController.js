const User = require('../models/userModel');

// --- RÉCUPÉRER MON PROFIL (Via Token) ---
exports.getMe = async (req, res) => {
    try {
        // req.userId est injecté par votre authMiddleware
        const user = await User.findById(req.userId);

        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        res.json({ status: "success", data: user });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};

// --- RÉCUPÉRER UN UTILISATEUR PAR ID (Paramètre URL) ---
exports.getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        res.json({ status: "success", data: user });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};