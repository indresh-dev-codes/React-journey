function UserCard(props)
{
    return(
        <div className="card">
            <h2>Name: {props.name}</h2>
            <p>Role: {props.role}</p>
        </div>
    );
}
export default UserCard;