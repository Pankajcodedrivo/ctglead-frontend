import { Link } from "react-router-dom";
import banImg from "../assets/images/banner-img.png"
import complianceImg from "../assets/images/complience-img.jpg"
import AgenciesSlider from "../components/AgenciesSlider";
import image from "../assets/images/image.png"
import ctgLogo from "../assets/images/logo.svg"
import shape1 from "../assets/images/shape-1.png"
import shape2 from "../assets/images/shape-2.png"
import shape3 from "../assets/images/shape.png"

const Home = () => {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-md-7 banner-content">
              <h1>The Future of Insurance Leads Starts Here.</h1>
              <h6>Leads Evolved. Profiles that Quote.</h6>
              <p>Every profile is quote-ready with verified phone, email, address, VIN numbers, and driver license details. CTG Lead is fully compliant, with consumer consent and signed authorization for quoting and credit checks.</p>
              <Link to="/" className="btn btn-primary">Get Started Today</Link>
            </div>
            <div className="col-md-5">
              <div className="ban-img">
                <img src={banImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="complience-sec common-gap">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-md-6">
              <figure className="compliance-img"><img src={complianceImg} alt="" /></figure>
            </div>
            <div className="col-md-6">
              <div className="cmn-hdr">
                <h6>Leads Revolutionized. Profiles that Quote.</h6>
                <h2>Compliance You Can Trust</h2>
              </div>
              <ul className="comliance-list">
                <li>TCPA Compliant</li>
                <li>Signed Consumer Consent </li>
                <li>Credit Check Authorization</li>
                <li>Transparency</li>
                <li>Compliance Documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="how-it-works">
        <div className="container">
          <div className="cmn-hdr text-center">
            <h2 className="mb-4">How It Works</h2>
            <h6 className="mb-0">Key Benefit: Every profile is verified, compliant, and ready for quoting. No risk. No wasted time.</h6>
            <p>From Profile to Policy in Three Simple Steps.</p>
          </div>
        </div>
        <div className="how-it-wrapper">
          <div className="container">
            <div className="row g-5">
              <div className="col-md-4 how-it-col">
                <div className="how-it-innr">
                  <span className="number">01</span>
                  <p>Consumer creates profile on CTG Quotes with driver license, VIN, property details, phone number, email, and insurance preferences</p>
                </div>
              </div>
              <div className="col-md-4 how-it-col">
                <div className="how-it-innr">
                  <span className="number">02</span>
                  <p>Data verified and enriched with confirmed phone, validated email, validated address, DMV match, duplicate scrub, and signed compliance documents</p>
                </div>
              </div>
              <div className="col-md-4 how-it-col">
                <div className="how-it-innr">
                  <span className="number">03</span>
                  <p>Quote ready and compliant profile delivered to you instantly via dashboard or email complete with shopping mode and coverage needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="benefits-sec common-gap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="cmn-hdr mb-0">
                <h6 className="mb-3">Benefits</h6>
                <h2>Every Detail Is Built for Agency Success.</h2>
                <p>Most companies sell leads. We deliver profiles, the evolution of the lead. Every profile includes verified phone, email, and address, VIN and driver license details, and signed consumer consent so it is not just a name on a list… it is a lead you can actually quote.</p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="benefit-right">
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="benefit-box">
                      <h4>Lead Quality</h4>
                      <ul>
                        <li>Profiles are fully quote ready</li>
                        <li>Verified phone, email, and address included</li>
                        <li>VIN numbers and driver license details provided</li>
                        <li>Consumer consent documented</li>
                        <li>Profiles updated in real time, never stale data</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="benefit-box">
                      <h4>Compliance and Security</h4>
                      <ul>
                        <li>Every consumer signs consent forms for quoting and credit checks</li>
                        <li>TCPA compliant and fully transparent</li>
                        <li>Agencies know exactly where information comes from and how it is authorized</li>
                        <li>Eliminates compliance risks common with traditional lead vendors</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="benefit-box">
                      <h4>Growth Tools</h4>
                      <ul>
                        <li>ROI Calculator built in</li>
                        <li>Dashboard with conversion tracking</li>
                        <li>Renewal reminders for cross sell and upsell</li>
                        <li>Multi carrier distribution from one profile</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="benefit-box">
                      <h4>Trust and Transparency</h4>
                      <ul>
                        <li>No hidden reselling</li>
                        <li>You own your book 100 percent</li>
                        <li>Satisfaction guarantee on your first package</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="agencies-sec common-gap pt-0">
        <div className="container">
          <div className="cmn-hdr text-center">
            <h2 className="mb-0">Agencies Like Yours Are Growing with CTG Lead.</h2>
          </div>
          <AgenciesSlider />
        </div>
      </section>
      <section className="newsletter-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="cmn-hdr mb-0">
                <h6 className="blue">CTG Lead. Leads Revolutionized. Profiles that Quote.</h6>
                <h2 className="mb-0">It’s Time to Stop Wasting Money on Bad Leads.</h2>
                <p>Join <img className="ctg-logo" src={ctgLogo} alt="" />
                  today and start getting verified compliant quote
                  ready profiles your agency deserves.</p>
              </div>
              <Link to="/" className="btn btn-primary">Talk to a Specialist</Link>  
            </div>
            <div className="col-md-4">
              <div className="image-innr">
                <img src={image} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="shape-1"><img src={shape1} alt="" /></div>
        <div className="shape-2"><img src={shape2} alt="" /></div>
        <div className="shape-3"><img src={shape3} alt="" /></div>
      </section>
    </>
  )
};

export default Home;