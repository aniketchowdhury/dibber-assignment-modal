import "./App.css";
import { useState } from "react";
import { Modal } from "./Modal";

function App() {
  const [openModal, setModal] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20%",
      }}
    >
      {!openModal && (
        <button
          style={{
            width: "200px",
            height: "50px",
            backgroundColor: "#094f0c",
            color: "#c2f291",
            fontWeight: "700",
            fontSize: "18px",
            cursor: "pointer",
          }}
          onClick={() => setModal((val) => !val)}
        >
          Open Modal Window
        </button>
      )}
      {openModal && <Modal onClose={setModal} />}
    </div>
  );
}

export default App;
