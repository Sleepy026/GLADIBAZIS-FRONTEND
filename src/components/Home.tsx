import * as React from "react";
import "../style/home.css";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div className="homeMain">
      <div className="icon">
        <img
          src="https://cc-journey-student-profile-images.s3.amazonaws.com/5e430905-9da8-49c9-bf33-341f8e589e52"
          alt="icon"
          height="100"
          width="100"
        ></img>
      </div>
      <div className="welcome">
        {" "}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
        voluptas suscipit neque praesentium quasi, eligendi distinctio quisquam
        laudantium minus nemo soluta, accusantium ducimus explicabo laboriosam
        possimus asperiores consectetur saepe? Quas! Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Consequuntur sunt repudiandae architecto
        perspiciatis deleniti non beatae impedit, nihil obcaecati, magni aliquid
        modi iusto quo eum accusamus necessitatibus dolorum quas itaque! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Modi eius pariatur
        ab? Corrupti similique harum placeat maxime error. Ipsa ducimus nemo
        nulla molestias eum. Consequuntur, saepe dolore! Distinctio, sequi.
        Rerum.{" "}
      </div>
      <div></div>
    </div>
  );
};

export default Home;
