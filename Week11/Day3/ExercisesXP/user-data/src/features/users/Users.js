import { useSelector } from "react-redux";

const Users = (props) => {
  const { users, status } = useSelector(state => state.users);

  if(status === 'loading') return <p>Loading...</p>
  if(status === 'failed') return <p>Oops! Something went wrong</p>

  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <h3>{user.username}</h3>
            <h4>{user.email}</h4>
            <p>{user.address.street} {user.address.suite}, {user.address.city}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Users;
