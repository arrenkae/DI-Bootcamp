import { useState } from 'react';

const SearchUsers = (props) => {
    const [searchText, setSearchText] = useState('');
    return (
     <div>
        <input onChange={(e) => setSearchText(e.target.value)}/>
        <button onclick = {props.searchFunc(searchText)}>Search</button>
     </div>
    );
};

export default SearchUsers;