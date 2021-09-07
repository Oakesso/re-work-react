import Student from "./Component/Student";
import Classrom from "./Component/Classroom";
import UsersList from "./Component/UsersList";
import React from "react";
import ReactPlayer from "react-player";

function GreetingMessage() {
  const message = "Hello Ana!";
  return (
    <div>
      <u>{message}</u>
    </div>
  );
}

function WelcomeBlock() {
  return (
    <div>
      <GreetingMessage />
      <em>Welcome to our cool page. It is pleasure to have you here!</em>
    </div>
  );
}

function User(props) {
  console.log(props);
  return <div>User is: {props.firstName}</div>;
}

class Color extends React.Component {
  render() {
    return <div>{this.props.favColor}</div>;
  }
}

function App() {
  return (
    <div className="App">
      <GreetingMessage />
      <hr />
      <WelcomeBlock />
      <hr />
      <Student />
      <hr />
      <Classrom />
      <hr />
      <UsersList>
        <User firstName="Harper" />
        <User firstName="Mike" />
        <User firstName="Alvaro" />
        <User firstName="Andrea" />
      </UsersList>
      <hr />
      <Color favColor="blue" />
    </div>
  );
}

export default App;
