import { Link } from "react-router-dom";
import image from "../assets/images/image.png"
import ctgLogo from "../assets/images/logo.svg"
import shape1 from "../assets/images/shape-1.png"
import shape2 from "../assets/images/shape-2.png"
import shape3 from "../assets/images/shape.png"

const Newsletter = () => {
  return (
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
              <Link to="/Login" className="btn btn-primary">Talk to a Specialist</Link>  
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
  )
};

export default Newsletter;
