import { Route, Switch } from "react-router-dom";
import AllMeetUpPages from "./pages/AllMeetUp"; // import function itself
import FavoritePage from "./pages/Favorite,";
import NewMeetUp from "./pages/NewMeetup";
import MainNavigation from "./component/layout/MainNavigation";
import Layout from "./component/layout/Layout";

// Route is to define different paths in the URL we wanna listen to
// and which component should be loaded
function App() {
  console.log("I lobbbbbbbbb you");
  // current domain localhost:3000/
  // exact is used for switch not just matching / but the whole paths
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact={true}>
            <AllMeetUpPages />
          </Route>

          <Route path="/new-meet-up">
            <NewMeetUp />
          </Route>

          <Route path="/favorites">
            <FavoritePage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
