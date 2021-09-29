import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import UserInput from "./components/UserInput";
import UserDetail from "./components/UserDetail";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/add" exact component={UserInput} />
        <Route path="/detail" component={UserDetail} />
        <Redirect to="/add" />
      </Switch>
    </div>
  );
}

export default App;
