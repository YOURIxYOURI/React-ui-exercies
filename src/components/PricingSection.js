import React from 'react';

function PricingSection() {
  return (
    <section id="pricing" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Pricing</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card text-center p-4">
              <h3>Free</h3>
              <p>Basic healthcare services</p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center p-4">
              <h3>19$</h3>
              <p>Extended medical services</p>
              <button className="btn btn-primary">Select Plan</button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center p-4">
              <h3>49$</h3>
              <p>Premium healthcare plan</p>
              <button className="btn btn-primary">Select Plan</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
