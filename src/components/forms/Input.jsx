export function Input({ el, onHandleChange }) {
  return (
    <li key={el.id}>
      <label className={el.required ? "required-label" : ""}>{el.label}</label>
      <input
        type="text"
        name={el.label}
        onChange={(e) => onHandleChange(e, el.id)}
      ></input>
    </li>
  );
}
