export default function GeneralInfo() {
  return (
    <>
      <h2>General Info</h2>
      <form action="">
        <label>First Name</label>
        <input type="text" name="user-firstname" id="user-name" />
        <label>Surname</label>
        <input type="text" name="user-surname" />
        <label>Email</label>
        <input type="email" name="user-email" id="user-email" />
        <label>Phone</label>
        <input type="text" name="user-phone" id="user-phone" />
        <button>Edit</button>
        <button>Submit</button>
      </form>
    </>
  );
}
