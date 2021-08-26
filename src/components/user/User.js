import Card from '../UI/Card'
export default function User(props){
    return(
        <Card>
            <h4>{props.username}({props.age} years old)</h4>
        </Card>
    )
}