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
export const fakeData = (req, res) => {
    const data = {
        "name": 'Ewerson Lucas',
        "avatar": 'https://avatars.githubusercontent.com/u/79768454?v=4',
        "bio": 'Desenvolvedor Javascript | Node.js',
        "github_link": 'https://github.com/Ewerson-hub',
        "repos": [
            {
              "name": "CRUD-Employee",
              "description": "N/A",
              "url": "https://github.com/Ewerson-hub/CRUD-Employee"
            },
            {
              "name": "Desafio-Target-Sistemas",
              "description": "N/A",
              "url": "https://github.com/Ewerson-hub/Desafio-Target-Sistemas"
            },
            {
              "name": "Ewerson-hub.github.io",
              "description": "N/A",
              "url": "https://github.com/Ewerson-hub/Ewerson-hub.github.io"
            },
            {
              "name": "FreeCodeCamp",
              "description": "Minhas resoluções e projetos realizados nos cursos do Free Code Camp",
              "url": "https://github.com/Ewerson-hub/FreeCodeCamp"
            },
            {
              "name": "Projeto-Imobiliaria",
              "description": "N/A",
              "url": "https://github.com/Ewerson-hub/Projeto-Imobiliaria"
            },
            {
              "name": "TaskMananger",
              "description": "N/A",
              "url": "https://github.com/Ewerson-hub/TaskMananger"
            }
          ]
            
    }
    return res.status(200).json(JSON.stringify(data))
}


