import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
const PORT = process.env.PORT || 3000
//import startServer from 'server';

//App Varaibles 
dotenv.config();
//intializing the express app 
const app = express(); 

//using the dependancies
app.use(helmet()); 
app.use(cors()); 
app.use(express.json())


const startServer = (app: express.Express) => {
  //Listing to the app and running it on PORT 5000
  app.listen(PORT, async () => {
      console.log(`listning on port ${PORT}`)
  });

  /**
   * Req: request coming from client to server
   * Res: response from server to client
   */
  app.get('/list-stations', (req, res)=> {
    res.json([
      {
        id: 1,
        name: 'kamuning',
      },
      {
        id: 2,
        name: 'north ave',
      }
    ]).status(200);
  })

}

startServer(app);