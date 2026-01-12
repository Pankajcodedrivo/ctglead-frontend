import locationIcon from "../assets/images/location.svg"
import icon2 from "../assets/images/icon-2.svg"
const LeadBoxTwo = () => {
  return (
    <div className="leads-box-innr">
      <div className="leads-box-left">
        <div className="leads-box">
          <div className="leads-left">
            <div className="leads-box-top">
              <span className="leads-box-icon blue"><img src={icon2} alt="" /></span>
              <div className="leads-box-txt">
                <h4>Philip Rivers</h4>
                <p className="mb-0">Pending Customer Response</p>
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
              <li><span>Auto</span></li>
              <li><span>Condo</span></li>
            </ul>
          </div>
          <div className="leads-right">
            <span className="top-tier">Top Tier</span>
            <ul>
              <li>Apr 6, 2024</li>
              <li>2:30 pm</li>
              <li><span><img src={locationIcon} alt="" /></span>Houston, TX 77022</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="leads-box-right">
        <button type="button" className="leads-btn">b</button>
      </div>
    </div>
  )
};

export default LeadBoxTwo;
