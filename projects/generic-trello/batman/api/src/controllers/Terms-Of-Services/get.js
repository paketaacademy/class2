const Terms = {

  TermsOfServices(req, res) {
    return res
      .status(200)
      .send({
        Terms: "We are not responsible for any type of problem or inconvenience that this api may generate",
        Contact: "paketa.academy@exeple.com"
      })
  }
}

export default Terms