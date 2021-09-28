import { BrowserRouter, Switch, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";
import Topbar from "./components/topbar/topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userlist/UserList";
import User from "./pages/user/User";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route path="/users" component={UserList} />
          <Route path="/user/:userId" component={User} />
          <Route path="/" component={Home} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
