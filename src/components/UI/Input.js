export default function Input(props){
  
    return(
        <div>
        <label>{props.label}</label>
        <input type={props.type} value={props.value} onChange={props.onChange}/>
        </div>
    );
}