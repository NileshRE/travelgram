import React from "react";
import { Outlet, createBrowserRouter} from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import SignIn from "./Components/SignIn";
import TravelFeed from "./Components/TravelFeed";
import GroupJoin from "./Components/GroupJoin";
import Places from "./Components/Places";
import Messages from "./Components/Messages";

const Applayout=()=> {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <Applayout />,
    children:[
  {
    path:"/",
    element: <HomePage />
  },
  {
    path:"/login",
    element: <SignIn />
  },
  {
    path:"/feed",
    element: <TravelFeed />
  },
  {
    path:"/groupjoin",
    element: <GroupJoin />
  },
  {
    path:"/places",
    element: <Places />
  },
  {
    path:"/messages",
    element: <Messages />
  }
],
},
]);

export default Applayout
