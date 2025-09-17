import "./App.css";
import Greeting from "./components/title";
import Description from "./components/description";
import Message from "./components/message";

const App = () => {
  return (
    <>
      <h1>My name is Big Mike.</h1>
      <Greeting />
      <Description />
      <Message text="Props are pretty simple" bgColor="Yellow" />
      <Message text="Hola programmers!" bgColor="CornflowerBlue" />
      <Message text="Big Mike was here." bgColor="Beige" />
    </>
  );
};

export default App;
