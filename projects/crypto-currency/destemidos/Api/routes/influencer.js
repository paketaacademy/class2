import app from './configs_export/app_export.js'
import { config } from './configs_export/config.js';
import axios from 'axios';

  app.get('/influencers', function(req, res){

    axios.request(config('influencers')).then(function (response) {
      let resp = response.data;
      res.json(resp)
      }).catch(function (error) {
          console.error(error);
      })
  })

export default app