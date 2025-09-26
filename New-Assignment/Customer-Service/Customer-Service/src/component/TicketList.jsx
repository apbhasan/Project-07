// src/component/TicketList.jsx
import React from "react";
import "../style.css";

const TicketList = ({ tickets, addTask }) => {
  return (
    <section className="tickets">
      <h3>Customer Tickets</h3>
      <div id="ticketList" className="ticket-list">
        {tickets.map((ticket) => (
          <div
            className="ticket"
            key={ticket.id}
            onClick={() => ticket.status === "Open" && addTask(ticket)}
          >
            <div className="ticket-header">
              <h4>{ticket.title}</h4>
              <span className={`status-${ticket.status.toLowerCase().replace(" ", "-")}`}>
                {ticket.status}
              </span>
            </div>
            <p className="ticket-desc">{ticket.description}</p>
            <div className="ticket-footer">
              <span className="ticket-id">#{ticket.id}</span>
              <span className={`badge ${ticket.priority.toLowerCase()}`}>{ticket.priority}</span>
              <span>
                <i className="fa-regular fa-user"></i> {ticket.customer}
              </span>
              <span>
                <i className="fa-regular fa-calendar"></i> {ticket.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TicketList;
