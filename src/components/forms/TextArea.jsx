export function TextArea({ el, onHandleChange }) {
  return (
    <li key={el.id}>
      <label className={el.required ? "required-label" : ""}>{el.label}</label>
      <textarea
        name={el.label}
        onChange={(e) => onHandleChange(e, el.id)}
      ></textarea>
    </li>
  );
}
