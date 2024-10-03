function DataContainer (props){
    console.log(props.data)
    let styles = (props.setVisible)? {display:"block"} : {display:"none"};
    

    return(
        <div style={styles}>
            <img src={props.data.avatar} alt="Avatar" />
            <h2>Name : {props.data.name}</h2>
            <h4>Description : {props.data.bio}</h4>
            <a href={props.data.github_link}>GitHub Link</a>
            <div>
                <h2>Repos</h2>
            </div>
        </div>
    )
}

export default DataContainer
