import './App.css';
import List from './List';
// import Button from './Button';
// import Person from './Person';
// import Header from './Header';
function App() {
  function Hii(){
    alert("Thanks for Clicking")
  }
  return (
    <div className="App">
      {/* <Person name="Afsar" age={20}/> */}
      {/* <Button text="Submit It" onClick={Hii}></Button> */}
      {/* <Header title="This is a title..."></Header> */}
      <List item1="Chocolate" item2="Burger" item3="Pizza" item4="Biryani" item5="Halwa"></List>
    </div>
  );
}

export default App;
