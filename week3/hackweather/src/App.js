import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CityInfo from "./CityInfo";
import More from "./More";
import Errors from "./Errors";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={CityInfo} />
          <Route path="/more/:id" component={More} />
          <Route path="*" component={Errors} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
