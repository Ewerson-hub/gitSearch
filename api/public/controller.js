import {getUserInfo} from "./connectToApi.js";

export const getUser = async (req, res) => {  
    try {
        const user = (await getUserInfo(req.params.id)).data;
        
        const data = {
            "name": user.name,
            "avatar": user.avatar_url,
            "bio": (user.bio)? user.bio : "" ,
            "github_link": user.html_url,
            "repos": await getRepos(user)
        }
        
        return res.status(200).json(JSON.stringify(data))
    } catch (error) {
        res.status(500).json({'error': error})
    }   
}

const getRepos = async (user) => {
    const repos = []
    await fetch(`${user.repos_url}`).then(
        response => {
            return response.json()
        }
    ).then(
        data => {
            data.forEach(items => {
                repos.push({
                    'name': items.name,
                    'description': (!items.description)? 'N/A' : items.description,
                    'url': items.html_url
                })
            });
        }
    )
    return repos
}

