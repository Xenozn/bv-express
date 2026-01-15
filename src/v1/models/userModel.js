const db = require('../../config/db');

const User = {
    // Trouver un utilisateur par son email
    findByEmail: async (email) => {
        const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        return rows[0];
    },

    // Créer un nouvel utilisateur
    create: async (userData) => {
        const { email, password, nom, prenom, role } = userData;
        const [result] = await db.query(
            'INSERT INTO users (email, password, nom, prenom, role) VALUES (?, ?, ?, ?, ?)',
            [email, password, nom, prenom, role]
        );
        return result.insertId;
    },

    findById: async (id) => {
        const [rows] = await db.query(
            'SELECT id, email, nom, prenom, role, createdAt FROM users WHERE id = ?',
            [id]
        );
        return rows[0]; // Retourne l'utilisateur ou undefined
    },
    findAll: async () => {
        const [rows] = await db.query('SELECT id, email, nom, prenom, role, createdAt FROM users');
        return rows;
    }

};

module.exports = User;