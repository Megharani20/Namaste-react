import User from "./user";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component{
    constructor(props) {
        super(props);

        //console.log("Parent Constructor");
    }

  componentDidMount() {
        //console.log("parent component did mount");

    }

    render() {
        //console.log("Parent render");
        return(
            <div>
                <h1>About Class Component</h1>
                <h2>This is Namaste react Web Series</h2>
                <div>
                   LoggedIn User
                     <UserContext.Consumer>
                         {({ loggedInUser }) => (
                          <h1 className="text-xl font-bold">{loggedInUser}</h1>
                         )}
                     </UserContext.Consumer>
                </div>
                <UserClass name={"Megharani"} location={"Bangalore"}/>
               
            </div>
        );
    }
}

export default About;
