import css from "./Input.module.scss";

function Input({ ...props }) {
  return (
    <label className={css.wrapper}>
      <input {...props} />
    </label>
  );
}

export default Input;
