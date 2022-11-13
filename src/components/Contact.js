import { useState } from 'react';
import ContactItems from './Pages/contactItems';

const Contact = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'name',
      type: 'text',
      placeholder: 'Name',
      label: 'Name',
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      label: 'Email',
    },
    {
      id: 3,
      name: 'message',
      type: 'text',
      placeholder: 'Message',
      label: 'Message',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value });
  }

  return (
    <div className='"background'>
      <div className="text">
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
          <ContactItems key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
          ))}
          <button>Submit</button>
        </form>
      </div>
    </div>

    // <div className="background">
    //   <div className="text">
    //     <h2>Contact Form</h2>
    //     <form>
    //       <div className="mb-3 w-50">
    //         <label className="form-label" for="name">
    //           Name
    //         </label>
    //         <input
    //           className="form-control"
    //           id="name"
    //           type="text"
    //           placeholder="Name"
    //         />
    //         <span></span>

    //       </div>

    //       <div className="mb-3 w-50">
    //         <label className="form-label" for="emailAddress">
    //           Email Address
    //         </label>
    //         <input
    //           className="form-control"
    //           id="emailAddress"
    //           type="email"
    //           placeholder="Email Address"

    //         />
    //       </div>

    //       <div class="mb-3 w-50">
    //         <label className="form-label">Message</label>
    //         <textarea
    //           className="form-control"
    //           id="message"
    //           type="text"
    //           placeholder="Message"

    //         ></textarea>
    //       </div>

    //       <div className="d-grid w-25">
    //         <button className="btn btn-primary btn-lg" type="submit">
    //           Submit
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
  );
};

export default Contact;
