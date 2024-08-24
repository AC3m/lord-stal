import { useState } from "react";
import "../../data/configuratorData";
import configuratorForm from "../../data/configuratorData";
import "./Form.scss";
import { Input } from "./Input";
import { Select } from "./Select";
import { EmailInputSet } from "./EmailInputSet";
import { TextArea } from "./TextArea";

export function Form() {
  const formValues = configuratorForm.map((el) =>
    el["options"] ? { [el.label]: `${el["options"][0]}` } : { [el.label]: "" }
  );

  const [formData, setFormData] = useState(formValues);

  // formData state will be used while sending data to an email. This is TODO. For now just console.log.
  // console.log(formData);

  function handleChange(e, id) {
    const { name, value } = e.target;
    setFormData((prevFormData) =>
      prevFormData.map((el, i) => (i === id ? { ...el, [name]: value } : el))
    );
  }

  const mapFormRendering = {
    input: (el) => <Input el={el} onHandleChange={handleChange} key={el.id} />,
    select: (el) => (
      <Select el={el} onHandleChange={handleChange} key={el.id} />
    ),
    email: (el) => (
      <EmailInputSet el={el} onHandleChange={handleChange} key={el.id} />
    ),
    textarea: (el) => (
      <TextArea el={el} onHandleChange={handleChange} key={el.id} />
    ),
  };

  return (
    <form className="form-container" onClick={(e) => e.preventDefault()}>
      <ul>
        {configuratorForm.map((el) => mapFormRendering[el.element](el))}
        <li>
          <input className="submit-btn" type="submit"></input>
        </li>
      </ul>
    </form>
  );
}
