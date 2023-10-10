import { useEffect, useState } from "react";
import { createIssue, getIssue, updateIssue } from "../services/issues";

const CreateIssues = ({ currentIssue }) => {
  const [issue, setIssue] = useState({ title: "", description: "" });
  const [isUpdating, setIsUpdating] = useState(false);
  useEffect(() => {
    if (currentIssue) {
      setIssue(currentIssue);
      setIsUpdating(true);
    }
  }, [currentIssue]);

  const onSubmitIssue = (event) => {
    event.preventDefault();
    if (isUpdating) {
      updateIssue(issue).then((updateRes) => console.log(updateRes));
    } else {
      createIssue(issue).then((createRes) => console.log(createRes));
    }
  };

  return (
    <form onSubmit={onSubmitIssue}>
      <div className="form-group">
        <label htmlFor="issue-title">Issue Title</label>
        <input
          className="form-control"
          id="issue-title"
          placeholder="Enter issue"
          value={issue.title}
          onChange={(event) => {
            setIssue({ ...issue, title: event.target.value });
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="issue-description">Password</label>
        <textarea
          className="form-control"
          id="issue-description"
          placeholder="Description"
          value={issue.description}
          onChange={(event) => {
            setIssue({ ...issue, description: event.target.value });
          }}
        />
      </div>
      <hr />
      <button type="submit" className="btn btn-primary">
        {isUpdating ? "Update ISsue" : "Submit Issue"}
      </button>
    </form>
  );
};

export default CreateIssues;
