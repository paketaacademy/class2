const Terms = {
    
    TermsOfServices(req,res){
        return res
        .status(200)
        .send({
            message:"We are not responsible for any type of problem or inconvenience that this api may generate"
        })
    }
}

export default Terms