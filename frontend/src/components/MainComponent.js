import React, { Component } from "react";
import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Menu from "./MenuComponent";
import StudentCom from "./StudentCom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
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
        <BrowserRouter>
        <Header />
        <Switch>

          <Route path="/" exact component={() => <Redirect to="/home" />} />

          <Route path="/home" component={HomePage} />

          <Route exact path="/menu" component={() => <Menu items={this.state.items} />}/>  

          <Route path="/students/search" exact component = {StudentCom}/>

          <Route path="/students" exact component={() => <Redirect to="/students"/>}><StudentCom /></Route>
                     
          
          <Redirect to="/home" />
        </Switch>
        <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default Main;
