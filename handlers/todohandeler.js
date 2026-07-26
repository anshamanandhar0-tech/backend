export let handleDelete = (req, res) => {
    let id = req.params.id
    res.json({
        message: " your data is deleted",
        data: {
            id: id,
        }
    })
}
export let handlePut = (req, res) => {
    // which id to modify
    let id = req.params.id
    // what data to update
    let recevdata = req.body
    res.json({
        message: "request to update data with id resceied successfully",
        data: recevdata,
        id: id
    })
}
export let handlePost= (req,res)=>{
      
        let name=req.body
        //.body mah postman ko body bata data auxa
        res.json({
            name:name,
            message:"data received",
        })
    }