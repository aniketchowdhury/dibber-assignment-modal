import { ReactComponent as Caret } from "./icons/caretdown.svg";
export const Select = ({
  text,
  openDropdown,
  width,
  isOpen,
  iconSelected = null,
}) => {
  return (
    <div
      className="selectClass"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 12px",
        width: width,
        height: "24px",
        cursor: "pointer",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
        <span style={{ marginTop: "3px" }}>{iconSelected}</span>
        <p>{text}</p>
      </div>
      <button
        style={{
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => openDropdown(!isOpen)}
      >
        <Caret />
      </button>
    </div>
  );
};
