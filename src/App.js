import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Layouts from "./components/layouts/Layouts";
import Signup from "./pages/Signup";
import Login from "./pages/Login";



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
     <Route path='/' element={ <Layouts /> }>
       <Route index element={<Home />} />
      
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />


     </Route>
      )
    );
    return <RouterProvider router={router} />;
}

export default App;
