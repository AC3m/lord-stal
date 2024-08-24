export function Select({ el, onHandleChange }) {
  return (
    <li key={el.id}>
      <label className={el.required ? "required-label" : ""}>{el.label}</label>
      <select
        className="custom-select"
        name={el.label}
        onChange={(e) => onHandleChange(e, el.id)}
      >
        {el.options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </li>
  );
}
