const Contact = () => {
  return (
    <div className="background">
      <div className="text">
        <h2>Contact Form</h2>
        <form>
          <div className="mb-3 w-50">
            <label className="form-label" for="name">
              Name
            </label>
            <input
              className="form-control"
              id="name"
              type="text"
              placeholder="Name"
            />
          </div>

          <div className="mb-3 w-50">
            <label className="form-label" for="emailAddress">
              Email Address
            </label>
            <input
              className="form-control"
              id="emailAddress"
              type="email"
              placeholder="Email Address"
            />
          </div>

          <div class="mb-3 w-50">
            <label className="form-label">Message</label>
            <textarea
              className="form-control"
              id="message"
              type="text"
              placeholder="Message"
            ></textarea>
          </div>

          <div className="d-grid w-25">
            <button className="btn btn-primary btn-lg" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
