import picture from "../components/lah1.jpg";
function Home() {
  return (
    <>
      <div>
        <div className="lahari container my-5" id="Home">
          <div>
            <h6>SOFTWARE DEVELOPER</h6>

            <h1 style={{ fontFamily: "cursive" }}>I'M LAHARI</h1>
            <h1 style={{ fontFamily: "cursive" }}>MARADA</h1>
            <a href="https://drive.google.com/file/d/1lreoUDreFBcLT7OAPR5x8BD_eGnBHZOD/view?usp=drive_link">
              MY RESUME
            </a>
            <br></br>

            <a href="https://linkedin.com/in/lahari-marada">
              {" "}
              <i className="fa fa-linkedin" style={{ fontSize: "24px" }}></i>
            </a>
            <br></br>
            <a href="https://instagram.com/marada_lahari">
              <i class="fa fa-instagram" style={{ fontSize: "24px" }}></i>
            </a>
            <br></br>
            <a href="https://x.com/LahariMarada">
              <i class="fa fa-twitter" style={{ fontSize: "24px" }}></i>
            </a>
            <br></br>
            <a href="https://github.com/laharimarada">
              <i class="fa fa-github-square" style={{ fontSize: "24px" }}></i>
            </a>
            <br></br>
          </div>

          <div>
            <img
              style={{ height: "500px", width: "350px" }}
              src={picture}
              class="rounded float-end"
              alt="..."
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
