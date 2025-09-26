import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">CS — Ticket System</div>
      <div className="menu">
        <a href="#">Home</a>
        <a href="#">FAQ</a>
        <a href="#">Changelog</a>
        <a href="#">Blog</a>
        <a href="#">Download</a>
        <a href="#">Contact</a>
        <button id="newTicketBtn">+ New Ticket</button>
      </div>
    </nav>
  );
};

export default Navbar;
