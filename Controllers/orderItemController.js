var OrderitemModel = require('../Models/orderItemModel.js');

/**
 * orderItemController.js
 *
 * @description :: Server-side logic for managing orderItems.
 */
module.exports = {

    /**
     * orderItemController.list()
     */
    list: function (req, res) {
        OrderitemModel.find(function (err, orderItems) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting orderItem.',
                    error: err
                });
            }

            return res.json(orderItems);
        });
    },

    /**
     * orderItemController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        OrderitemModel.findOne({_id: id}, function (err, orderItem) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting orderItem.',
                    error: err
                });
            }

            if (!orderItem) {
                return res.status(404).json({
                    message: 'No such orderItem'
                });
            }

            return res.json(orderItem);
        });
    },

    /**
     * orderItemController.create()
     */
    create: function (req, res) {
        var orderItem = new OrderitemModel({
			furnitureId : req.body.furnitureId
        });

        orderItem.save(function (err, orderItem) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating orderItem',
                    error: err
                });
            }

            return res.status(201).json(orderItem);
        });
    },

    /**
     * orderItemController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        OrderitemModel.findOne({_id: id}, function (err, orderItem) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting orderItem',
                    error: err
                });
            }

            if (!orderItem) {
                return res.status(404).json({
                    message: 'No such orderItem'
                });
            }

            orderItem.furnitureId = req.body.furnitureId ? req.body.furnitureId : orderItem.furnitureId;
			
            orderItem.save(function (err, orderItem) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating orderItem.',
                        error: err
                    });
                }

                return res.json(orderItem);
            });
        });
    },

    /**
     * orderItemController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        OrderitemModel.findByIdAndRemove(id, function (err, orderItem) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the orderItem.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
