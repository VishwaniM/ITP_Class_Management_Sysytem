import react, { useState, Component } from 'react';
import axios from 'axios';
import { Link, useParams, withRouter } from 'react-router-dom';

class View extends Component {

    constructor(props) {

        super(props);

        this.state = {
            notice: [],
            user: this.props.match.params.id

        }
    }
    componentDidMount() {
        axios.get("http://localhost:5000/postcomment/posts")
            .then(Response => {
                this.setState({ notice: Response.data })
               
            }).catch(function (err) {
                console.log(err);
            })


    }


    //Comment INserting

    render() {
        return (
            <div class="container">
               
            </div>

        );

    }
}
export default View;
/*  {notice.output.map(output=>(
                               <div>comment {output.comment}
                               </div>
                           ))}
                              ))} */