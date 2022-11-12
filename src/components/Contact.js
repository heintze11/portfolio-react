
const Contact = () => {
  return (
    <div className="background">
      <div className="text">
        <h2>Contact Form</h2>
        <form>
        <div class="mb-3">
      <label class="form-label" for="name">Name</label>
      <input class="form-control" id="name" type="text" placeholder="Name" />
    </div>

    <div class="mb-3">
      <label class="form-label" for="emailAddress">Email Address</label>
      <input class="form-control" id="emailAddress" type="email" placeholder="Email Address" />
    </div>

  <div class="mb-3">
    <label  className="form-label">Message</label>
    <textarea class="form-control" id="message" type="text" placeholder="Message"></textarea>
  </div>


<div class="d-grid">
      <button class="btn btn-primary btn-lg" type="submit">Submit</button>
    </div>


    </form>
      </div>
    </div>
  )
}

export default Contact