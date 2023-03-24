import { useRef } from "react";
import { NavLink, Outlet } from "react-router-dom";
import PswdPattern from "./PswdPattern";
function Layout() {
  const translateRef = useRef();
  // const showRef = (refEle) => {
  //   console.log(refEle);
  // };
  return (
    <div className="Layout">
      <div ref={translateRef} id="google_translate_element"></div>
      <div className="container">
        <NavLink to="pswdpattern">PswdPattern</NavLink>
      </div>

      <Outlet />
      {/* {showRef(translateRef)} */}
      {/* {translateRef} */}
    </div>
  );
}

export default Layout;
