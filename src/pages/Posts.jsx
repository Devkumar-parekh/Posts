import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
// import setpostData from "../Redux/thunk";
import { setCommentData, setpostData, setuserData } from "../services/services";
// import { setCommentData } from "../services/services";
function Posts() {
  const [pageNum, setpageNum] = useState(1);
  const [postpg, setpostpg] = useState(5);
  const [searchq, setsearchq] = useState("");
  const dispatch = useDispatch();
  const postData = useSelector((state) => state.postReducer);
  //   const userData = useSelector((state) => state.postReducer);
  useEffect(() => {
    // if (Object.keys(postData).length == 0) {
    dispatch(setpostData(searchq, pageNum, postpg));
    dispatch(setuserData());
    dispatch(setCommentData());
    // }
    console.log(postData);
  }, [searchq, pageNum, postpg]);

  const getUserName = (uid) => {
    return postData.users.find((user) => {
      return user.id == uid;
    });
  };
  const display = () => {
    if (postData.posts && postData.users) {
      // console.log(postpg == "");

      return postData.posts
        .slice(pageNum === 1 ? 0 : postpg * (pageNum - 1), postpg * pageNum)
        .map((val) => {
          // if (val.title.includes(searchq) || val.body.includes(searchq)) {
          return (
            <div className="col-md-4 p-2" key={val.id}>
              <div className=" border  rounded p-2">
                <h3 className="my-2">{val.title.substr(0, 20) + "..."}</h3>
                <span className="my-2">
                  <i className="bi bi-person-circle me-2"></i>
                  {getUserName(val.userId).name}
                </span>
                <div className="my-2 text-content">
                  {val.body.substr(0, 100) + "..."}
                </div>
                <NavLink
                  to={`postdetails/${val.id}`}
                  className="text-decoration-none btn btn-outline-dark "
                >
                  View More <i className="bi bi-info-circle"></i>
                </NavLink>
              </div>
            </div>
          );
          // }
        });
    }
  };
  return (
    <>
      <h2 className="Posts m-3">Posts Page</h2>
      <div className="m-3 seacrh-box">
        <span className="input-group">
          <input
            value={searchq}
            placeholder="Search..."
            onChange={(e) => {
              setsearchq(e.target.value);
            }}
            className="border rounded-start"
          />
          <i className="bi bi-search input-group-text"></i>
        </span>
      </div>
      <div className="m-3">
        <button
          className=" btn btn-outline-secondary"
          onClick={() => {
            setpageNum(pageNum > 1 ? pageNum - 1 : pageNum);
          }}
        >
          <i className="bi bi-chevron-double-left"></i>Prev
        </button>
        <span className="mx-3">{pageNum}</span>
        <button
          className=" btn btn-outline-secondary"
          onClick={() => {
            setpageNum(pageNum + 1);
          }}
        >
          Next<i className="bi bi-chevron-double-right"></i>
        </button>
        <span className="float-end d-flex">
          Post Per Page:
          <input
            value={postpg}
            onChange={(e) => {
              setpostpg(e.target.value);
            }}
            className="ms-2"
          />
        </span>
      </div>
      <div className="row 101">{display()}</div>
    </>
  );
}

export default Posts;
