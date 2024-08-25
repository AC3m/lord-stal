export function EmailInputSet({ el, onHandleChange }) {
  // TODO: ADD VALIDATION AND VERIFICATION OF TWO FIELDS HAVING THE SAME VALUE
  return (
    <li key={el.id}>
      <label className={el.required ? "required-label" : ""}>{el.label}</label>
      <div className="input-set">
        <div className="input-container">
          <input
            type="text"
            name={el.label}
            onChange={(e) => onHandleChange(e, el.id)}
          />
          <label>E-mail</label>
        </div>
        <div className="input-container">
          <input type="text" />
          <label>Potwierdź adres e-mail</label>
        </div>
      </div>
    </li>
  );
}
