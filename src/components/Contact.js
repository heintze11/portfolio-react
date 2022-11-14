import { useState } from 'react';
import ContactItems from './Pages/contactItems';
import Footer from './Footer';

// create Contact page which sends props to ContactItems for use
// Use state so that it will show updates to the fields in real time
// Sets inputs as the different contact item components. 
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
      errorMessage: 'Please enter a name',
      label: 'Name',
      required: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'Please enter a valid email',
      label: 'Email',
      pattern: '^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$',
      required: true,
    },
    {
      id: 3,
      name: 'message',
      type: 'textarea',
      placeholder: 'Message',
      errorMessage: 'Please enter a message',
      label: 'Message',
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // map through inputs and send props to contact items to render each one individually
  return (
    <div className="background d-flex flex-column min-vh-100">
      <div className="mt-5 row text text-center align-items-center justify-content-center container ">
        <h2 className="text-center align-items-center justify-content-center">
          Contact Me
        </h2>
        <form
          className="justify-content-center col contact"
          onSubmit={handleSubmit}
        >
          {inputs.map((input) => (
            <ContactItems
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button className="btn btn-primary btn-lg">Submit</button>
        </form>
        <div className="col-lg-4 mt-5 contact">
          <h4>
            <a href="mailto: levi.heintzelman@gmail.com" id="contact-link">
              Levi.Heintzelman@gmail.com
            </a>
          </h4>
          <br />
          <br />
          <h4>Phone #: 616-260-0568</h4>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
