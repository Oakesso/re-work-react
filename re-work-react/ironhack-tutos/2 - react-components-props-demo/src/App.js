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
        <User firstName="Harper" age="31" />
        <User firstName="Mike" age="32" />
        <User firstName="Alvaro" age="33" />
        <User firstName="Andrea" age="34" />
      </UsersList>
      <hr />
      <Color favColor="blue" />
      <hr />
      <ReactPlayer
        url="https://www.youtube.com/watch?v=_nrm_vei5TE&t=15s"
        controls
        volume="0.5"
      />
    </div>
  );
}

export default App;
