import {getUserInfo} from "./connectToApi.js";

export const getUser = async (req, res) => {  
    try {
        const user = (await getUserInfo(req.params.id)).data;

        const data = {
            "name": user.name,
            "avatar": user.avatar_url,
            "bio": (user.bio)? user.bio : "" ,
            "github_link": user.url,
            "repos": user.repos_url  
        }
        
        return res.status(200).json(JSON.stringify(data))
    } catch (error) {
        res.status(500).json({'error': error})
    }   
}

export const fakeData = (req, res) => {
    const data = {
        "name": 'Ewerson Lucas',
        "avatar": 'https://avatars.githubusercontent.com/u/79768454?v=4',
        "bio": 'Desenvolvedor Javascript | Node.js',
        "github_link": 'https://api.github.com/users/Ewerson-hub',
        "repos": 'https://api.github.com/users/Ewerson-hub/repos'  
    }
    return res.status(200).json(JSON.stringify(data))
}


