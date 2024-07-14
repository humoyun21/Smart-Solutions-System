import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
  } from "react-router-dom";
  import App from "../App";
  import { Home, Aloqa} from "../pages";
  
  
  
  const index = () => {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/model-3" element={<Aloqa />} />
        </Route>
      )
    );
  
    return <RouterProvider router={router} />;
  };
  
  export default index;
  