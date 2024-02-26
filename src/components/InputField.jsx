export default function InputField({ label, type, id }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={id} />
    </>
  );
}
