import "./Soon.scss";
import Logo from "../assets/images/logo.svg";
import HeroImageDesktop from "../assets/images/hero-desktop.jpg";
import HeroImageMobile from "../assets/images/hero-mobile.jpg";

function Soon() {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex: RegExp = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    if (
      e.target.classList.contains("invalid") &&
      regex.test(e.target.value) === true
    ) {
      e.target.classList.remove("invalid");
    }
  };

  const handleSubmit = (e: React.FormEvent<SubmitEvent>) => {
    e.preventDefault();
    const regex: RegExp = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    const input: HTMLInputElement | null =
      document.querySelector("input[name=email]");
    document.querySelector(".invalidInputText");
    if (
      (input?.value.length && regex.test(input?.value) === false) ||
      input?.value.length === 0
    ) {
      input?.classList.add("invalid");
    }
  };

  return (
    <div className="Soon">
      <header>
        <img src={Logo} alt="" />
      </header>
      <picture className="heroImage">
        <source srcSet={HeroImageDesktop} media="(min-width: 800px)" />
        <img
          src={HeroImageMobile}
          alt="fashionable young woman posing for camera"
        />
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
        <form id="subscribeForm" onSubmit={handleSubmit}>
          <div className="inputs">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onInput={handleInput}
            />
            <input name="submitButton" type="submit" value=">" />
            <p className="invalidInputText">Please provide a valid email</p>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Soon;
