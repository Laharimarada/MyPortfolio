import React from "react";

function About() {
  return (
    <div id="About" className="About container my-5">
      {/* <p className="card-text"> */}
      <h1 style={{ textAlign: "center" }}>INTRODUCING LAHARI</h1>

      <div className="card">
        <div className="card-body"></div>

        <p>
          GOOD DAY, MY SELF LAHARI.I AM FROM HYDERABAD.I HAVE COMPLETED MY
          B.TECH FROM ELLENKI COLLEGE OF ENGINEERING AND TECHNOLOGY IN THE
          STREAM COMPUTER SCIENCE AND ENGINEERING WITH AGGREGATE CGPA OF 7.3 IN
          YEAR 2023.I AM BELONGS TO A NUCLEAR FAMILY.MY SHORT TERM GOAL IS TO
          GET A JOB IN A REPUTED COMPANY AND LONG TERM GOAL IS TO ACHIEVE A GOOD
          POSITION LIKE YOURS WHERE I CAN BUILD MY CAREER AND HELP THE
          ORAGANIZATION TOO.MY HOBBIES ARE TRAVELLING .LASTLY I BELIEVE IN
          LEARNING FROM MY PAST MISTAKES AND EXPERIENCES.
        </p>
      </div>

      <h1 style={{ textAlign: "center" }}>QUALIFICATIONS</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div class="card h-100">
            {/* <img src="..." class="card-img-top" alt="..."/> */}
            <div className="card-body">
              <h5 className="card-title">SSC</h5>
              <p className="card-text">
                I HAVE COMPLETED MY SSC FROM BHASHYAM HIGH SCHOOL IN THE YEAR
                2017.
              </p>
              <b>ACADEMIC ACHIEVEMENTS:</b>
              <p>
                I WON THE SECOND PRIZE IN A DRAWING COMPETITION AND RECEIVED A
                CERTIFICATE FROM CENTRAL BANK OF INDIA.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">CGPA:8.8</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            {/* <img src="..." class="card-img-top" alt="..."/> */}
            <div className="card-body">
              <h5 className="card-title">INTERMEDIATE</h5>
              <p className="card-text">
                I HAVE COMPLETED MY INTERMEDIATE FROM BHASHYAM IIT-JEE JUNIOR
                COLLEGE IN THE YEAR 2019.
              </p>
              <b>ACADEMIC ACHIEVEMENTS:</b>
              <p>
                I HAVE QUALIFIED JEE MAINS WITH 80% PERCENTAGE AND RANKED 75000
                RANK IN WHOLE INDIA.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">MARKS:858</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            {/* <img src="..." class="card-img-top" alt="..."/> */}
            <div className="card-body">
              <h5 className="card-title">B.TECH</h5>
              <p className="card-text">
                I HAVE COMPLETED MY UNDER GRADUATION FROM ELLENKI COLLEGE OF
                ENGINEERING AND TECHNOLOGY IN THE YEAR 2023.
              </p>
              <b>ACADEMIC ACHIEVEMENTS:</b>
              <p>
                1)I HAVE PARTICIPATED IN TECHNICAL SEMINAR ON "THIRD EYE FOR
                BLIND".
              </p>
              <br></br>
              <p>
                2)I HAVE RECEIVED A CERTIFICATE IN INTERNATIONAL CONFERENCE ON
                EMERGING TECHNOLOGIES IN COMPUTER SCIENCE.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">CGPA:7.3</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
