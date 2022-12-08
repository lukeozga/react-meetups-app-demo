import { React, useContext} from "react";
import { Link } from "react-router-dom";
import FavouritesContext from "../../store/favourites-context";
import classes from "./Navbar.module.css";

function Navbar() {
  const favouritesCtx = useContext(FavouritesContext)

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React App Demo</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/favourites">
              Favourites
              <span className={classes.badge}>{favouritesCtx.totalFavourites}</span>  
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
