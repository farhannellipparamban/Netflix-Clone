
const HomeBanner = () => {
  return(
    <div className="home-banner">
      <div className="our-story">
        <h1 className="our-story-card-title" data-uia="hero-title">Unlimited movies, TV shows and more.</h1>
        <h2 className="our-story-card-subtitle" data-uia="our-story-card-subtitle">Watch anywhere. Cancel anytime.</h2>
        <p className="email-form-title">Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Email Address" />
          <button className="input-group-button btn-danger text-white">Get Started</button>
        </div>
      </div>
      <div className="shadow"></div>
      <img className="concord-img vlv-creative" src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_medium.jpg"  alt=""></img>
    </div>
  )
}

export default HomeBanner;