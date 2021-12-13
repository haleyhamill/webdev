import React from "react";

function Notifications(props) {
    const value = props.data.count - 1;
    return <h3>You have {value} unread notifications.</h3>;
}

const notifications = {
    count: 3
};

const element = <Notifications data={notifications} />;
console.log(notifications);