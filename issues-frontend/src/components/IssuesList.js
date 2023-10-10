import { useEffect, useState } from "react";
import { getIssues, deleteIssue } from "../services/issues";

const IssuesList = ({ onUpdate }) => {
  const [issues, setIssues] = useState([]);
  useEffect(() => {
    getIssues().then((resIssues) => {
      setIssues(resIssues);
    });
  }, []);

  const onDeleteIssue = (issueId) => {
    deleteIssue(issueId).then((delResponse) => console.log(delResponse));
  };

  return (
    <div>
      <dl>
        {issues.map((issue) => (
          <>
            <dt>{issue.title}</dt>
            <dd>{issue.description}</dd>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onUpdate(issue)}
            >
              Update
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                onDeleteIssue(issue.id);
              }}
            >
              Delete
            </button>
          </>
        ))}
      </dl>
    </div>
  );
};

export default IssuesList;
