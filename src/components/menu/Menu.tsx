import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/sample">Sample</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
