import React, { Component } from "react";
import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Menu from "./MenuComponent";
import StudentList from "./StudentComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import { ITEMS } from "../shared/functionItems";
import { STUDENTS } from "../shared/studentList";

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
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
