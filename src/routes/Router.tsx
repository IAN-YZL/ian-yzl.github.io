import {
  Route as RouterPage,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home } from "../pages/Home/Home";

export const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <RouterPage>
        <RouterPage index element={<Home />} />
        <RouterPage path="/blog" element={<Home />} />
        <RouterPage path="/projects" element={<Home />} />
        <RouterPage path="/about" element={<Home />} />
      </RouterPage>
    )
  );

  return router;
};
