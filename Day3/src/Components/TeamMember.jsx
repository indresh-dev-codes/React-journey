function TeamMember(props)
{
    return(
        <div>
            <h3>Name: {props.name}</h3>
            <h5>Role: {props.role}</h5>
        </div>
    );
}
export default TeamMember;