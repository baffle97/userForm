import React, { useState } from "react";
import AddUsers from "./Components/Users/AddUsers";
import ShowUsers from "./Components/Users/ShowUsers";

const App = () => {
  const [usersList, setUsersList] = useState([]);
  const usersHandler = (uName, uAge) => {
    setUsersList((prevState) => {
      return [
        ...prevState,
        { name: uName, age: uAge, key: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUsers onAddUser={usersHandler} />
      <ShowUsers users2={usersList} />
    </div>
  );
};

export default App;
