import { useState } from "react";


const User = ({ name }) => {
    const [count] = useState(0);
    const [count1] = useState(1);

    return(
        <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
           <h2>Count= {count} </h2>
           <h2>Count= {count1} </h2>
           <h2> Name:{name} </h2>
           <h3> Location: Badami</h3>
           <h4> Contact:@megha</h4>
        </div>
    );
};

export default User;