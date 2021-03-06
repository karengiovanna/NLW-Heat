import express, { response } from "express";
import "dotenv/config"
import { router } from "./routes";

const app = express();
app.use(express.json());

app.use(router);

app.get("/github", (request, response) => {
    response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`);
}); 

app.get("/sigin/callback", (request, response) => {
        const {code} = request.query;
        return response.json(code);
})

app.listen(4000, () => console.log("Servidor está rodando na porta 4000"));
