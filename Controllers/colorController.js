var ColorModel = require('../Models/colorModel.js');

/**
 * colorController.js
 *
 * @description :: Server-side logic for managing colors.
 */
module.exports = {

    /**
     * colorController.list()
     */
    list: function (req, res) {
        ColorModel.find(function (err, colors) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting color.',
                    error: err
                });
            }

            return res.json(colors);
        });
    },

    /**
     * colorController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        ColorModel.findOne({_id: id}, function (err, color) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting color.',
                    error: err
                });
            }

            if (!color) {
                return res.status(404).json({
                    message: 'No such color'
                });
            }

            return res.json(color);
        });
    },

    /**
     * colorController.create()
     */
    create: function (req, res) {
        var color = new ColorModel({
			name : req.body.name
        });

        color.save(function (err, color) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating color',
                    error: err
                });
            }

            return res.status(201).json(color);
        });
    },

    /**
     * colorController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        ColorModel.findOne({_id: id}, function (err, color) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting color',
                    error: err
                });
            }

            if (!color) {
                return res.status(404).json({
                    message: 'No such color'
                });
            }

            color.name = req.body.name ? req.body.name : color.name;
			
            color.save(function (err, color) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating color.',
                        error: err
                    });
                }

                return res.json(color);
            });
        });
    },

    /**
     * colorController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        ColorModel.findByIdAndRemove(id, function (err, color) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the color.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
