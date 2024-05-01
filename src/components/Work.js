import react from "react";
function Work() {
  return (
    <div id="Work" className="working container my-5 py-5 px-3">
      <h1 style={{ textAlign: "center", color: "Highlight" }}>
        WORK EXPERIENCE
      </h1>
      <div className="work">
        <h3>WEBFURTHER PVT LTD</h3>
        <h4>PROCESS ASSOCIATE</h4>
        <h5>NOVEMBER, 2023 - MARCH ,2024</h5>
        <ul>
          <li>
            <b>PROJECT NAME:</b> ADOBE
          </li>
          <li>
            <b>KEY RESPONSIBLITIES:</b>
            <li>
              Ensure the safety and functionality of online platforms that rely
              on Ai-generated content.
            </li>
            <li>
              {" "}
              Determine bias and discrimination against specific groups of
              people based on age, race, religion, disability status, sexual
              orientation and gender expression/identity.
            </li>
            <li>
              Remove Offensive/harmful content to protect users from exposure to
              obscene language, extremism, violence, crimes, sexual
              exploitation, drug abuse, scams and trolling.
            </li>
            <li>
              {" "}
              Monitor online channels for violations of company policies and
              copyright infringements.
            </li>
            <li>
              Cultivate and nurture trusting relationships with users, senior
              managers and colleagues.
            </li>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Work;
