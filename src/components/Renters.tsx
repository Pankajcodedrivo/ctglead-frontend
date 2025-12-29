const Renters = () => {
  return (
    <div className="shadow-box">
      <form action="">
        <div className="d-flex justify-content-between align-items-center mb-column mb-4">
          <div className="dash-hdr mb-0">
            <h3 className="font-wight-600 clr-3d mb-0">Renters</h3>
          </div>
          <div className="save-btn-wrapper">
            <button className="btn blue-btn">Save Draft</button>
          </div>
        </div>
        <div className="card-wrapper mb-32">
          <ul className="coverage-grid">
            <li>
              <p><strong>Personal Property</strong> </p>
              <select name="" id="" className="form-control">
                <option value="1">25,000 ($250 deductible)</option>
                <option value="2">25,000 ($250 deductible)</option>
                <option value="3">25,000 ($250 deductible)</option>
              </select>
            </li>
            <li>
              <p><strong>Wind/Hail</strong></p>
              <select name="" id="" className="form-control">
                <option value="1">$250 deductible</option>
                <option value="2">$500 deductible</option>
                <option value="3">$500 deductible</option>
              </select>
            </li>
            <li>
              <p><strong>Liability</strong></p>
              <select name="" id="" className="form-control">
                <option value="1">300,000</option>
                <option value="2">300,000</option>
                <option value="3">300,000</option>
              </select>
            </li>
            <li>
              <p><strong>Water Backup</strong></p>
              <select name="" id="" className="form-control">
                <option value="1">5,000</option>
                <option value="2">5,000</option>
                <option value="3">5,000</option>
              </select>
            </li>
            <li>
              <p><strong>Medical Payments</strong></p>
              <select name="" id="" className="form-control">
                <option value="1">5,000</option>
                <option value="2">5,000</option>
                <option value="3">5,000</option>
              </select>
            </li>
            <li>
              <p><strong>Scheduled Personal Property</strong></p>
              <select name="" id="" className="form-control">
                <option value="1">Optional</option>
                <option value="2">Optional</option>
                <option value="3">Optional</option>
              </select>
            </li>
            <li>
              <p><strong>Loss of Use</strong></p>
              <select name="" id="" className="form-control">
                <option value="1">12,000</option>
                <option value="2">12,000</option>
                <option value="3">12,000</option>
              </select>
            </li>
            <li>
              <p><strong>Identity Theft</strong></p>
              <select name="" id="" className="form-control">
                <option value="1">15,000</option>
                <option value="2">15,000</option>
                <option value="3">15,000</option>
              </select>
            </li>
            <li>
              <p><strong>Theft</strong></p>
              <select name="" id="" className="form-control">
                <option value="1">Included</option>
                <option value="2">Included</option>
                <option value="3">Included</option>
              </select>
            </li>
          </ul>
        </div>
        <div className="card-wrapper-btm">
          <ul className="coverage-grid mb-4">
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
      </form>
    </div>
  )
};

export default Renters;
