import { Link } from "react-router-dom";
import locationIcon from "../assets/images/location.svg"
import crosswh from "../assets/images/cross-wh.svg"
import homeIcon from "../assets/images/home.svg"
const LeadBoxThree = () => {
  return (
    <div className="leads-box-innr">
      <div className="leads-box-left">
        <div className="leads-box">
          <div className="leads-left">
            <div className="leads-box-top">
              <span className="leads-box-icon red"><img src={crosswh} alt="" /></span>
              <div className="leads-box-txt">
                <h4>Alan Lazard</h4>
                <p className="mb-0">Declined by Client</p>
              </div>
            </div>
            <ul>
              <li>DNQ</li>
              <li>Send Message</li>
              <li>Sold</li>
            </ul>
          </div>
          <div className="leads-mid">
            <ul>
              <li><span>Home</span></li>
              <li><span>Landlord</span></li>
            </ul>
          </div>
          <div className="leads-right">
            <ul>
              <li>Apr 6, 2024</li>
              <li>2:30 pm</li>
              <li><span><img src={locationIcon} alt="" /></span>Houston, TX 77043</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="leads-box-right">
        <button type="button" className="leads-btn"><img src={homeIcon} alt="" /><span>+</span></button>
      </div>
    </div>
  )
};

export default LeadBoxThree;
