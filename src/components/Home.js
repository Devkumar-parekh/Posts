import Posts from "../pages/Posts";
function Home() {
  return (
    <>
      <div className="container my-5">
        {/* <div id="google_translate_element"></div> */}

        <Posts />
        {/* <iframe
          style={{ width: "90vw", height: "50vw" }}
          // className="m-5"
          src="https://www.youtube.com/embed?listType=playlist&list=UUiAH2s_M6nPfGZk-PpfyPkg"
        ></iframe> */}
      </div>
    </>
  );
}

export default Home;
