const express = require('express');
const router = express.Router();
const motoController = require('../controllers/motoController');

/**
 * @swagger
 * /api/v1/motos:
 *   get:
 *     summary: Récupérer la liste des motos avec pagination
 *     tags: [Motos]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 1
 *         description: Numéro de la page
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 10
 *         description: Nombre d’éléments par page
 *     responses:
 *       200:
 *         description: Liste paginée des motos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 results:
 *                   type: integer
 *                   example: 10
 *                 total_records:
 *                   type: integer
 *                   example: 100
 *                 current_page:
 *                   type: integer
 *                   example: 1
 *                 total_pages:
 *                   type: integer
 *                   example: 10
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       marque:
 *                         type: string
 *                       modele:
 *                         type: string
 *                       cylindree:
 *                         type: integer
 *       500:
 *         description: Erreur serveur
 */
router.get('/', motoController.getAllMotos);

module.exports = router;