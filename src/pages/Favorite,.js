import {useContext} from 'react';
import FavoritesContext  from '../store/favorite-context';
import MeetupList  from '../component/meetups/MeetupList';
function FavoritePage(){
    let content;
    const favorctx =  useContext(FavoritesContext);
    if (favorctx.totalFavorites ===0){
        content = <p> you got no favorites yet. start adding some? </p> 
    }
    else{
        content = <MeetupList meetups = {favorctx.favorites}></MeetupList>;
    }
    return <section> 
        <h1> my favor </h1>
        {content}
    </section>;
}
export default FavoritePage;