import ratelimit from "../config/upstash.js";


const rateLimiter = async (req,res,next) => {
    // per user -> access like userid or ip address as it doesot stop everyone but specific user  but we are not using 
    try {
        const {success} = await ratelimit.limit("my-rate-limit")

        if(!success){
            return res.status(429).json({
                message:"Too many request, please try again later "
            })
        }
        next();
        
    } catch (error) {
        console.log("Rate limit error",error);
        next(error);
        
    }

    
}

export default rateLimiter;