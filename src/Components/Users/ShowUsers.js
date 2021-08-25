import React from "react";
import Card from "../UI/Card";
import classes from "./ShowUsers.module.css";

const ShowUsers = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users2.map((user) => (
          <li key={user.key}>
            {user.name}({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ShowUsers;
