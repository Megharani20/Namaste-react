import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            userInfo: {
                name:"Dummy",
                location:"Default",
                
            },
        };
       // console.log(this.props.name + "Child Constructor");

    }

    async componentDidMount() {
       // console.log(this.props.name + "child component did mount");

        //API call

        const data = await fetch("https://api.github.com/users/Megharani20");
        const json= await data.json();

        this.setState({
            userInfo: json,
        });

        console.log(json);
    }

    render () {
        const { name, location, avatar_url } = this.state.userInfo;

       // console.log("child render");


        return(
            <div className="user-card">
                <img className="h-[200px] w-[200px]" src={avatar_url} />
                <h2> Name:{name} </h2>
                <h3> Location:{location} </h3>
               <h4> Contact:@Megharani</h4>
            </div>
        );
    }
}

export default UserClass;
