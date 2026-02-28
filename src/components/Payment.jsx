export default function Payment() {
  return (
    <section className="section">
      <h2>Payment</h2>
      <p>
        After submitting your requirements, you can make the advance payment
        using UPI.
      </p>

      <div className="card">
        <p><strong>UPI ID:</strong> yashr3220@okaxis</p>
        <p><strong>Accepted:</strong> Google Pay, PhonePe, Paytm</p>

        <a
          className="btn"
          href="https://wa.me/919719478845?text=Hi%20I%20have%20submitted%20the%20project%20form%20and%20want%20to%20make%20payment"
          target="_blank"
        >
          Confirm Payment on WhatsApp
        </a>
      </div>
    </section>
  );
}