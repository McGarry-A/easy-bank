import "./Hero.css"
import BgIntro from "../../images/bg-intro-desktop.svg"
import Mockups from "../../images/image-mockups.png"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="hero-title">Next Generation Digital Banking</h1>
        <p className="hero-subtext">
          Take your financial life online. Your easy bank account will be your
          one stop shop for spending, saving, budgeting, investing and much
          more.
        </p>
        <button>Request Invite</button>
      </div>
      <div className="hero-right">
          <img src={BgIntro} className="bgIntro" alt="background"/>
          <img src={Mockups} className="mockups" alt="mockups"/>
      </div>
    </section>
  );
};

export default Hero;
