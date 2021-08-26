import React, {useState} from 'react';
import ListOfUsers from './components/user/ListOfUsers';
import AddUserForm from './components/userform/AddUserForm';
import Error from './components/UI/Error'
function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const addUser = (user) =>{
    
    if(user.username.trim().length === 0){
        setError(true);
        return;
    }
    console.log(error);
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
        {error && <Error onClick={closeErrorModal}/>}
    </div>
  );
}

export default App;
