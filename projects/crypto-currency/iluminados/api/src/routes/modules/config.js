export const configuration = (route, limit = 20, page = 1) =>{
    return{
    method: 'GET',
    url: `https://api.lunarcrush.com/v2?data=${route}&key=lu4pa7jv6xmw1ny7jux9q&limit=${limit}&page=${page}`,
    headers: {
      'Key': 'lu4pa7jv6xmw1ny7jux9q',
    }}
  }



