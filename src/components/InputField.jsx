export default function InputField({ label, type, id, state, setState }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        value={state[id]}
        onChange={(e) => {
          const newValue = { ...state, [e.target.name]: e.target.value };
          setState(newValue);
        }}
      />
    </>
  );
}
