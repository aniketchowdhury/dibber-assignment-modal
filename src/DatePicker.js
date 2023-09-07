import { useState } from "react";

export const DatePicker = ({ days }) => {
  const [activeDays, setActiveDays] = useState(days);
  const handleActive = (x) => {
    let arr = [...activeDays];
    activeDays?.forEach((item, index) => {
      if (item.day === x) {
        arr[index].active = !item.active;
      }
    });
    setActiveDays(arr);
  };

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      {activeDays.map((item) => (
        <div
          style={{
            borderRadius: "50%",
            cursor: "pointer",
            width: "32px",
            height: "32px",
            textAlign: "center",
            backgroundColor: `${item.active ? `#E0F9C8` : `lightgray`}`,
          }}
          key={item.day}
          onClick={() => handleActive(item.day)}
        >
          <p style={{ color: "#094F0C", marginTop: "5px" }}>{item?.val}</p>
        </div>
      ))}
    </div>
  );
};
