import React, { Component } from "react";
import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Menu from "./MenuComponent";

import StudentCom from "./StudentCom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import StudentList from "./StudentComponent";
import { useParams  } from "react-router-dom";

import { ITEMS } from "../shared/functionItems";
import { STUDENTS } from "../shared/studentList";
//Notice M - Imports
import Login from "./Notice-m/login";
import Tdashboard from "./Notice-m/teacherdashboard"
import View from "./Notice-m/viewnotice"
import Addnot from "./Notice-m/addnotice"
import Editnot from "./Notice-m/yournotices"
import Edit from "./Notice-m/editnotices"
import Report from "./Notice-m/report"




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
import Report from "./exam/report"


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
<<<<<<< HEAD
            path="/login-ex"
=======
            path="/login-n"
>>>>>>> main
            component={() => <Login/>}
          />
          <Route
            exact
            path="/t/:id"
<<<<<<< HEAD
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
=======
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
>>>>>>> main
          />
          <Route
            exact
            path="/report"
<<<<<<< HEAD
            render={(props) => <Report {...props}/>}
          />
         
=======
            component={() => <Report/>}
          />
      
<<<<<<< HEAD

=======
>>>>>>> 52e1060bdf9124b89dceabe0aa22dc69a6d1ee14
>>>>>>> main
>>>>>>> ff29178f3bde0a2d874d5ea3c7a5452576ec0a9f
          
          <Redirect to="/home" />
        </Switch>
        <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default Main;
