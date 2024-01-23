import {useState, useEffect} from 'react';
import data from '../data.json';
import './Example.css';

const Example3 = (props) => {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        setExperiences(data.Experiences);
    }, [])
  
    return (
      <div class='example'>
        <h1>Example3</h1>
        {
            experiences.map((element, index) => {
            return (
                <div key={index}>
                    <img src={element.logo} alt="logo" /><br />
                    <a href={element.url}>{element.companyName}</a>
                    {element.roles.map(role => {
                            return (
                                <>
                                <h4>{role.title}</h4>
                                <p>{role.startDate} {role.location}</p>
                                <p>{role.description}</p>
                                </>
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

export default Example3;