import "./App.css";
import Body from "./components/Body";
import NAvbar from "./components/Navbar/Navbar";
// import Sidebar from "./components/Navbar/Sidebar";
import Watch from "./components/Watch";
import Feed from "./components/feed/Feed";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Feed />,
      },
      {
        path: "/watch",
        element: <Watch />,
      },
    ],
  },
]);
function App() {
  return (
    <div className=" ">
      <NAvbar />

      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
