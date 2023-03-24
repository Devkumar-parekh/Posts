import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

function PostDetail() {
  let { postId } = useParams();
  const state = useSelector((state) => state.postReducer);
  const post = state.posts;
  const commentList = state.comments;
  console.log(post);
  const getComments = () => {
    const postComments = commentList.filter((val) => val.postId == postId);
    console.log(postComments);
    return (
      <>
        <b>Comments: ({postComments.length})</b>
        <div className="row">
          {postComments.map((val, index) => {
            return (
              <div key={index} className="col-md-12 rounded  p-2 ">
                <div className="rounded my-3  shadow border-2">
                  <div className="p-3 name-wrap">
                    <i className="bi bi-person-square me-2"></i>
                    {val.email}
                  </div>
                  <div className="p-3">
                    <b>{val.name}</b>
                    <div className="border rounded p-2 my-2">{val.body}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };
  const fullpost = () => {
    const thispost = post.find((val) => {
      return val.id == postId;
    });
    console.log(thispost);
    return (
      <>
        <div className="">
          <h2 className="">{thispost.title}</h2>
          <div>{thispost.body}</div>
          <div>
            <div className=" p-md-5 rounded">{getComments()}</div>
          </div>
          <NavLink className="btn btn-secondary" to="/">
            <i className="bi bi-house"></i> Home
          </NavLink>
        </div>
      </>
    );
  };
  return (
    <div className="PostDetail container my-5">
      {state.posts && fullpost()}
      {/* <div id="google_translate_element"></div> */}
    </div>
  );
}
export default PostDetail;
