const productController = {};

productController.getAll = (req, res, next) => {
    res.json({Message: ' All product '})
};
productController.allCategory = (req, res, next) => {
    res.json({Message: '  All product category '})
};
productController.category = (req, res, next) => {
    res.json({Message: '  category '})
};
productController.oneProduct = (req, res, next) => {
    res.json({Message: ' one product '})
};

module.exports = productController;