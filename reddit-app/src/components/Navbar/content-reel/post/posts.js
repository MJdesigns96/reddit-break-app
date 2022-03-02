import React, { useEffect } from "react";

export const Post = (props) => {

    var utcSeconds = props.posts.created_utc;
    var temp = new Date(0);
    temp.setUTCSeconds(utcSeconds);

    return (
        <article>
            <a href={ "https://reddit.com/" + props.posts.permalink } target="_blank">
                <h3>{ props.posts.title }</h3> 
            </a>
            <p>{ "by: " + props.posts.author }</p>
            <p>{ "created: " +  temp}</p>
        </article>
    )
}

export default Post;
