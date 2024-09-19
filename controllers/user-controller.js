const userController = {};

userController.getMe = (req, res, next) => {
    res.json({Message: ' get me '})
};
userController.favorite = (req, res, next) => {
    res.json({Message: '  User Favorite '})
};
userController.history = (req, res, next) => {
    res.json({Message: '  User History '})
};

module.exports = userController;