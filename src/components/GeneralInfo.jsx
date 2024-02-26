import { v4 as uuidv4 } from "uuid";
import InputField from "./InputField";
import { useState } from "react";

const forms = [
  {
    label: "First Name",
    type: "text",
    id: "user_name",
    uuidKey: uuidv4(),
  },
  {
    label: "Surname",
    type: "text",
    id: "user_surname",
    uuidKey: uuidv4(),
  },
  {
    label: "Email Address",
    type: "email",
    id: "user_email",
    uuidKey: uuidv4(),
  },
  {
    label: "Phone",
    type: "text",
    id: "user_phone",
    uuidKey: uuidv4(),
  },
];

export default function GeneralInfo() {
  const [formValue, setFormValue] = useState({
    user_name: "",
    user_surname: "",
    user_email: "",
    user_phone: "",
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <fieldset>
        <legend>General Info</legend>
        {forms.map((form) => {
          return (
            <li key={form.uuidKey}>
              <InputField
                label={form.label}
                type={form.type}
                id={form.id}
                state={formValue}
                setState={setFormValue}
              />
            </li>
          );
        })}
      </fieldset>
    </form>
  );
}

// const handleSubmit = (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.target);
//   console.log(formData);
//   setFormValue({
//     user_name: formData.get("user_name"),
//     user_surname: formData.get("user_surname"),
//     user_email: formData.get("user_email"),
//     user_phone: formData.get("user_phone"),
//   });
// };
