export default function Experience() {
  return (
    // Name, position, dates, responsibilities
    <>
      <h2>Experience</h2>
      <form action="">
        <label>Company Name</label>
        <input type="text" name="company-name" id="company-name" />
        <label>Position</label>
        <input type="text" name="position" id="position" />
        <label>Date Commenced</label>
        <input type="date" name="date-commenced" id="date-commenced" />
        <label>Date Completed</label>
        <input type="date" name="date-completed" id="date-completed" />
        <label>Responsibilities</label>
        <textarea
          name="responsibilities"
          id="responsibilities"
          cols="30"
          rows="3"
        ></textarea>
        <button>Edit</button>
        <button>Submit</button>
      </form>
    </>
  );
}
