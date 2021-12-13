import React from "react";

function WelcomeUser(props) {
    const {username, notifications} = props;
    
    return <div>Welcome {username}! You've got {notifications} unread notifications.</div>;
}