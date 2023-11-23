import React, {lazy, Suspense} from "react";
import { Outlet, createBrowserRouter} from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import SignIn from "./Components/SignIn";
import TravelFeed from "./Components/TravelFeed";
import Messages from "./Components/Messages";
import { Provider } from "react-redux";
import Appstore from "./Utils/Appstore";


const Place = lazy(() => import("./Components/Places.js"));
const Groups = lazy(()=> import("./Components/GroupJoin.js"))
const Applayout=()=> {
  return (
    <div className="App">
    <Provider store={Appstore}>
     <Header />
     <Outlet />
     </Provider>
    </div>
  )
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
    element: (<Suspense fallback={<h2>Loading...</h2>}>
    <Groups />
      </Suspense>
    )
  },
  {
    path:"/places",
    element: (
    <Suspense fallback={<h2>Loading...</h2>}>
    <Place />
      </Suspense>
    )
  },
  {
    path:"/messages",
    element: <Messages />
  }
],
},
]);

export default Applayout
