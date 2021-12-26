var FurnitureModel = require('../Models/furnitureModel.js');

/**
 * furnitureController.js
 *
 * @description :: Server-side logic for managing furnitures.
 */
module.exports = {

    /**
     * furnitureController.list()
     */
    list: function (req, res) {
        FurnitureModel.find(function (err, furnitures) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting furniture.',
                    error: err
                });
            }

            return res.json(furnitures);
        });
    },

    /**
     * furnitureController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        FurnitureModel.findOne({_id: id}, function (err, furniture) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting furniture.',
                    error: err
                });
            }

            if (!furniture) {
                return res.status(404).json({
                    message: 'No such furniture'
                });
            }

            return res.json(furniture);
        });
    },

    /**
     * furnitureController.create()
     */
    create: function (req, res) {
        var furniture = new FurnitureModel({
			name : req.body.name,
			category : req.body.category,
			price : req.body.price,
			qty : req.body.qty,
			description : req.body.description,
			material : req.body.material,
			object : req.body.object,
			color : req.body.color,
			hight : req.body.hight,
			length : req.body.length
        });

        furniture.save(function (err, furniture) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating furniture',
                    error: err
                });
            }

            return res.status(201).json(furniture);
        });
    },

    /**
     * furnitureController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        FurnitureModel.findOne({_id: id}, function (err, furniture) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting furniture',
                    error: err
                });
            }

            if (!furniture) {
                return res.status(404).json({
                    message: 'No such furniture'
                });
            }

            furniture.name = req.body.name ? req.body.name : furniture.name;
			furniture.category = req.body.category ? req.body.category : furniture.category;
			furniture.price = req.body.price ? req.body.price : furniture.price;
			furniture.qty = req.body.qty ? req.body.qty : furniture.qty;
			furniture.description = req.body.description ? req.body.description : furniture.description;
			furniture.material = req.body.material ? req.body.material : furniture.material;
			furniture.object = req.body.object ? req.body.object : furniture.object;
			furniture.color = req.body.color ? req.body.color : furniture.color;
			furniture.hight = req.body.hight ? req.body.hight : furniture.hight;
			furniture.length = req.body.length ? req.body.length : furniture.length;
			
            furniture.save(function (err, furniture) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating furniture.',
                        error: err
                    });
                }

                return res.json(furniture);
            });
        });
    },

    /**
     * furnitureController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        FurnitureModel.findByIdAndRemove(id, function (err, furniture) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the furniture.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
