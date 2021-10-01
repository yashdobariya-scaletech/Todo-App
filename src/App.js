import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import UserInputFields from "./components/UserInputFields";
import UserDetail from "./components/UserDetail";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/add" exact component={UserInputFields} />
        <Route path="/detail" component={UserDetail} />
        <Redirect to="/add" />
      </Switch>
    </div>
  );
}

export default App;
