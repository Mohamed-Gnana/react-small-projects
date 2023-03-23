import React from "react";

class Addtodo extends React.Component {
    state = {
        contain : '' , 
        time : ''
    }
    changeme = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }
    submitme = (e) => {
        e.preventDefault();
        if (this.state.contain === '' || this.state.time === ''){
            let msg = e.target.parentElement.firstElementChild ; 
            console.log(msg);
            msg.textContent = "An input field isn't field";
        }else{
            e.target.parentElement.firstElementChild.textContent = "";
            this.props.addtodo(this.state);
            this.setState({
                contain : '',
                time : ''
            })
        }
    }
    render() {
        return (
            <div>
                <span></span>
                <form onSubmit={this.submitme}>
                    <label>Add new todo</label>
                    <input type = "text" id= "contain" onChange = {this.changeme} value = {this.state.contain}/>
                    <label>Add time</label>
                    <input type = "text" id = "time" onChange = {this.changeme} value = {this.state.time}/>
                    <button className = "btn waves-effect waves-light" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Addtodo ;