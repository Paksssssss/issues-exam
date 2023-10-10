const BASE_URL = "http://localhost:3030";

export const getIssues = async () => {
  return fetch(`${BASE_URL}/api/issues`).then((data) => data.json());
};
export const getIssue = async (issueId) => {
  return fetch(`${BASE_URL}/api/issues/${issueId}`).then((data) => data.json());
};
export const createIssue = async (issue) => {
  return fetch(`${BASE_URL}/api/issues`, { method: "POST", body: issue }).then(
    (data) => data.json()
  );
};
export const updateIssue = async (issue) => {
  return fetch(`${BASE_URL}/api/issues/${issue.issueId}`, {
    method: "PUT",
    body: issue,
  }).then((data) => data.json());
};
export const deleteIssue = async (issueId) => {
  console.log(issueId);
  return fetch(`${BASE_URL}/api/issues/${issueId}`, { method: "DELETE" }).then(
    (data) => data.json()
  );
};
