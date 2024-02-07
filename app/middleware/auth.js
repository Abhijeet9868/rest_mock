
const jwt =require("jsonwebtoken")
const verifyToken =(req,res,next)=>{

    const token = req.header("Authorization")
    if(!token){
        
        return res.status(401).json({error:"Access denied"})
    }
    const bearer = token.split(" ")[1]
    try {
        const decoded =  jwt.verify(bearer,process.env.secret)
        next()

    } catch (error) {
        res.status(401).json({error:"Invalid Token"})
    }
}
module.exports = verifyToken