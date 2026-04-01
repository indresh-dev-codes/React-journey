function Pots(props) {
  return (
    <div style={{margin:"30px auto", border:"solid 2px white", padding:"10px", width:"1050px"}}>
      <h3>Name: {props.name}</h3>
      <p>Content: {props.content}</p>
    </div>
  );
}
export default Pots;