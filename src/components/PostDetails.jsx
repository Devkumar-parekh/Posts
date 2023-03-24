import { Outlet } from "react-router-dom";

function PostDetails() {
  return (
    <div className="PostDetails">
      {/* PostDetails Page  */}
      {/* <div id="google_translate_element"></div> */}

      <Outlet />
    </div>
  );
}

export default PostDetails;
