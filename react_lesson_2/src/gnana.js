import React from 'react';

class Gnana extends React.Component {
  state = {
    name : "Ahmed",
    Age : 23
  }
  clickme = (e) => {
      let divParent = e.target.parentElement.parentElement ;
      divParent.style.display = "NONE";
  }
  showme = (e) => {
      let myElement = document.createElement('div'),
      myChildElement = document.createElement('p'),
      divParent = e.target.parentElement.parentElement ; 
      myChildElement.textContent = "welcome " + this.props.object.name + " and welcome also " + this.state.name;
      myElement.appendChild(myChildElement);
      divParent.appendChild(myElement);
  }
  render(){
    console.log(this.props.object.name);
  return (
    <div className="gnana">
      <button onClick = {this.clickme}>clickme</button>
      <button onMouseOver = {this.showme}>showme</button>
    </div>
  )
}
}

export default Gnana;
