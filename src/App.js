import logo from "./logo.svg";
import "./App.css";
// import Home from "./pages/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Body from "./components/body/Body";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      {/* <Home /> */}
      <Footer />
    </div>
  );
}

export default App;
