import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Body from "./components/body/Body";
import { MyForm } from "./components/bookingform/CustomInputField";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      {/* <MyForm /> */}
      <Footer />
    </div>
  );
}

export default App;
