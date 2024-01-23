import {useState, useEffect} from 'react';
import data from '../data.json';
import './Example.css';

const Example1 = (props) => {
    const [socials, setSocials] = useState([]);
  
    useEffect(() => {
        setSocials(data.SocialMedias);
    }, [])
  
    return (
      <div class='example'>
        <h1>Example1</h1>
        {
          socials.map(link => {
            return (
              <ul>
                <li><a href={link}>{link}</a></li>
              </ul>
            )
          })
        }
      </div>
    )
}

export default Example1;