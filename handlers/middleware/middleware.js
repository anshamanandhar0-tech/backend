
let privateSecretKey="qwetry" 
export let xHeader=(req,res,next)=>{

    let headers=req.headers
   let xSecretKey = req.headers['x-secret-key']
if(!xSecretKey )
{
    return res.status(401).json({
        message:"x secret key is not avaiable on header"
    })
}
if( xSecretKey !== privateSecretKey)
    {
    return res.status(401).json({
        message:"x secret key is not valid"
    })
}
next()
}
export let loggerMiddlerware =(req,res,next)=>
{
    let time = Date.now().toString()
    console.log(`[${time}] ${req.method} ${req.url}`)
    next()
}