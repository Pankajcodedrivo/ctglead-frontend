import car from "../assets/images/car.svg"
import starwh from "../assets/images/star-wh.svg"
import locationIcon from "../assets/images/location.svg"
const LeadBoxOne = () => {
  return (
    <div className="leads-box-innr">
      <div className="leads-box-left">
        <div className="leads-box">
          <div className="leads-left">
            <div className="leads-box-top">
              <span className="leads-box-icon"><img src={starwh} alt="" /></span>
              <div className="leads-box-txt">
                <h4>Sarah Johnson</h4>
                <p>Ready to be quoted</p>
                <div className="leads-timer">
                  <div className="timer-innr">
                    <span>4</span>
                    <span>7</span>
                    <span className="no-box">:</span>
                    <span>5</span>
                    <span>9</span>
                  </div>
                  <p>hours left to quote </p>
                </div>
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
              <li><span>Home</span></li>
              <li><span>Life</span></li>
            </ul>
          </div>
          <div className="leads-right">
            <span className="top-tier">Top Tier</span>
            <ul>
              <li>Apr 6, 2024</li>
              <li>12:24 pm</li>
              <li><span><img src={locationIcon} alt="" /></span>Austin, TX 77077</li>
            </ul>
            <button type="button" className="claim-btn">Claim</button>
          </div>
        </div>
      </div>
      <div className="leads-box-right">
        <button type="button" className="leads-btn">b</button>
        <button type="button" className="leads-btn"><img src={car} alt="" /><span>+</span></button>
      </div>
    </div>
  )
};

export default LeadBoxOne;
