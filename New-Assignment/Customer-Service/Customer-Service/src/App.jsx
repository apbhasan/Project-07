// src/App.jsx
import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import TicketList from "./component/TicketList";
import TaskStatus from "./component/TicketStatus";
import Footer from "./component/Footer";
import "./style.css";

function App() {
  const initialTickets = [
    { id: 1010, title: "Login Issue", description: "Customer is unable to log in to their account.", priority: "High Priority", customer: "John Doe", date: "2025-09-25", status: "Open" },
    { id: 1011, title: "Payment Error", description: "Customer reports payment failing at checkout.", priority: "Medium Priority", customer: "Jane Smith", date: "2025-09-24", status: "Open" },
    { id: 1012, title: "UI Bug on Dashboard", description: "The analytics dashboard is not displaying charts correctly.", priority: "Low Priority", customer: "Michael Lee", date: "2025-09-23", status: "Open" },
    { id: 1013, title: "Password Reset Link Expired", description: "Customer received a password reset link but it expired.", priority: "High Priority", customer: "Emily Brown", date: "2025-09-22", status: "Open" },
    { id: 1014, title: "Email Notifications Not Received", description: "Some users are reporting they do not receive notification emails.", priority: "Medium Priority", customer: "Chris Green", date: "2025-09-21", status: "Open" },
    { id: 1015, title: "Mobile App Crash", description: "App crashes when user tries to upload profile picture.", priority: "High Priority", customer: "Sophia White", date: "2025-09-20", status: "Open" },
    { id: 1016, title: "Search Not Working", description: "Search bar returns no results even when items exist.", priority: "Medium Priority", customer: "David Kim", date: "2025-09-19", status: "Open" },
    { id: 1017, title: "Slow Page Load", description: "Pages take over 10 seconds to load for some users.", priority: "Low Priority", customer: "Olivia Johnson", date: "2025-09-18", status: "Open" },
    { id: 1018, title: "Order Not Processing", description: "Customer placed order but it's stuck on 'Processing' status.", priority: "High Priority", customer: "William Carter", date: "2025-09-17", status: "Open" },
    { id: 1019, title: "Report Export Broken", description: "Exporting reports to Excel results in corrupted files.", priority: "Medium Priority", customer: "Isabella Moore", date: "2025-09-16", status: "Open" }
  ];

  const [tickets, setTickets] = useState(initialTickets);
  const [tasks, setTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  const addTask = (ticket) => {
    if (!tasks.includes(ticket)) {
      setTasks([...tasks, { ...ticket, status: "In Progress" }]);
      setTickets(tickets.map(t => t.id === ticket.id ? { ...t, status: "In Progress" } : t));
    }
  };

 const completeTask = (ticketId) => {
  const completedTicket = tickets.find(ticket => ticket.id === ticketId);

  if (completedTicket) {
    setResolvedTasks([...resolvedTasks, { ...completedTicket, status: "Resolved" }]);
    setTickets(tickets.filter(ticket => ticket.id !== ticketId)); // Remove from tickets
    setTasks(tasks.filter(task => task.id !== ticketId)); // Remove from tasks

    alert(`✅ Task "${completedTicket.title}" completed successfully!`);
  }
};


  const inProgressCount = tasks.length;  
  const resolvedCount = resolvedTasks.length;

  return (
    <div className="App">
      <Navbar />
      <Banner inProgressCount={inProgressCount} resolvedCount={resolvedCount} />
      <main className="main">
        <TicketList tickets={tickets} addTask={addTask} />
        <TaskStatus tasks={tasks} completeTask={completeTask} resolvedTasks={resolvedTasks} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
