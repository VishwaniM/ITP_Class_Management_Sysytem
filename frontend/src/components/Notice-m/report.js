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
      <div class="container" class="shadow-lg p-3 mb-5 bg-white rounded">
        <div class="container">
         <h3> Notices Count :  {this.state.notice.length} </h3><br></br><br></br>
          {this.state.notice.map(notice => (


            <div class="container">
              <div>
                <h5>{notice.subject}</h5>Added time : {notice.time} <br></br>
                {notice.output.map(output => (
                  <div class="container">
                   Feedback by <b>{output.userid} </b> :  {output.comment}
                  </div>))}<br></br><br></br>
              </div></div>
          ))}


        </div></div>
    );
  }
}
class Example extends React.PureComponent {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => {
            
           
            return <a href="#">Download Report!</a>;
          }}
          content={() => this.componentRef}
        />
        <Report ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}
export default Example;