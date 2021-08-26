import React, {useState} from 'react';
import ListOfUsers from './components/user/ListOfUsers';
import AddUserForm from './components/userform/AddUserForm';
import Error from './components/UI/Error'
function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState({
    state: false,
    ermessage: ''
  });
  const addUser = (user) =>{
    if(user.username.trim().length === 0){
        setError((prevState) => {return {...prevState, state: true, ermessage : "user name cannot be epty"}});
        return;
    }
    if(user.age <= 0){
      setError((prevState) => {return {...prevState, state: true, ermessage : "age should be > 0"}});
        return;
    }
    setUsers((prevState)=>{
         return [...prevState, user];
    })
  }
  const closeErrorModal = ()=>{
    setError(false);
  }
  
  return (
    
    <div>
        <AddUserForm addUser={addUser}/>
        <ListOfUsers users={users}/>
        {error.state && <Error onClick={closeErrorModal} ermessage={error.ermessage}/>}
    </div>
  );
}

export default App;
