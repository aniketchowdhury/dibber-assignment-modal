export const Dropdown = ({
  data,
  icons = [],
  className,
  onSelect,
  isDropdown,
  setIcon = () => {},
}) => {
  return (
    <div className={`dropDown ${className}`}>
      <div>
        {data?.length > 0 &&
          data?.map((item, index) => (
            <div
              className="dropDownListItems"
              key={index.toString()}
              onClick={() => {
                onSelect(item);
                setIcon(icons[index]);
                isDropdown(false);
              }}
            >
              {icons.length > 0 && icons[index]}
              {item}
            </div>
          ))}
      </div>
    </div>
  );
};
