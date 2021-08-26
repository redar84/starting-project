import User from "./User"

export default function ListOfUsers(props){
    
        return(
            props.users.map((user)=>
            <User username={user.username} 
                  age={user.age}
                  key={Math.random()}/>
            )
            );
}