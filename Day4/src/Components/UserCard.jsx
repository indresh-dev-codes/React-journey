function UserCard(props)
{
    return(
        <div style={{margin:"30px auto", border:"solid 2px white", padding:"10px", width:"1050px"}}>
            <h2>Id: {props.id}</h2>
            <h2>Name: {props.name}</h2>
            <p>Role: {props.role}</p>
        </div>
    );
}

export default UserCard;