import React, { useContext, useEffect } from "react";
import moment from 'moment';

export const Post = (props) => {

    var utcSeconds = props.posts.created_utc;
    var time = moment.unix(utcSeconds).format("YYYY-MM-DD HH:mm");
    var timeFromNow = moment(time).fromNow();


    const preview = () => {
        if(props.posts.preview) {
            return props.posts.url;
        } else {
            return "https://www.iconpacks.net/icons/2/free-reddit-logo-icon-2436-thumb.png";
        }   
    }

    return (
        <div className="card" >
            <a href={ "https://reddit.com/" + props.posts.permalink }>
               <img className="card-img-top" src={preview()} width="1080"/> 
            </a>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                </svg>
                { props.posts.score } Upvotes
            </div>
            <a className="card-title" href={ "https://reddit.com/" + props.posts.permalink } target="_blank">
                <h3>{ props.posts.title }</h3> 
            </a>
            <div className="card-body">
                <p>{ "Submitted by: " + props.posts.author } <br />{ "Posted: " +  timeFromNow}</p> 
            </div>
            
        </div>
    )
}

export default Post;
