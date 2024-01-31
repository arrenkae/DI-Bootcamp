import { useSelector } from "react-redux";
import { useState } from "react";

const Users = (props) => {
  const users = useSelector((state) => state.users);
  
  return (
    <div>
        <select>
        {users.map((user) => {
          return (
            <option value={user.username}>{user.username}</option>
          );
        })}
        </select>
    </div>
  );
};
export default Users;
