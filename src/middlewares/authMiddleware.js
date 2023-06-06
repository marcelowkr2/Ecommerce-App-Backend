const dotenv = require('dotenv');
dotenv.config();
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const authMiddleware = asyncHandler(async (req, res, next) => {
    let token;
    if (req?.headers?.authorization?.startsWith("Bearer")) {
        token = req.headers.authorization.split( ' ' )[1];
        try {
            if (token) {
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                const user = await User.findById(decoded?.id);
                req.user = user;
                next();
            }
        } catch (error) {
            throw new Error("Não Autorizado Token Expirado, Faça um novo login");
        }
    } else {
        throw new Error("Não há token anexado ao cabeçalho");
    }
});



module.exports = {authMiddleware};