import react, { useState, Component } from 'react';
import axios from 'axios';

import { Link, useParams, withRouter } from 'react-router-dom';
import Comment from './addcomment'
import Addcomment from './addcomment';


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
                <div class="notisce"> </div>
                Your Username :  {this.state.user}

                {this.state.notice.map(notice => (

                        
                    <div class="container">
                        <div class="shadow-lg p-3 mb-5 bg-white rounded">

                        <div class="col-notice-8">
                            <div class="media g-mb-30 media-comment">
                                <div class="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                                    <div class="g-mb-15">
                                        <h5 class="h5 g-color-gray-dark-v1 mb-0" style={{ color: 'red' }}>{notice.subject}</h5>
                                        <span class="g-color-gray-dark-v4 g-font-size-12">{notice.time}</span>
                                    </div>

                                    <p>{notice.body}</p> <br></br>
                                    <div class="shadow-sm p-3 mb-5 bg-white rounded">
                                        <Addcomment message={notice.notid} id={this.state.user} />

                                    </div>
                                    {notice.output.map(output => (
                                        <div class="container">

                                            <div class="col-md-8">
                                                <div class="media g-mb-30 media-comment">
                                                    <div class="shadow p-3 mb-5 bg-white rounded">
                                                        <div class="g-mb-15">
                                                            <span class="g-color-gray-dark-v4 g-font-size-12"><b>{output.userid}</b></span> on {output.time}
                                                            <span class="g-color-gray-dark-v4 g-font-size-12"></span>
                                                        </div>

                                                        <p><em>{output.comment}</em></p> <br></br>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>))}

                                </div>
                            </div>
                        </div>
                    </div></div>
                ))}
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