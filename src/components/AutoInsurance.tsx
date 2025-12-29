
import Slider from "react-slick";
import plus from "../assets/images/plus-icon.svg";

const AutoInsurance = () => {
      const settings = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };
  return (
    <div className="shadow-box">
      <form action="">
        <div className="d-flex justify-content-between align-items-center mb-column mb-4">
          <div className="dash-hdr mb-0">
            <h3 className="font-wight-600 clr-3d mb-0">Auto Insurance</h3>
          </div>
          <div className="save-btn-wrapper">
            <button className="btn blue-btn">Save Draft</button>
            <button className="btn btn-outline-grey"><span><img src={plus} alt="" /></span> Add Vehicle</button>
          </div>
        </div>
        <div className="vehicle-tab-innr">
          <Slider {...settings} className="nav nav-pills vehicle-tab">
            <div className="nav-item"><button className="nav-link active" type="button" data-bs-target="#tab-1" data-bs-toggle="pill">Vehicle 1</button></div>
            <div className="nav-item"><button className="nav-link" type="button" data-bs-target="#tab-2" data-bs-toggle="pill">Vehicle 2</button></div>
            <div className="nav-item"><button className="nav-link" type="button" data-bs-target="#tab-3" data-bs-toggle="pill">Vehicle 3</button></div>
            <div className="nav-item"><button className="nav-link" type="button" data-bs-target="#tab-4" data-bs-toggle="pill">Vehicle 4</button></div>
            <div className="nav-item"><button className="nav-link" type="button" data-bs-target="#tab-5" data-bs-toggle="pill">Vehicle 5</button></div>
            <div className="nav-item"><button className="nav-link" type="button" data-bs-target="#tab-6" data-bs-toggle="pill">Vehicle 6</button></div>
            <div className="nav-item"><button className="nav-link" type="button" data-bs-target="#tab-7" data-bs-toggle="pill">Vehicle 7</button></div>
          </Slider>
          {/* <span className="cursor-pointer"><img src={arrowRightGray} alt="" /></span> */}
        </div>
        <div className="tab-content">
          <div id="tab-1" className="tab-pane active">
            <div className="card-wrapper mb-32">
              <p className="vehicle-main"><span>Vehicle 1:</span> 2025 Honda CR-V</p>
              <ul className="coverage-grid">
                <li>
                  <p><strong>Liability Coverage</strong></p>
                  <select name="" id="" className="form-control">
                    <option value="1">30/30/25</option>
                    <option value="2">30/30/25</option>
                    <option value="3">30/30/25</option>
                  </select>
                </li>
                <li>
                  <p><strong>Collision Coverage</strong></p>
                  <select name="" id="" className="form-control">
                    <option value="1">$500 deductible</option>
                    <option value="2">$500 deductible</option>
                    <option value="3">$500 deductible</option>
                  </select>
                </li>
                <li>
                  <p><strong>Personal Injury Protection (PIP)</strong> </p>
                  <select name="" id="" className="form-control">
                    <option value="1">$2,500</option>
                    <option value="2">$2,500</option>
                    <option value="3">$2,500</option>
                  </select>
                </li>
                <li>
                  <p><strong>Comprehensive Coverage</strong></p>
                  <select name="" id="" className="form-control">
                    <option value="1">$500 deductible</option>
                    <option value="2">$500 deductible</option>
                    <option value="3">$500 deductible</option>
                  </select>
                </li>
                <li>
                  <p><strong>Medical Payments(MedPay)</strong></p>
                  <select name="" id="" className="form-control">
                    <option value="1">$2,000</option>
                    <option value="2">$2,000</option>
                    <option value="3">$2,000</option>
                  </select>
                </li>
                <li>
                  <p><strong>Towing and Labor</strong></p>
                  <select name="" id="" className="form-control">
                    <option value="1">$100 per disablement</option>
                    <option value="2">$100 per disablement</option>
                    <option value="3">$100 per disablement</option>
                  </select>
                </li>
                <li>
                  <p><strong>Uninsured /Underinsured Motorist Bodily Injury</strong></p>
                  <select name="" id="" className="form-control">
                    <option value="1">30/60</option>
                    <option value="2">30/60</option>
                    <option value="3">30/60</option>
                  </select>
                </li>
                <li>
                  <p><strong>Rental Reimbursement</strong></p>
                  <select name="" id="" className="form-control">
                    <option value="1">$40/day (up to 30 days)</option>
                    <option value="2">$40/day (up to 30 days)</option>
                    <option value="3">$40/day (up to 30 days)</option>
                  </select>
                </li>
                <li>
                  <p><strong>Uninsured /Underinsured Motorist Property Damage</strong></p>
                  <select name="" id="" className="form-control">
                    <option value="1">$25,000 ($250 deductible)</option>
                    <option value="2">$25,000 ($250 deductible)</option>
                    <option value="3">$25,000 ($250 deductible)</option>
                  </select>
                </li>
                <li>
                  <p><strong>Gap Coverage</strong></p>
                  <select name="" id="" className="form-control">
                    <option value="1">Loan/lease payoff up to 25% above ACV</option>
                    <option value="2">Loan/lease payoff up to 25% above ACV</option>
                    <option value="3">Loan/lease payoff up to 25% above ACV</option>
                  </select>
                </li>
              </ul>
            </div>
            <div className="card-wrapper-btm">
              <ul className="coverage-grid mb-32">
                <li>
                  <p><strong>Monthly Payment</strong></p>
                  <input type="text" className="form-control" placeholder="$" />
                </li>
                <li>
                  <p><strong>Pay in full</strong></p>
                  <input type="text" className="form-control" placeholder="$" />
                </li>
                <li className="w-100">
                  <p><strong>Additional Coverages/ Notes</strong></p>
                  <textarea className="form-control" placeholder="I added deducible for $250 since we do not offer $100. Thank you"></textarea>
                </li>
              </ul>
              <div className="text-end card-wrapper-btm-btn">
                <button type="submit" className="btn green-btn bt-24">Send Quote</button>
              </div>
            </div>
          </div>
          <div id="tab-2" className="tab-pane fade">
            <h3>Menu 2</h3>
            <p>Some content in menu 2.</p>
          </div>
          <div id="tab-3" className="tab-pane fade">
            <h3>Menu 3</h3>
            <p>Some content in menu 3.</p>
          </div>
          <div id="tab-4" className="tab-pane fade">
            <h3>Menu 4</h3>
            <p>Some content in menu 4.</p>
          </div>
          <div id="tab-5" className="tab-pane fade">
            <h3>Menu 5</h3>
            <p>Some content in menu 5.</p>
          </div>
          <div id="tab-6" className="tab-pane fade">
            <h3>Menu 6</h3>
            <p>Some content in menu 6.</p>
          </div>
          <div id="tab-7" className="tab-pane fade">
            <h3>Menu 7</h3>
            <p>Some content in menu 7.</p>
          </div>
        </div>
      </form>
    </div>
  )
};

export default AutoInsurance;
