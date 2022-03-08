import React from "react";
import moment from 'moment';

export const Time = () => {
    const getTime = (props) => {
       var utcSeconds = props.posts.data.created_utc;
        var time = moment.unix(utcSeconds).format("YYYY-MM-DD HH:mm");
        var timeFromNow = moment(time).fromNow();

        return timeFromNow
    }

    

    return (
        <Time getTime={getTime} />
    )
    
}
