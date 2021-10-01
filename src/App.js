import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import UserInputFields from "./components/UserInputFields";
import UserDetail from "./components/UserDetail";
import Example from "./components/Example";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/add" exact component={UserInputFields} />
        <Route path="/detail" component={UserDetail} />
        <Redirect to="/add" />
      </Switch>
      {/* <Example /> */}
    </div>
  );
}

export default App;
