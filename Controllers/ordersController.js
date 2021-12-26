var OrdersModel = require('../Models/ordersModel.js');

/**
 * ordersController.js
 *
 * @description :: Server-side logic for managing orderss.
 */
module.exports = {

    /**
     * ordersController.list()
     */
    list: function (req, res) {
        OrdersModel.find(function (err, orderss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting orders.',
                    error: err
                });
            }

            return res.json(orderss);
        });
    },

    /**
     * ordersController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        OrdersModel.findOne({_id: id}, function (err, orders) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting orders.',
                    error: err
                });
            }

            if (!orders) {
                return res.status(404).json({
                    message: 'No such orders'
                });
            }

            return res.json(orders);
        });
    },

    /**
     * ordersController.create()
     */
    create: function (req, res) {
        var orders = new OrdersModel({
			userId : req.body.userId,
			date : req.body.date,
			price : req.body.price,
			orderItemId : req.body.orderItemId
        });

        orders.save(function (err, orders) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating orders',
                    error: err
                });
            }

            return res.status(201).json(orders);
        });
    },

    /**
     * ordersController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        OrdersModel.findOne({_id: id}, function (err, orders) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting orders',
                    error: err
                });
            }

            if (!orders) {
                return res.status(404).json({
                    message: 'No such orders'
                });
            }

            orders.userId = req.body.userId ? req.body.userId : orders.userId;
			orders.date = req.body.date ? req.body.date : orders.date;
			orders.price = req.body.price ? req.body.price : orders.price;
			orders.orderItemId = req.body.orderItemId ? req.body.orderItemId : orders.orderItemId;
			
            orders.save(function (err, orders) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating orders.',
                        error: err
                    });
                }

                return res.json(orders);
            });
        });
    },

    /**
     * ordersController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        OrdersModel.findByIdAndRemove(id, function (err, orders) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the orders.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
