import React, { useState } from "react";

function Form(props) {
  const [inputs, setInputs] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {
        fName: inputs.fName,
        lName: inputs.lName,
        email: inputs.email,
        phone: inputs.phone,
        subject: inputs.subject,
        message: inputs.message,
      };
      const response = await fetch("http://localhost:5000/addMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        alert(
          "Thankyou for contacting, i will get in touch with you shortly :')"
        );
        // eslint-disable-next-line
        const responseData = await response.json(); // Parse the response body as JSON
        setInputs({
          fName: "",
          lName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        console.log(
          "Failed to add send message Server returned:",
          response.status,
          response.statusText
        );
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div style={{ display: "flex", width: "150%" }}>
      <form className="form">
        <div className="names">
          <input
            name="fName"
            onChange={handleChange}
            value={inputs.fName}
            type="text"
            placeholder="FIRST NAME*"
          />
          <input
            name="lName"
            onChange={handleChange}
            value={inputs.lName}
            type="text"
            placeholder="LAST NAME*"
            style={{ marginLeft: "1rem" }}
          />
        </div>
        <div className="mail">
          <input
            name="email"
            onChange={handleChange}
            value={inputs.email}
            type="text"
            placeholder="EMAIL*"
          />
          <input
            type="tel"
            name="phone"
            onChange={handleChange}
            value={inputs.phone}
            placeholder="PHONE*"
            style={{ marginLeft: "1rem" }}
          />
        </div>
        <div className="info">
          <input
            name="subject"
            onChange={handleChange}
            value={inputs.subject}
            type="text"
            placeholder="SUBJECT*"
          />
          <textarea
            name="message"
            onChange={handleChange}
            value={inputs.message}
            placeholder="MESSAGE*"
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <div className="btns">
          <button className="form-btn close" onClick={props.closeForm}>
            CLOSE
          </button>
          <button className="form-btn send" onClick={submitForm}>
            SEND
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
