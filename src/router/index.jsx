import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";

import App from "../App";
import {Asosiy , Xizmatlar , Malumotlar , Aloqa , Maxsulotlar , Loyihalar , Yangiliklar , Videolar, ProductInfo , Map} from "@pages"

import { MainLayut } from "../layout"

const Index = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<App />}>
            <Route path="/" element={<MainLayut />}>
                <Route index element={<Asosiy />} />
                <Route path="xizmatlar" element={<Xizmatlar />} />
                <Route path="malumotlar" element={<Malumotlar />} />
                <Route path="aloqa" element={<Aloqa />} />
                <Route path="maxsulotlar" element={<Maxsulotlar />} />
                <Route path="loyihalar" element={<Loyihalar />} />
                <Route path="yangiliklar" element={<Yangiliklar />} />
                <Route path="videolar" element={<Videolar />} />
                <Route path="map" element={<Map />} />
                <Route path="maxsulotlar/info" element={<ProductInfo />} />
                

            </Route>  
          </Route>
        )
      );
      return <RouterProvider router={router} />;
}

export default Index;
