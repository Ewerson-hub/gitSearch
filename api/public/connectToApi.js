import { Octokit} from "octokit";
//caso queira fazer mais requisições por hora alem das 60/h padrao
//crie um arquivo .env e crie uma variavel com nome de MY_TOKEN e adicione a sua chave de api para aumentar para 5000/h
const api = new Octokit({
    auth: process.env.MY_TOKEN
})
export async function getUserInfo(user){
    return await api.request('GET /users/{username}', {
        username: user
    })
}





