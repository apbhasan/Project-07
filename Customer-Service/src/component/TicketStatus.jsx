import React from "react";

const TaskStatus = ({ tasks, completeTask, resolvedTasks }) => {
  return (
    <section className="task-status">
      <h3>Task Status</h3>
      <ul id="taskList">
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            <button className="complete-btn" onClick={() => completeTask(task.id)}>
              Complete
            </button>
          </li>
        ))}
      </ul>

      <h3>Resolved Tasks</h3>
      <ul id="resolvedList">
        {resolvedTasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </section>
  );
};

export default TaskStatus;
