import { useState } from "react";
import "./styles.scss";

const Dropdown: React.FC<IDropdownProps> = ({
  options,
  placeholder,
  selectedOption,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOptionSelect = (option: IDropdownOption) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <div onClick={() => setIsOpen(true)}>
        {selectedOption ? (
          <span className="dropdown-value">{selectedOption.label}</span>
        ) : (
          <span className="dropdown-placeholder">{placeholder}</span>
        )}
      </div>

      {isOpen ? (
        <div className="options-container">
          {options.map((option: IDropdownOption) => (
            <div
              key={option.id}
              className="options-item"
              onClick={() => handleOptionSelect(option)}
              role="option"
            >
              {option.label}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
