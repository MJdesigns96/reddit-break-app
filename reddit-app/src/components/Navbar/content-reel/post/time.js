import React, { useState } from "react";


export const Time = (props) => {
    var utcSeconds = props.posts.created_utc;
    var time = moment.unix(utcSeconds).format("YYYY-MM-DD HH:mm");
    var timeFromNow = moment(time).fromNow();

    return timeFromNow;
    
}

export default Time;