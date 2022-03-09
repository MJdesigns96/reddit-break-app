import React from "react";
import moment from 'moment';
import './posts.css';

export const Post = (props) => {

    var utcSeconds = props.posts.created_utc;
    var time = moment.unix(utcSeconds).format("YYYY-MM-DD HH:mm");
    var timeFromNow = moment(time).fromNow();

    const p_p_hint = props.posts.post_hint;

    const preview = () => {
        if (p_p_hint == "image") {
            return props.posts.url;
        } else if (p_p_hint == "link") {
            if (props.posts.thumbnail == "default") {
                return "https://www.iconpacks.net/icons/2/free-reddit-logo-icon-2436-thumb.png";
            }
            return props.posts.thumbnail;
        } else if (p_p_hint == "rich:video") {
            return props.posts.media.oembed.thumbnail_url;
        } else {
            return "https://www.iconpacks.net/icons/2/free-reddit-logo-icon-2436-thumb.png";
        }   
    };

    var comments = props.posts.num_comments;

    const subreddit_id = props.posts.subreddit_name_prefixed;

    return (
        <div className="card" >
            <a id='preview' href={ props.posts.url } target="_blank" >
               <img 
                    className="card-img-top"
                    src={preview()}
                    alt="Link to Article"
                    /> 
            </a>
            <div id='upvote-counter'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                </svg>
                {" "}
                { props.posts.score } Upvotes
            </div>
            <a className="card-title" href={ "https://reddit.com/" + props.posts.permalink } target="_blank">
                <h3>{ props.posts.title }</h3> 
            </a>
            <div className="card-body">
                <p>
                    { "Posted by: u/" + props.posts.author}
                    {"   "}
                    { timeFromNow }
                    {" "}
                    { "in " + subreddit_id }
                </p>
                <a href={ "https://reddit.com/" + props.posts.permalink } target="_blank">
                    <h5>{"Comments: " + comments}</h5>
                </a>
            </div>
        </div>
    )
}

export default Post;
