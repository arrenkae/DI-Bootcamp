import logo from '/home/stokely/study/DI-Bootcamp/Week11/Day3/DailyChallenge/age-counter/src/logo.svg';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { calculateAge, ageUpAsync, ageDownAsync } from "./ageSlice";

const AgeCounter = (props) => {
  const [amount, setAmount] = useState();
  const [birthDate, setBirthDate] = useState();
  const { age, loading } = useSelector(state => state.age);
  const dispatch = useDispatch();

  const showAge = () => {
    if (loading) {
      return <img src={logo} className="App-logo" alt="logo" style={{width: '250px'}}/>}
    return "Your age is " + age;
  }

  return (
    <div>
      <h2>Select your birth date:</h2>
      <input type="date" max={new Date().toISOString().slice(0,10)} onChange={(e) => {setBirthDate(e.target.value)}}/>
      <button onClick={() => dispatch(calculateAge(birthDate))}>Calculate age</button>
      <h1>{showAge()}</h1>
      <input type="number" onChange={(e) => setAmount(Number(e.target.value))} />
      <button onClick={() => {
        if (amount) {dispatch(ageUpAsync(amount))}
      }}> + </button>
      <button onClick={() => {
        if (amount) {dispatch(ageDownAsync(amount))}
      }}> - </button>
    </div>
  );
};
export default AgeCounter;
