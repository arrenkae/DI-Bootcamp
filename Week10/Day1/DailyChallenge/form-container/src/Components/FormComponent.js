import { useState, useEffect } from 'react';
import './FormComponent.css'

const FormComponent = () => {

    const [inputs, setInputs] = useState({});
  
    const handleChange = (e) => {
      const value = (e.target.type === 'checkbox' ? e.target.checked : e.target.value);
      const name = e.target.name;
      setInputs({...inputs, [name]:value})
    }

    useEffect(() => {
        console.log(inputs);
    });
  
    return (
        <div id='formContainer'>
            <h1>Sample form</h1>
            <form>
                <input type="text" name="fname" placeholder="First Name" onChange={(e) => handleChange(e)}/><br />
                <input type="text" name="lname" placeholder="Last Name" onChange={(e) => handleChange(e)}/><br />
                <input type="text" name="age"  placeholder="Age" onChange={(e) => handleChange(e)}/><br />
                
                <input type="radio" id="gender_male" name="gender" value="male" onChange={(e) => handleChange(e)}/> Male<br />
                <input type="radio" id="gender_female" name="gender" value="female" onChange={(e) => handleChange(e)}/> Female<br />

                <h4>Select your destination</h4>
                <select name="destination" onChange={(e) => handleChange(e)}>
                    <option value="" disabled selected>-- Please choose a destination --</option>
                    <option value='Amsterdam'>Amsterdam</option>
                    <option value='London'>London</option>
                    <option value='New York'>New York</option>
                    <option value='Paris'>Paris</option>
                    <option value='Tel-Aviv'>Tel-Aviv</option>
                </select><br />

                <h4>Dietary restrictions:</h4>
                <input type="checkbox" name="noNuts" onChange={(e) => handleChange(e)} /> Nuts free<br />
                <input type="checkbox" name="noLactose" onChange={(e) => handleChange(e)} /> Lactose free<br />
                <input type="checkbox" name="vegan" onChange={(e) => handleChange(e)} /> Vegan<br />

                <input type="submit" value="Sumbit" />
            </form>
            <hr />
            <div id='info'>
                <h2>Entered information:</h2>
                <p><span class='infoText'>Your name:</span> {inputs.fname} {inputs.lname}</p>
                <p><span class='infoText'>Your age:</span> {inputs.age}</p>
                <p><span class='infoText'>Your gender:</span> {inputs.gender}</p>
                <p><span class='infoText'>Your destination:</span> {inputs.destination}</p>
                <p><span class='infoText'>Your dietary restrictions:</span> </p>
                <span class='infoText'>**Nuts free:</span> {inputs.noNuts ? 'Yes' : 'No'}<br />
                <span class='infoText'>**Lactose free:</span> {inputs.noLactose ? 'Yes' : 'No'}<br />
                <span class='infoText'>**Vegan meal:</span> {inputs.vegan ? 'Yes' : 'No'}
            </div>
        </div>
    )
}

export default FormComponent;