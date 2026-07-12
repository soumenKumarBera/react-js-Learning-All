import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Contaner from "./components/Contaner";
import Controls from "./components/Controls";

function App() {
  return (
    <>
      <center class="px-4 py-5 my-5 text-center">
        <Contaner>
          {" "}
          <h1 class="display-5 fw-bold text-body-emphasis">
            {" "}
            <Header />
          </h1>{" "}
          <div class="col-lg-6 mx-auto">
            {" "}
            <DisplayCounter />
            <Controls />
          </div>{" "}
        </Contaner>
      </center>
    </>
  );
}

export default App;
