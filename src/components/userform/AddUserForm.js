import { useState } from 'react'
import Button from '../UI/Button'
import styles from '../userform/AddUserForm.module.css'
export default function AddUserForm() {
   
    const[enteredUserName, setEnteredUserName] = useState('');
    const[enteredAge, setEnteredAge] = useState('');
    const handleUserNameInputChange = (e)=>{
        setEnteredUserName(e.target.value);
    }
    const handleAgeInputChange =(e)=>{
        setEnteredAge(e.target.value);
    }
    const submitForm = (e)=>{
        e.preventDefault();
        console.log("H1value");
        const newUser = {
            userName : enteredUserName,
            age: enteredAge
        }
        console.log(newUser);
        setEnteredUserName('');
        setEnteredAge('');
    }
    return (
        <>
        <form onSubmit={submitForm} className={styles.input} >
            <label>User Name</label>
            <input type='text' name='username' value={enteredUserName} onChange={handleUserNameInputChange}/>
            <label >Age (Years)</label>
            <input type='text'  name='age' value={enteredAge} onChange={handleAgeInputChange} />
            <Button/>
        </form>
      </>
    )
}