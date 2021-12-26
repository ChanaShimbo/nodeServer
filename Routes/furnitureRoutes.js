var express = require('express');
var router = express.Router();
var furnitureController = require('../controllers/furnitureController.js');

/*
 * GET
 */
router.get('/', furnitureController.list);

/*
 * GET
 */
router.get('/:id', furnitureController.show);

/*
 * POST
 */
router.post('/', furnitureController.create);

/*
 * PUT
 */
router.put('/:id', furnitureController.update);

/*
 * DELETE
 */
router.delete('/:id', furnitureController.remove);

module.exports = router;
