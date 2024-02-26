export default function Education() {
  return (
    <>
      <h2>Education</h2>
      <form>
        <label>Institution</label>
        <input type="text" name="institution" id="institution" />
        <label>Title of Study</label>
        <input type="text" name="title-of-study" id="title-of-study" />
        <label>Study Commencement Date</label>
        <input type="date" name="study-commencement" id="study-commencement" />
        <label>Study Completion Date</label>
        <input type="date" name="study-completion" id="study-completion" />
        <button>Edit</button>
        <button>Submit</button>
      </form>
    </>
  );
}
