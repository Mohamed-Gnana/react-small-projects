import React from 'react';
import Gnana from './gnana';
import Ninjas from './ninjas';
import AddNinja from './addninja';

class App extends React.Component {
  state = {
    ninjas : [
      {name : "Ahmed" , Age : 22 , belt: 'black' , id : 1},
      {name : "Mohamed" , Age : 22 , belt: 'red' , id : 2},
      {name : "Gnana" , Age : 22 , belt: 'white' , id : 3}
    ],
    name : "Mohamed",
    Age : 23
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas , ninja];
    this.setState({
      ninjas : ninjas
    });
  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas : ninjas
    })
  }
  render(){
  return (
    <div className="App">
      <h1>Welcome to my first react app</h1>
  <p>welcome {this.state.name} . Your age is {this.state.Age}</p>
  <Gnana object = {this.state}/>
  <Ninjas deleteNinja = {this.deleteNinja} object = {this.state}/>
  <AddNinja addNinja = {this.addNinja}/>
    </div>
  )
}
}

export default App;
