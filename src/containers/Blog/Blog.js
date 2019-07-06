import React, {Component} from "react";
import axios from "axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
    state = {
        posts: [],
        selectedPost: null,
        shouldFetch: false
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                const my4Posts = response.data.slice(0, 4);
                const withAuthor = my4Posts.map(post => {
                    return ({
                        ...post,
                        author: 'Damian'
                    });
                })
                this.setState({posts: withAuthor})
            });
    }

    handleClick = id => {
        let selectedPost = this.state.posts.filter(post => id === post.id);

        this.setState({shouldFetch: true, selectedPost: selectedPost});

    }

    render() {

        /*
               let my5Posts = [];
               if(this.state.posts){
                   console.log(this.state.posts[1].title)
                   for(let i = 0; i<=4;i++){
                       my5Posts.push(<Post  title={this.state.posts[i].title}/>)
                   }
               console.log(my5Posts);
               }
        */
        const posts = this.state.posts.map(post => {
            return (
                <Post key={post.id} id={post.id} title={post.title} author={post.author} content={post.body}
                      handleClick={this.handleClick}/>)
        });
        console.log(this.state.selectedPost)
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost selectedPost={this.state.selectedPost}/>
                </section>
                <section>
                    <NewPost/>
                </section>
            </div>
        );
    }
}

export default Blog;
