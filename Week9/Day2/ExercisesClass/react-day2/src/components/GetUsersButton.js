const GetUsersButton = (props) => {
    return (
     <div>
        <button onClick={props.getUsersFunc}>Get Users</button>
     </div>
    );
};

export default GetUsersButton;