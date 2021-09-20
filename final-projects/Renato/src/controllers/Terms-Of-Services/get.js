const Terms = {

  TermsOfServices(req, res) {
    try {
      return res
        .status(200)
        .send({
          Terms: "We are not responsible for any type of problem or inconvenience that this api may generate",
          Contact: "finalproject.paketaacademy@exemple.com"
        })
    } catch (error) {
      return res
        .status(400)
        .send({
          message: `An error has occurred ${error}.`
        })
    }
  }
}

export default Terms