/*
Receber o código via string
recuperar o access_token no github
verificar se o usuário existe no banco de dados
------- SIm = gera um token
------- Não = cria no banco de dados, gera um token
Retorna o token com as infos do usuário logado
*/

import axios from "axios";


class AuthenticateUserService{
        async execute(code: string){
                const url = "https://github.com/login/oauth/acces_token";

                const response = await axios.post(url,null,{
                        params:{
                                client_id: process.env.GITHUB_CLIENT_ID,
                                client_secret: process.env.GITHUB_CLIENT_SECRET,
                                code,
                        },
                        headers:{
                                "Accept": "application/json"
                        }
                } )

                return response.data;
        }
}

export { AuthenticateUserService}