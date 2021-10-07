import React from 'react';
import ReactToPrint from 'react-to-print';
import axios from 'axios';

export class Report extends React.PureComponent {
    constructor(props) {

        super(props);

        this.state = {
            
            date: Date().toLocaleString(),
            notice: []

        }
    }
    componentDidMount() {
        axios.get("http://localhost:5000/postcomment/posts")
            .then(Response => {
                this.setState({ notice: Response.data })
                console.log(this.state.notice)
               
            }).catch(function (err) {
                console.log(err);
            })

    }

    render() {
      return (
          <div class="container">
              {this.state.notice.map(notice => (
                               <div>Post {notice.body.slice(0,10)}

 
  
                           

                  <div class="card-group">
  <div class="card" style={{}}>
    <div class="card-body">
      <h5 class="card-title">{notice.subject.slice(0,10)}</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>   </div>  </div> ))}    
        
        </div>
      );
    }
  }
  class Example extends React.PureComponent {
    render() {
      return (
        <div>
          <ReactToPrint
            trigger={() => {
              // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
              // to the root node of the returned component as it will be overwritten.
              return <a href="#">Print this out!</a>;
            }}
            content={() => this.componentRef}
          />
          <Report ref={el => (this.componentRef = el)} />
        </div>
      );
    }
  }
  export default Example;