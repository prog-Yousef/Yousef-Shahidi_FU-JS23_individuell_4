import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


import About from "./pages/About";
import Landing from "./pages/Landing";
import Menu from "./pages/Menu";
import Status from "./pages/Status";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Landing />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/about" element={<About />} />
      <Route path="/status" element={<Status />} />
    </Route>
  )
);

function App() {

  return (
    <>
   <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App