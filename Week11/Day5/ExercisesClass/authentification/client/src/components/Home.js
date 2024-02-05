import {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import { AuthContext } from '../App';

const Home = (props) => {
    const [users, setUsers] = useState([]);
    const {token} = useContext(AuthContext);

    useEffect(()=>{
        getusers();
    }, [])

    const getusers = async() => {
        try {
            const response = await axios.get('http://localhost:3001/users', {
                headers: {
                    'x-access-token': token?.token
                }
            })
            if (response.status === 200) setUsers(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <h1>Home</h1>
            {
                users.map(user => {
                    return (
                        <div key={user.id}>
                            {user.email}
                        </div>
                    )
                })
            }
        </>
    );
};

export default Home;