import { useState } from "react";
import "./App.css";
import CreateIssues from "./components/CreateIssues";
import IssuesList from "./components/IssuesList";

function App() {
  const [currentlyUpdating, setCurrentlyUpdating] = useState(null);

  const onUpdate = (issue) => {
    setCurrentlyUpdating(issue);
  };

  return (
    <div className="App">
      <h1>HUB Issues</h1>
      <CreateIssues currentIssue={currentlyUpdating} />
      <hr />
      <IssuesList onUpdate={onUpdate} />
    </div>
  );
}

export default App;
