import i18next from "i18next";
import { useTranslation } from "react-i18next";

function FormInput({ placeholder, label, error, ...props }) {
  useTranslation();

  return (
    <div className="form-field">
      <label className="form-field__label">{i18next.t(label)}</label>
      <input
        className="form-field__input"
        placeholder={i18next.t(placeholder)}
        {...props}
      />
      {error && <p className="form-field__error">{i18next.t(error)}</p>}
    </div>
  );
}

export default FormInput;
