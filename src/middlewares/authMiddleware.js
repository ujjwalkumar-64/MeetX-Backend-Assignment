const jwt = require("jsonwebtoken");
const User = require("../models/User")


const authenticate =async (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({ message: "Access denied. No token provided." });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        const{id}= decoded;
        console.log(id)
        const user = await User.findById(id);
        console.log(user)
        if(!user){
            throw new Error("invalid user")
        }
        req.user = user
        next();
    } catch (error) {
        res.status(400).json({ message: "Invalid token" ,error});
    }
};
 
const authorizeAdmin = (req, res, next) => {
    if (req.user.role !== "admin") {
        console.log(req.user.role)
        return res.status(403).json({ message: "Access denied. Admins only." });
    }
    next();
};

module.exports = { authenticate,authorizeAdmin };