import { useState } from "react";

const PswdPattern = () => {
  const [liststate, setListState] = useState([0, 0, 0, 0]);
  const values = [5, 6, 8, 1];
  const btnlist = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const checkNum = (e) => {
    console.log(e.target.value);
    for (let i = 0; i < liststate.length; i++) {
      if (liststate[i] == 0) {
        if (values[i] == e.target.value) {
          liststate[i] = 1;
          setListState([...liststate]);
        }
        break;
      }
    }
  };
  const getBtns = () => {
    return btnlist.map((val, index) => {
      return (
        <button
          key={index}
          onClick={(e) => {
            checkNum(e);
          }}
          className="btn btn-outline-dark m-2"
          value={val}
        >
          {val}
        </button>
      );
    });
  };
  const nums = () => {
    return values.map((val, index) => {
      return (
        <span
          key={index}
          className={`border rounded-circle m-2 p-2 ${
            liststate[index] ? "bg-warning" : ""
          }`}
        >
          {val}
        </span>
      );
    });
  };
  return (
    <>
      <div className="container">
        <div className="m-2 p-2">{nums()}</div>
        {getBtns()}
      </div>
    </>
  );
};
export default PswdPattern;
