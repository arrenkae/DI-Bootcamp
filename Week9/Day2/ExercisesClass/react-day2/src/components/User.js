// import { userStyle } from "./styling";
import './User.css';
// import Button from 'react-bootstrap/Button';

import React from 'react';

// class User extends React.Component {
//     // constructor() {
//     //     super();
//     // }
//     render() {
//         const { name, email, id, username } = this.props.userinfo;
//         return (
//             <div className='userbox'>
//                 <img src={`https://robohash.org/${id}?size=150x150`} alt=""/>
//                 <h2>{name}</h2>
//                 <h3>{username}</h3>
//                 <h4>{email}</h4>
//             </div>
//         );
//     }
// }

const User = (props) => {
    const { name, email, id, username } = props.userinfo;
    return (
        // <div style={userStyle}>
        <div className='userbox'>
        {/* <div className='tc bg-light-green br3 ma2 dib bw2 grow shadow-5'> */}
            <img src={`https://robohash.org/${id}?size=150x150`} alt=""/>
            <h2>{name}</h2>
            <h3>{username}</h3>
            <h4>{email}</h4>
            {/* <Button variant="outline-primary">More Info</Button> */}
        </div>
    )
}

export default User;