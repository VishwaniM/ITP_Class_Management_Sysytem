import React, { Component } from "react";
import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Menu from "./MenuComponent";
import StudentList from "./StudentComponent";
import { Switch, Route, Redirect,useParams  } from "react-router-dom";
import { ITEMS } from "../shared/functionItems";
import { STUDENTS } from "../shared/studentList";
//Notice M - Imports
import Login from "./Notice-m/login";
import Tdashboard from "./Notice-m/teacherdashboard"
import View from "./Notice-m/viewnotice"
import Addnot from "./Notice-m/addnotice"
import Editnot from "./Notice-m/yournotices"
import Edit from "./Notice-m/editnotices"


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
            path="/login-n"
            component={() => <Login/>}
          />
          <Route
            exact
            path="/t/:id"
            component={() => <Tdashboard/>}
          />
          <Route
            exact
            path="/viewNotice/:id" 
            render={(props) => <View {...props}/>}
          />
          <Route
            exact
            path="/addnotice/:id" 
            render={(props) => <Addnot {...props}/>}
          />
          <Route
            exact
            path="/editnotices/:id" 
            render={(props) => <Editnot {...props}/>}
          />
          <Route
            exact
            path="/edit/:id" 
            render={(props) => <Edit {...props}/>}
          />
      
          
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
