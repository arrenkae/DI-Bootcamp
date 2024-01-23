import {useState, useEffect} from 'react';
import data from '../data.json';
import './Example.css';

const Example2 = (props) => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        setSkills(data.Skills);
    }, [])
  
    return (
        <div class='example'>
            <h1>Example2</h1>
            {
                skills.map(element => {
                return (
                    <div>
                        <h2>{element.Area}</h2>
                        {element.SkillSet.map(skill => {
                                return (
                                <ul>
                                    <li>{skill.Name}</li>
                                </ul>
                                )
                            })
                        }
                    </div>
                )
                })
            }
      </div>
    )
}

export default Example2;