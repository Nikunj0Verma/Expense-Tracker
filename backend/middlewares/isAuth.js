const jwt=require("jsonwebtoken");
const { head } = require("../routes/userRouter");

const isAuthenticated=async (req,res,next)=>{
    const headerObj=req.headers;
    const token=headerObj?.authorization?.split(' ')[1];
    
    const verifyToken=jwt.verify(token,"secret",(err,decoded)=>{
        if(err){
            return false;
        }
        else{
            return decoded;
        }
    });

    if(verifyToken){
        req.user = verifyToken.id;
        next();
    }else{
        const error=new Error("User not authorized or token expired");
        next(error);
    }
    };

module.exports=isAuthenticated;