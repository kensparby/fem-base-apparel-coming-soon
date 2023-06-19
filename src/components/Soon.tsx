import "./Soon.scss";
import Logo from "../assets/images/logo.svg";
import HeroImageDesktop from "../assets/images/hero-desktop.jpg";
import HeroImageMobile from "../assets/images/hero-mobile.jpg";

function Soon() {
  return (
    <div className="Soon">
      <header>
        <img src={Logo} alt="" />
      </header>
      <picture className="heroImage">
        <source srcSet={HeroImageDesktop} media="(min-width: 700px)" />
        <img src={HeroImageMobile} alt="" />
      </picture>
      <section className="content">
        <h1>
          We're <span>coming soon</span>
        </h1>
        <p>
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay{" "}
          <span className="nobreak">up-to-date</span> with announcements and our
          launch deals.
        </p>
        <form id="subscribeForm">
          <div className="inputs">
            <input type="email" name="email" placeholder="Email Address" />
            <input name="submitButton" type="submit" value=">" />
            <p className="invalidInputText">Please provide a valid email</p>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Soon;
