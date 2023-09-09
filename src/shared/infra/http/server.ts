import express, {Request, Response} from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(cors());
//app.use(express.json());

app.use("/api", (request: Request, response: Response) => {
    return response.json({ola: "ola mundo"}).send();
});



const porta = process.env.PORT || 3333;

app.listen(porta, () => console.log(`Serve is up! on port ${porta}`));