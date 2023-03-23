import React from "react";
//import axios from "axios";
import Pic from "../mzz.jpg";
import { connect } from "react-redux";

class Post extends React.Component {
    /*state = {
        post : null
    }
    componentDidMount() {
        let id = this.props.match.params.post_id ; 
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => {
                this.setState({
                    post : res.data
                })
            });
    }*/
    handleclick = (e) => {
        this.props.deletepost(this.props.post.id);
        this.props.history.push("/");
    }
    render() {
        console.log(this.props)
        const post = this.props.post ? (
                <div className = 'post card' key = {this.props.post.id} onClick = {this.handleclick}>
                    <img src = {Pic} alt ="mozaz"/>
                    <div className = "card-content">
                        <span className = "card-title">{this.props.post.title}</span>
                        <p className = "card-body">{this.props.post.body}</p>
                    </div>
            </div>
        ) : (
            <p className = "center red-text darken-4">There is no such post</p>
        )
        return(
            <div className = "container">
                {post}
            </div>
        );
    }
}

const mapStateToProps = (state , ownProps) => {
    let id = ownProps.match.params.post_id;
    console.log(id);
    console.log({
        post: state.posts.find(post => post.id+"" === id)
    });
    return {
        post: state.posts.find(post => post.id+"" === id)
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletepost : (id) => {dispatch({type:"Delete_Post" , id : id})}
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Post) ;