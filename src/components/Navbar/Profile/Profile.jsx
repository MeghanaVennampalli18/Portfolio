import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <section className="profile-container">
      <div className="profile-content">
        <h2>
          Unlocking Boundless Potential through Innovative Software Solutions
        </h2>
        <p>
          Welcome to my corner of the digital universe! I'm Meghana Vennampalli,
          a passionate software engineer dedicated to pushing the boundaries of
          technology and crafting innovative solutions that make a meaningful
          impact. With a blend of technical expertise, creative flair, and a
          relentless pursuit of excellence, I thrive on turning ideas into
          reality and solving complex challenges with elegance and efficiency.
          Explore my portfolio to discover how I can bring your vision to life
          and unlock the boundless potential of your next project. Let's
          innovate together!
        </p>
      </div>

      <div className="profile-img">
        <div>
          <div className="tech-logo-icon">
            <img src="./assets/images/logo.jpg" alt="" />
          </div>
          <div className="talent">
            <div className="tech-icon">
              <img src="./assets/images/docker.png" alt="" />
            </div>
            <div className="tech-icon">
              <img src="./assets/images/react.png" alt="" />
            </div>
            <div className="tech-icon">
              <img src="./assets/images/python.png" alt="" />
            </div>
            <div className="tech-icon">
              <img src="./assets/images/java.png" alt="" />
            </div>
            <div className="tech-icon">
              <img src="./assets/images/aws.png" alt="" />
            </div>
            {/* <div className='tech-icon'>
                            <img src='./assets/images/css.png' alt=''/>
                        </div>
                    <div className='tech-icon'>
                        <img src='./assets/images/javascript.png' alt=''/>
                        </div>
                        <div className='tech-icon'>
                            <img src='./assets/images/c++.png' alt=''/>
                        </div>
                        <div className='tech-icon'>
                            <img src='./assets/images/mysql.png' alt=''/>
                        </div>
                        <div className='tech-icon'>
                            <img src='./assets/images/c.png' alt=''/>
                        </div>
                        <div className='tech-icon'>
                            <img src='./assets/images/html.png' alt=''/>
                        </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
