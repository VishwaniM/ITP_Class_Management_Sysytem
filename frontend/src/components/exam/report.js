import React from 'react';
import ReactToPrint from 'react-to-print';
import axios from 'axios';

export class Report extends React.PureComponent {
    constructor(props) {

        super(props);

        this.state = {

            date: Date().toLocaleString(),
            marks: [],
            markssubs: [],
            allsubjects: [],
            allmarks: [],
            // total : 0,
            marksforsub: [],
            subandmarks: [],
            schedules: [],
            papers: [],
            subjectswithmarks: []

        }
    }
    componentDidMount() {
        axios.get("http://localhost:5000/result/viewall")
            .then(Response => {
                this.setState({ marks: Response.data })
        
                for (let index = 0; index < this.state.marks.length; ++index) { //getting Only Subjects

                    this.state.markssubs[index] = this.state.marks[index].subjectname;
                }
                const uniquesubs = Array.from(new Set(this.state.markssubs));
                this.state.allsubjects = uniquesubs;



                for (let outer = 0; outer < uniquesubs.length; ++outer) {

                    const sub = uniquesubs[outer];
                   

                    axios.get(`http://localhost:5000/result/findsubresult/${sub}`)
                        .then(Response => {
                            this.setState({ marksforsub: Response.data })

                            let total = 0;
                            let length = this.state.markssubs.length;

                            for (let index = 0; index < length; ++index) {
                                const result = Response.data[index].marks;

                                total = total + result;

                                this.state.subandmarks[outer] = total;
                                this.state.allmarks = this.state.subandmarks;
                                


                            }



                        }).catch(function (err) {
                            
                        })
                }


            }).catch(function (err) {
               
            })





        axios.get("http://localhost:5000/schedule/viewall")
            .then(Response => {
                this.setState({ schedules: Response.data })
              


            }).catch(function (err) {
                console.log(err);
            })


        axios.get("http://localhost:5000/paper/downloadpapers")
            .then(Response => {
                this.setState({ papers: Response.data })
                //console.log("Papers " , this.state.papers)


            }).catch(function (err) {
                console.log(err);
            })



    }

    render() {
        return (
            <div class="container">
                <h2>Registered Subjects </h2>

                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        {this.state.allsubjects.map(subs => (
                            <tr>
                                <th scope="col"><u>{subs}</u></th>

                            </tr>
                        ))}
                    </thead>
                    <tbody>


                        <tr>

                            <td scope="row"><div><b></b></div></td>

                        </tr>

                    </tbody>
                    <br></br> <br></br>
                </table>
                <br></br>
                <h2>Schedule Details </h2>
                <br></br>
                {this.state.schedules.map(sche => (
                    <div class="p-3 mb-2 bg-secondary text-white" style={{ width: "600px" }}>
                        <h3>{sche.schedule_description}</h3>
                        <p>Examiner Name : {sche.examiner_name}</p>
                        <p><mark>Date and Time : {sche.date_time}</mark></p>
                    </div>
                ))}
                <br></br>
                <h2> Paper Details </h2>
                <br></br>
                {this.state.papers.map(sche => (
                    <div class="p-3 mb-2 bg-secondary text-white" style={{ width: "600px" }}>
                        <h3>{sche.paperdescription}</h3>
                        <p><mark>Resource Details : {sche.file_path}</mark></p>
                    </div>
                ))}
<br></br><br></br><br></br>
                <h2>Mark Details</h2>
                <br></br>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th scope="col"><u>Student ID</u></th>
                            <th scope="col"><u>Subject Name</u></th>
                            <th scope="col"><u>Marks</u></th>
                            <th scope="col"><u>Grade</u></th>
                            <th scope="col"><u>Submit Date</u></th>
                            <th scope="col"><u>Exam Code</u></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.marks.map(mark => (

                            <tr>
                                <td scope="row"><div><b>{mark.studentid}</b></div></td>
                                <td scope="row"><div><b>{mark.subjectname}</b></div></td>
                                <td scope="row"><div><b>{mark.marks}</b></div></td>
                                <td scope="row"><div><b>{mark.grade}</b></div></td>
                                <td scope="row"><div><b>{mark.date}</b></div></td>
                                <td scope="row"><div><b>{mark.examcode}</b></div></td>

                                

                            </tr>


                        ))}
                    </tbody>
                    <br></br> <br></br>
                </table>



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