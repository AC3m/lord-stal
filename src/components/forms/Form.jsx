import "../../data/configuratorData";
import configuratorForm from "../../data/configuratorData";
import "./Form.scss";

export function Form() {
  const mapFormRendering = {
    input: (el) => (
      <li key={el.id}>
        <label>{el.label}</label>
        <input type="text"></input>
      </li>
    ),
    select: (el) => (
      <li key={el.id}>
        <label>{el.label}</label>
        <select className="custom-select">
          {el.options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </li>
    ),
    email: (el) => (
      <li key={el.id}>
        <label className="required-label">{el.label}</label>
        <div className="input-set">
          <div className="input-container">
            <input type="text" />
            <label>E-mail</label>
          </div>
          <div className="input-container">
            <input type="text" />
            <label>Potwierdź adres e-mail</label>
          </div>
        </div>
      </li>
    ),
    textarea: (el) => (
      <li key={el.id}>
        <label>{el.label}</label>
        <textarea></textarea>
      </li>
    ),
  };
  return (
    <form className="form-container">
      <ul>
        {configuratorForm.map((el) => mapFormRendering[el.element](el))}
        <li>
          <input className="submit-btn" type="submit"></input>
        </li>
      </ul>
    </form>
  );
}
