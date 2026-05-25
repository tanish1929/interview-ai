const jwt = require("jsonwebtoken")
const tokenBlacklistModel = require("../models/blacklist.model")



async function authUser(req, res, next) {

    // Try to get token from cookies first, then from Authorization header
    let token = req.cookies.token

    if (!token) {
        // Try to get from Authorization header
        const authHeader = req.headers.authorization
        if (authHeader && authHeader.startsWith("Bearer ")) {
            token = authHeader.substring(7) // Remove "Bearer " prefix
        }
    }

    if (!token) {
        return res.status(401).json({
            message: "Token not provided."
        })
    }

    const isTokenBlacklisted = await tokenBlacklistModel.findOne({
        token
    })

    if (isTokenBlacklisted) {
        return res.status(401).json({
            message: "token is invalid"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = decoded

        next()

    } catch (err) {

        return res.status(401).json({
            message: "Invalid token."
        })
    }

}


module.exports = { authUser }