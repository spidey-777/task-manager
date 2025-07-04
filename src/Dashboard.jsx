import { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { getUserName } from "./utils/localStorage";
import { Link } from "react-router";

function Dashboard() {
  const [showForm, setShowForm] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const userName = getUserName();
  if(!userName){
    return (
      <div className="flex justify-center items-center h-screen gap-2">
        <h1 className="text-2xl font-bold">Please login to access the dashboard </h1>
        <button>
          <Link to='/login' className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Login
          </Link>
        </button>
      </div>
    );
  }

  const toggleRefresh = () => setRefresh((prev) => !prev);

  return (
    <div className="px-4 md:px-20 py-6">
      <div className="flex justify-center items-center mb-6">
        <button
          onClick={() => setShowForm((prev) => !prev)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          {showForm ? "Hide Task Form" : "Add Task"}
        </button>
      </div>
      {showForm && <TaskForm onSubmitSuccess={toggleRefresh} setShowForm={setShowForm} />}
      <TaskList refresh={refresh} />
    </div>
  );
}

export default Dashboard;
