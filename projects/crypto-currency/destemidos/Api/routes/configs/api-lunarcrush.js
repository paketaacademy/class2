export const config =(route, limit = 20, page = 0)=>{
    return{
    method: 'GET',
    url: `https://api.lunarcrush.com/v2?data=${route}&key=y7ze70q6n18xv9g0jlpjlo&limit=${limit}&page=${page}`,
    headers: {
      'Key': 'y7ze70q6n18xv9g0jlpjlo',
    }}
  };