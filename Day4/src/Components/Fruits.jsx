function Fruits(props) {
  return (
    <div style={{margin:"30px auto", border:"solid 2px white", padding:"10px", width:"1050px"}}>
      <h2>Fruit: {props.name}</h2>
    </div>
  );
}
export default Fruits;