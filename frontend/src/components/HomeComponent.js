import React from "react";

function Home(props) {
  return (
    <div class="container">
      <div class="row row-content align-items-center">
        <div class="col col-sm col-md">
          <div class="media">
            <div class="media-body">
              <h2>
                <span class="badge badge-secondary">Our Mission</span>
              </h2>{" "}
              <br></br>
              <p class=" d-none d-sm-block">
             
                Our mission is to provide excellent academic opportunities 
                which will help produce dynamic students who will have a broad 
                knowledge, be leaders in their prospective professions, critical 
                thinkers and creative individuals who will be able to operate in 
                any environment, and will have the ability to respond easily to 
                rapidly changing needs of their professions.
              </p>
              <a role="button" class="btn btn-primary" href="#">
                {" "}
                Contine Reading
              </a>
            </div>
            <img
              class="d-flex ml-3 img-thumbnail align-self-center"
              src="assets/images/mission.jpg"
              alt="students"
            ></img>
          </div>
        </div>
      </div>

      <div class="row row-content align-items-center">
        <div class="col col-sm col-md">
          <div class="media">
            <div class="media-body">
              <h2>
                <span class="badge badge-secondary">Our Vision</span>
              </h2>{" "}
              <br></br>
              <p class=" d-none d-sm-block">
             
              To provide affordable quality education, while equipping students 
              with knowledge and skills in their chosen stream, inculcate values, 
              identify hidden talents, provide opportunities for students to 
              realize their full potential and thus shape them into future 
              leaders, entrepreneurs and above all good human beings.
              </p>
              <a role="button" class="btn btn-primary" href="#">
                {" "}
                Contine Reading
              </a>
            </div>
            <img
              class="d-flex ml-3 img-thumbnail align-self-center"
              src="assets/images/vision.jpg"
              alt="students"
            ></img>
          </div>
        </div>
      </div>

      <div class="row row-content align-items-center">
        <div class="col col-sm col-md">
          <div class="media">
            <div class="media-body">
              <h2>
                <span class="badge badge-secondary">
                  Message from proprietor of Institute
                </span>
              </h2>{" "}
              <br></br>
              <p class=" d-none d-sm-block">
                Our goal at DEKMA Institute has been to challenge the
                students academically, grow them socially and emotionally and
                guide them towards independent thinking and problem solving.
                Students are encouraged to display good character and to make
                wise choices that will mould them into being better citizens of
                our nation.
              </p>
              <a role="button" class="btn btn-primary" href="#">
                {" "}
                Contine Reading
              </a>
            </div>
            <img
              class="d-flex ml-3 img-thumbnail align-self-center"
              src="assets/images/principal.jpg"
              alt="principal"
            ></img>
          </div>
        </div>
      </div>

      

      <div class="row mb-5 align-items-center">
        <div class="card card-body bg-light">
          <blockquote class="blockquote">
            <p class="mb-0">
              “The function of education is to teach one to think intensively
              and to think critically. Intelligence plus character – that is the
              goal of true education”
            </p>
            <footer class="blockquote-footer">
              <cite title="Source Title">Martin Luther King Jr</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default Home;
