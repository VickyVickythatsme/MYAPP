import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavor: (favorMeetup)=>{},
  removeFavor: (removeId) =>{},
  itemIsFavor: (meetupId) => {}
  
}); // contain react component

export function FavoritesContextProvider(props) {
  const [userFavor, setUserFavor] = useState([]);

  function addFavorHandler(favorMeetup) {
    // add new meetup into favorites
    setUserFavor((previousFavor) => {
      return previousFavor.concat(favorMeetup);
    });
    // append new meetup into previous items
  }
  function removeFavorHandler(removeId) {
    setUserFavor((previousFavor) => {
      return previousFavor.filter((meetup) => meetup.id !== removeId);
    });
  }
  function isFavor(meetupId) {
    return userFavor.some((meetup) => meetup.id === meetupId);
    // to determine if this meetupId exists in meetup array
  }
  const context = {
    favorites: userFavor,
    totalFavorites: userFavor.length,
    addFavor: addFavorHandler,
    removeFavor: removeFavorHandler,
    itemIsFavor:isFavor
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
