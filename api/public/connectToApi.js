import { Octokit, App } from "octokit";

const api = new Octokit({
    auth: process.env.MY_TOKEN
})


export async function getUserInfo(user){
    return await api.request('GET /users/{username}', {
        username: user
    })
}





