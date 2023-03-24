import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import { Provider } from "react-redux";
// import { store } from "./Redux/Store";
import { store } from "./store/Store";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PostDetails from "./components/PostDetails";
import PostDetail from "./pages/PostDetail";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import PrivateRoute from "./components/PrivateRoutes";
import Error from "./components/Error";
import PswdPattern from "./components/PswdPattern";
// import "./css/style.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <div id="google_translate_element"></div> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="private" element={<PrivateRoute />}></Route> */}
          <Route index element={<Home />} />
          <Route path="postdetails" element={<PostDetails />}>
            <Route path=":postId" element={<PostDetail />} />
            {/* <Route
              path=":postId"
              // element={<PostDetail />}
              // element={<PrivateRoute comp={1} />}
              element={<PrivateRoute comp={<PostDetail />} />}
            /> */}
            {/* <Route path="private" element={<PrivateRoute />} /> */}
          </Route>
          <Route path="pswdpattern" element={<PswdPattern />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>

    {/* <div id="google_translate_element"></div> */}
  </Provider>

  // </React.StrictMode>
);
