const authController = {};

authController.login = (req,res,next) => {
    res.json({Message: 'Login'})
}

authController.register = (req, res, next) => {
    res.json({Message: 'Register'})
};
authController.forgetPassword = (req, res, next) => {
    res.json({Message: 'forget password'})
};
authController.resetPassword = (req, res, next) => {
    res.json({Message: 'reset password '})
};

module.exports = authController;