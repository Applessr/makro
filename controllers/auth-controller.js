const authController = {};
const prisma = require('../config/prisma');
const createError = require('../utils/createError');
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const authServices = require('../services/auth-services')

authController.login = async(req,res,next) => {
    try {
        const { name, email, password, phoneNumber,address} = req.body;

        if (!email || !password) {
            return createError(400,"Email and password should be provided");
        }

        if (typeof email !== "string" || typeof password !== 'string') {
            return createError(400, 'type of email and password should be string')
        }

        const user = await authServices.getEmail(email);

        if (!user) {
            return createError(400, 'User not found')
        }

        const isPasswordMath = await bcrypt.compare(password, user.password);

        if (!isPasswordMath) {
            return createError(400, 'Email or password is invalid ')
        }

        //access token
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: '30d'
        });

        res.json({ token })
    } catch(err) {
        next(err);
    }
};

authController.register = async(req, res, next) => {
    try {
        const { email, password } = req.body;

        if(!email || !password) {
            return createError(400,"Email and Password are require");
        }

        if (typeof email !== "string" || typeof password !== "string") {
            return createError(400, "type of email and password should be string");
        }

        const isUserExist = await authServices.getEmail(email);

        if (isUserExist) {
            return createError(400,"User already exist");
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
            },
            //case1 if want to send token must select first not show password
            select: {
                id: true,
                email: true,
                role: true,
            },
        });
        
        //case2 ส่ง register successful -> use this

        res.json({ user: 'Register successful' });
    } catch (err) {
        next(err)
    }
};

authController.forgetPassword = (req, res, next) => {
    res.json({Message: 'forget password'})
};
authController.resetPassword = (req, res, next) => {
    res.json({Message: 'reset password '})
};

module.exports = authController;