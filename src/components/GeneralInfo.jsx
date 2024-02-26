import InputField from "./InputField";

function handleClick() {
  console.log("poo");
}

export default function GeneralInfo() {
  const forms = [
    {
      label: "First Name",
      type: "text",
      id: "user-name",
    },
    {
      label: "Surname",
      type: "text",
      id: "user-surname",
    },
    {
      label: "Email Address",
      type: "email",
      id: "user-email",
    },
    {
      label: "Phone",
      type: "text",
      id: "user-phone",
    },
  ];
  return (
    <>
      <form action="https://httpbin.org/post" method="post">
        <fieldset>
          <legend>General Info</legend>
          {forms.map((form) => {
            return (
              <InputField
                htmlFor={form.htmlFor}
                label={form.label}
                type={form.type}
                id={form.id}
                name={form.name}
              />
            );
          })}

          <button>Edit</button>
          <button onClick={handleClick} type="submit">
            Submit
          </button>
        </fieldset>
      </form>
    </>
  );
}
