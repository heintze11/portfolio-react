import { useState } from "react";


const ContactItems = (props) => {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, type, ...inputProps} = props;

    const handleFocus = (e) => {
        setFocused(true);
    };
  return (
    <div className="formInput mb-3 col-md-6">
        <label className="form-label">{label}</label>
        {type === "textarea" ? (
        <textarea className="form-control" rows='4' {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()} />
      ) : (
        <input className="form-control" {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()} />
      )}
        <span className="text-danger" >{errorMessage}</span>
    </div>
  )
}

export default ContactItems