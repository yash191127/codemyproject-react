export default function OrderForm() {
  return (
    <section className="section">
      <h2>Order Your Project</h2>
      <p>Fill the form below and I’ll contact you shortly.</p>

      <form
        name="project-order"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        {/* Required for Netlify */}
        <input type="hidden" name="form-name" value="project-order" />

        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>

        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="college" placeholder="College Name" />

        <select name="projectType" required>
          <option value="">Select Project Type</option>
          <option>Website Project</option>
          <option>Mini Project</option>
          <option>React Project</option>
          <option>Arduino Project</option>
        </select>

        <textarea
          name="requirements"
          placeholder="Project requirements & deadline"
          required
        ></textarea>

        <button type="submit" className="btn">
          Submit Requirement
        </button>
      </form>
    </section>
  );
}