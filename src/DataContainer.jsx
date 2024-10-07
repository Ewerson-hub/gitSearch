import './assets/css/dataContainer.css'

const DataContainer = (props) => { 

    if(!props.setVisible) return <></>


    return(
        <div id='data-container'>
            <img src={props.data.avatar} alt="Avatar" />
            
            <h2>Name : {props.data.name}</h2>
            <h4>Bio : {props.data.bio}</h4>
            <a href={props.data.github_link} target="_blank">GitHub Link</a>
            
            <div id='projects'>
                <h2>Projects</h2>
                {props.data.repos.map((repo, id) => (
                    <div id={id}>
                        <div><b>Name : </b> {repo.name}</div>
                        <div><b>Description : </b>{repo.description}</div>
                        <div><b>Url : </b> <a href={repo.url} target='_blank'>{repo.name}</a></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DataContainer
