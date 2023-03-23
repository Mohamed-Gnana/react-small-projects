import React from 'react';

class AddNinja extends React.Component {
    state = {
        name : null , 
        Age : null , 
        belt : null 
    }
    handlechange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }
    handlesubmit = (e) => {
        e.preventDefault();
        console.log(this.state , this.props , this.props.addNinja);
        this.props.addNinja(this.state);
    }
    render(){
        return(
        <div className = "form-div">
            <form onSubmit = {this.handlesubmit}>
                <label htmlFor = "name">Name : </label>
                <input height = "20px" width = "100px" type = "text" id = "name" onChange = {this.handlechange}/>
                <br/><label htmlFor = "Age">Age : </label>
                <input height = "20px" width = "100px" type = "text" id = "Age" onChange = {this.handlechange}/>
                <br/><label htmlFor = "belt">Belt : </label>
                <input height = "20px" width = "100px" type = "text" id = "belt" onChange = {this.handlechange}/>
                <br/><button>Submit</button>
            </form>
        </div>
        )    
}
}

export default AddNinja ;