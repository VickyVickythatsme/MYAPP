import { Link } from "react-router-dom";
import NaviCss from './MainNavigation.module.css';
import {useContext} from 'react';
import FavoritesContext from "../../store/favorite-context";
// not loaded as a page but embedded in a page
// totally unrelated to the router
function MainNavigation() {
  const favorCtx = useContext(FavoritesContext);
  return (
    <header className = {NaviCss.header}>
      <div className = {NaviCss.logo }> react meetup </div>
      <nav>
        <ul>
          <li>
            <Link to ='/'>All Meetup </Link>
          </li>
          <li>
            <Link to ='/new-meet-up'>NewMeetup </Link>
          </li>
          <li>
            <Link to ='/favorites'> My Favorites 
            <span className = {NaviCss.badge}> {favorCtx.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
