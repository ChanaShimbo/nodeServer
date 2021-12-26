var express = require('express');
var router = express.Router();
var colorController = require('../controllers/colorController.js');

/*
 * GET
 */
router.get('/', colorController.list);

/*
 * GET
 */
router.get('/:id', colorController.show);

/*
 * POST
 */
router.post('/', colorController.create);

/*
 * PUT
 */
router.put('/:id', colorController.update);

/*
 * DELETE
 */
router.delete('/:id', colorController.remove);

module.exports = router;
