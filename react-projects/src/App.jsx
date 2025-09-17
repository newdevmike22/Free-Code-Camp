import "./App.css";
import Box from "./components/box";

const App = () => {
  return (
    <>
      <Box label="My name is Mike" bgColor="CornflowerBlue" textColor="White" career="Web Developer" large={true} />
      <Box label="My name is Lisa" bgColor="Lavender" textColor="Purple" career="Cyber Security" large={false} />
    </>
  );
};

export default App;
