const axios = require("axios").default

const getConfig = {
  headers: {
    'x-rapidapi-key': process.env.RAPID_API_KEY,
    'x-rapidapi-host': process.env.RAPID_API_HOST
  }
}

const Api = (baseURL, config) => {

  console.log("base", baseURL)

  const axiosApi = axios.create({
    mode: 'cors',
    baseURL,
    ...config,
  })

  axiosApi.request = async (path, options) => {
    console.log("paht", path)
    const mergedOptions = {...options, ...getConfig}
    return axiosApi(path, mergedOptions)
  }

  return axiosApi
}

exports.default = Api
