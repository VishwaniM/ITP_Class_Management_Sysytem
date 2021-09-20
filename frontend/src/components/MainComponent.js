import React, { Component } from "react";
import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Menu from "./MenuComponent";
import StudentList from "./StudentComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import { ITEMS } from "../shared/functionItems";
import { STUDENTS } from "../shared/studentList";

import Login from "./exam/login";
import Tdash from "./exam/teacherdashboard"
import Sdash from "./exam/studentdashboard"
import Result from "./exam/marks"
import Schedule from "./exam/schedules"
import Papers from "./exam/papers"
import Paper from "./exam/papers";
import Dpaper from "./exam/paperdownload"
import Sresult from "./exam/studentresult"
import Sschedule from "./exam/studentSchedule"
import UpdateMark from "./exam/updateresult"
import UpdateSche from "./exam/updateschedule"


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ITEMS,
      students: STUDENTS,
    };
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu items={this.state.items} />}
          />
          <Route
            exact
            path="/studentList"
            component={() => <StudentList students={this.state.students} />}
          />
          <Route
            exact
            path="/login-ex"
            component={() => <Login/>}
          />
          <Route
            exact
            path="/t/:id"
            component={() => <Tdash/>}
          />
          <Route
            exact
            path="/s/:id"
            component={() => <Sdash/>}
          />
          <Route
            exact
            path="/marks"
            component={() => <Result/>}
          />
          <Route
            exact
            path="/schedule"
            component={() => <Schedule/>}
          />
          <Route
            exact
            path="/papers"
            component={() => <Paper/>}
          />
          <Route
            exact
            path="/paperdownload"
            component={() => <Dpaper/>}
          />
          <Route
            exact
            path="/studentresult/:id"
            render={(props) => <Sresult {...props}/>}
          />
          <Route
            exact
            path="/studentschedule"
            component={() => <Sschedule/>}
          />
          <Route
            exact
            path="/editmark/:id"
            render={(props) => <UpdateMark {...props}/>}
          />
          <Route
            exact
            path="/editschedule/:id"
            render={(props) => <UpdateSche {...props}/>}
          />
         
          
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
