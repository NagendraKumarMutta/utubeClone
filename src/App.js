import MainContainer from "./MainContainer"
import {Provider} from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./utils/store";
import "./input.css"; 
import WatchPage from "./WatchPage";
import VideoMainContainer from "./VideoMainContainer";

const appRouter = createBrowserRouter(
  [
  {
    path:"/",
    element:<MainContainer />,
    children:[
      {
        path:"/",
        element: <VideoMainContainer />
      },
      {
        path:"watch",
        element:<WatchPage />
      }
    ]
  }
  ]
)

function App() {
  return (
    <Provider store={store}>
    <div className="text-2xl font-extrabold first-line font-family">
        <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
}

export default App;
