import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Go Local</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/home"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/explore"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/business"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Business
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
