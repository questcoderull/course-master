import React, { useState } from "react";

const Payment = () => {
  const [paymentWithBkash, setPaymentWithBkash] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-base-200">
      <div className="w-full max-w-xl bg-base-100 rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6">
          Complete Your Payment
        </h1>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setPaymentWithBkash(true)}
            className={`btn px-6 ${
              paymentWithBkash ? "btn-primary" : "btn-outline"
            }`}
          >
            bKash
          </button>

          <button
            onClick={() => setPaymentWithBkash(false)}
            className={`btn px-6 ${
              !paymentWithBkash ? "btn-secondary" : "btn-outline"
            }`}
          >
            Card (Stripe)
          </button>
        </div>

        {/* Conditional Render */}
        {paymentWithBkash ? (
          <div className="card bg-base-100 border border-base-300 shadow-md">
            <div className="card-body space-y-4">
              <h2 className="text-lg font-semibold mb-2 text-center">
                Pay with bKash
              </h2>

              <div className="form-control">
                <label className="label">Email Address</label>
                <input
                  type="email"
                  className="input input-bordered"
                  placeholder="example@gmail.com"
                />
              </div>

              <div className="form-control">
                <label className="label">bKash Number</label>
                <input
                  type="number"
                  className="input input-bordered"
                  placeholder="01XXXXXXXXX"
                />
              </div>

              <div className="form-control">
                <label className="label">Transaction ID</label>
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="TXID12345ABC"
                />
              </div>

              <button className="btn btn-primary w-full mt-4">
                Submit Payment
              </button>
            </div>
          </div>
        ) : (
          <div className="card bg-base-100 border border-base-300 shadow-md">
            <div className="card-body text-center">
              <h2 className="text-lg font-semibold mb-3">
                Pay with Card (Stripe)
              </h2>
              <p className="text-base-content/70 mb-4">
                Secure payment will be handled by Stripe.
              </p>

              <button className="btn btn-secondary w-full">
                Proceed to Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
