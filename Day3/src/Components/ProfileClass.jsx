import {Component} from "react";

class ProfileClass extends Component
{
    render()
    {
        return(
            <div>
                <h2>Name: {this.props.name}</h2>
                <h3>Role: {this.props.role}</h3>
            </div>
        )
    }
}
export default ProfileClass;