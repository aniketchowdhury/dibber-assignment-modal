import { useState } from "react";
import { DatePicker } from "./DatePicker";
import { Dropdown } from "./Dropdown";
import { Select } from "./Select";
import { clockTimings, days, events, IconArray, limit } from "./utils/util";
import { ReactComponent as Close } from "./icons/close.svg";

export const Modal = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [startTime, setStartTime] = useState(clockTimings[0]);
  const [closeTime, setCloseTime] = useState(clockTimings[1]);
  const [selectedEvents, setSelectedEvents] = useState(events[0]);
  const [iconSelected, setIcon] = useState(IconArray[0]);
  const [openEvents, setEvents] = useState(false);
  const [openStartTime, setOpenStartTime] = useState(false);
  const [openCloseTime, setOpenCloseTime] = useState(false);

  return (
    <div className="modal-outer">
      <div className="modal-main">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "0px 24px 0px 24px",
          }}
        >
          <h2 style={{ fontSize: "24px", fontWeight: "700" }}>
            New Recurring Activity
          </h2>
          <button
            style={{
              width: "50px",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => onClose(false)}
          >
            <Close />
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0px 24px 24px 24px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row", gap: "16px" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h5>Title*</h5>
              <input
                placeholder="Title"
                style={{
                  width: "254px",
                  height: "24px",
                  borderRadius: "5px",
                  padding: "10px 12px",
                }}
                className="selectClass"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={limit}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h5>Type</h5>
              <Select
                text={selectedEvents}
                width={"254px"}
                openDropdown={setEvents}
                isOpen={openEvents}
                iconSelected={iconSelected}
              />
            </div>
          </div>
          {title.length > 0 && (
            <label
              style={{ fontSize: "14px", fontWeight: "500", marginTop: "7px" }}
            >
              {limit - title.length > 0 ? limit - title.length : 0} characters
              remaining
            </label>
          )}
          <h5>Description</h5>
          <input
            placeholder="Optional Description"
            style={{
              borderRadius: "5px",
              width: "548px",
              height: "24px",
              padding: "10px 12px",
            }}
            className="selectClass"
          />
          <h5>Time</h5>
          <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <Select
              width={"140px"}
              text={startTime}
              openDropdown={setOpenStartTime}
              isOpen={openStartTime}
            />
            <label style={{ marginTop: "10px" }}>to</label>
            <Select
              width={"140px"}
              text={closeTime}
              openDropdown={setOpenCloseTime}
              isOpen={openCloseTime}
            />
          </div>
          <h5>Repeat every</h5>
          <DatePicker days={days} />
        </div>
        <hr style={{ color: "black", width: "618px" }} />
        {/* Footer section */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "right",
            gap: "10px",
            padding: "14px 24px 24px 24px",
          }}
        >
          <button className="cancelButton" onClick={() => onClose(false)}>
            Close
          </button>
          <button
            className="addButton"
            onClick={() => {
              onClose(false);
              alert("Data submitted!");
            }}
          >
            Add
          </button>
        </div>
      </div>
      {openEvents && (
        <Dropdown
          icons={IconArray}
          data={events}
          top={"35%"}
          left={"60%"}
          className={"eventDropdown"}
          onSelect={setSelectedEvents}
          isDropdown={setEvents}
          setIcon={setIcon}
        />
      )}
      {openStartTime && (
        <Dropdown
          data={clockTimings}
          className={"timerDropdown"}
          onSelect={setStartTime}
          isDropdown={setOpenStartTime}
        />
      )}
      {openCloseTime && (
        <Dropdown
          data={clockTimings}
          className={"timerDropdown endTime"}
          onSelect={setCloseTime}
          isDropdown={setOpenCloseTime}
        />
      )}
    </div>
  );
};
