import React from "react";
import { Switch, Route } from "react-router-dom";
import UsersList from "./components/users/usersList";
import Navbar from "./components/navigation/navbar";
import User from "./components/users/user";
import Login from "./components/login";
import Main from "./components/main";

const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path={"/users/:userId"} component={User}/>
                <Route exact path={"/users"} component={UsersList} />
                <Route exact path={"/login"} component={Login} />
                <Route exact path={"/main"} component={Main} />
            </Switch>
        </>
    );
};

export default App;
