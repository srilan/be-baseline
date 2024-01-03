//Importing Libraries 
import express from 'express'
import * as dotenv from 'dotenv';
import { stations } from './stations';
dotenv.config();

const PORT = process.env.PORT || 3000


const startServer = (app: express.Express) => {
  //Listing to the app and running it on PORT 5000
  app.listen(PORT, async () => {
      console.log(`listning on port ${PORT}`)
  })

  app.get('/stations/list-stations', (req, res)=> {
    res.send(
      [
        {
          name: 'kamuning',
          id: 1
        }
      ]
    ).status(200)
  })

  app.get('/stations/get/:id', (req, res)=> {
    const id = req.params['id'];
    const station = stations.find((s)=>s.id===Number(id));
    if (station) {
      res.status(200).send(
        station
      )
    } else {
      res.status(500).send({
        message: "Station not found"
      });
    }
  })



  app.post('/stations/add', (req, res)=> {
    const stationName = 'kamuning';
    const coodinates = '[1.0, 1.0]';


    res.send({
      message: "Station Has been added successfuly",
    }).status(200);
  })

}

export default startServer;