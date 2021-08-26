import { useState } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card';
import Input from '../UI/Input'
import styles from './AddUserForm.module.css'
export default function AddUserForm(props) {

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [checkNumberInput, setCheckNumberInput] = useState(true);
    const [checkStringInput, setCheckStringInput] = useState(true);
    const handleUserNameInputChange = (e) => {
        const t = e.target.value
        // console.log(t);
        // if(isNaN(e.target.value) && t === ''){
        //     setCheckStringInput(false);
        //     return;
        // }
        
        setEnteredUserName(e.target.value);
    }
    const handleAgeInputChange = (e) => {

        // if(isNaN(e.target.value)){
        //      setCheckNumberInput(false);
        //      return;
        // }
        setEnteredAge(e.target.value);
    }

    // const CheckInputHandler = (input) => {
    //     switch (input) {
    //         case value:

    //             break;

    //         default:
    //             break;
    //     }
    //}
    const submitForm = (e) => {
        e.preventDefault();
        //console.log(enteredUserName);
        const newUser = {
            username: enteredUserName,
            age: enteredAge
        }
        //console.log(newUser);
        props.addUser(newUser);
        setEnteredUserName('');
        setEnteredAge('');
    }
    return (

        <Card>
            <form onSubmit={submitForm} className={styles.input} >
                <Input type='text' label='User Name' value={enteredUserName} onChange={handleUserNameInputChange} />
                <Input type='text' label='Age' value={enteredAge} onChange={handleAgeInputChange} />
                <Button content='Add User' type='submit'/>
            </form>
        </Card>


    )
}