const Life = () => {
  return (
    <div className="shadow-box">
      <form action="">
        <div className="d-flex justify-content-between align-items-center mb-column mb-4">
          <div className="dash-hdr mb-0">
            <h3 className="font-wight-600 clr-3d mb-0">Life</h3>
          </div>
          <div className="save-btn-wrapper">
            <button className="btn blue-btn">Save Draft</button>
          </div>
        </div>
        <div className="card-wrapper mb-32">
          <ul className="coverage-grid">
            <li>
              <p><strong>Term Life</strong></p>
              <select name="" id="" className="form-control">
                <option value="1">10, 20, or 30 years</option>
                <option value="2">10, 20, or 30 years</option>
                <option value="3">10, 20, or 30 years</option>
              </select>
            </li>
            <li>
              <p><strong>Accidental Death Benefit</strong></p>
              <select name="" id="" className="form-control">
                <option value="1">Included</option>
                <option value="2">Included</option>
                <option value="3">Included</option>
              </select>
            </li>
            <li>
              <p><strong>Whole Life</strong> </p>
              <select name="" id="" className="form-control">
                <option value="1">Lifetime coverage</option>
                <option value="2">Lifetime coverage</option>
                <option value="3">Lifetime coverage</option>
              </select>
            </li>
            <li>
              <p><strong>Child Rider</strong></p>
              <select name="" id="" className="form-control">
                <option value="1">Optional</option>
                <option value="2">Optional</option>
                <option value="3">Optional</option>
              </select>
            </li>
            <li>
              <p><strong>Universal Life</strong></p>
              <select name="" id="" className="form-control">
                <option value="1">Flexible premium</option>
                <option value="2">Flexible premium</option>
                <option value="3">Flexible premium</option>
              </select>
            </li>
            <li>
              <p><strong>Waiver of Premium</strong></p>
              <select name="" id="" className="form-control">
                <option value="1">Optional</option>
                <option value="2">Optional</option>
                <option value="3">Optional</option>
              </select>
            </li>
            <li>
              <p><strong>Final Expense</strong></p>
              <select name="" id="" className="form-control">
                <option value="1">10,000 to 25,000</option>
                <option value="2">10,000 to 25,000</option>
                <option value="3">10,000 to 25,000</option>
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

export default Life;
