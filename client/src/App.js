import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import DogCreate from "./components/DogCreate/DogCreate";
import Detail from "./components/Detail/Detail";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={Home} />
      <Route path="/home/:id" component={Detail} />
      <Route path="/dog" component={DogCreate} />
    </div>
  );
}

export default App;
