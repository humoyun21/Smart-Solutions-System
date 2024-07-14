import { Home, About, Service, Contact, Posts, ErrorPage , Blog, } from "@pages";
import { Aloqa } from "../pages";

const router = [
  {
    path: "/",
    element: <Home />,
    content:"Model S",
  },
  {
    path: "/contact",
    element: <Aloqa />,
    content:"Model 3 ",
  },
  
];

export default router;
