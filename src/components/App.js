import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import UpdateProfile from "./UpdateProfile";
import ResetPassword from "./ResetPassword";
import AuthProvider from "../contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center w-100"
      style={{ minHeight: "100vh" }}
    >
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/reset-password" component={ResetPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </Container>
  );
}

export default App;
