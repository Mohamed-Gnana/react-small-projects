import React from "react";
//import axios from "axios";
import { Link } from "react-router-dom";
import Pic from "../mzz.jpg";
import { connect } from "react-redux";

class Home extends React.Component{
    /*state = {
        posts : []
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({
                    posts : res.data
                });
            });
    }*/
    
    render() {
        console.log(this.props);
        const posts = this.props.posts;
        const postslist = posts.length ? (
            posts.map(post => {
                return(
                    <div className = 'post card' key = {post.id}>
                        <img src = {Pic} alt ="mozaz"/>
                        <div className = "card-content">
                            <Link to = {"/" + post.id}>
                                <span className = "card-title">{post.title}</span>
                            </Link>
                            <p className = "card-body">{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <p className = "center dark-text lighten-3">There is No more posts</p>
        );
        return (
            <div className = "home container">
                <h1 className = "center red-text darken-3">Home</h1>
                {postslist}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts : state.posts
    } ;
}

export default connect(mapStateToProps)(Home) ;