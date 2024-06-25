import React from 'react';
import { NavLink } from 'react-router-dom';

function Header({ user, onLogout }) {
  return (
    <header>
      <div className="header-left">
        <h1>Michael's App</h1>
        <nav>
          <NavLink to="/" end activeClassName="active">Home</NavLink>
          <NavLink to="/about" activeClassName="active">About</NavLink>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          <NavLink to="/map" activeClassName="active">Map</NavLink>
          {user && <NavLink to="/profile" activeClassName="active">Profile</NavLink>}
        </nav>
      </div>
      <div className="user-controls">
        {user ? (
          <>
            <span>Welcome, {user}</span>
            <button onClick={onLogout}>Logout</button>
          </>
        ) : (
          <NavLink to="/login" activeClassName="active">Login</NavLink>
        )}
      </div>
    </header>
  );
}

export default Header;
