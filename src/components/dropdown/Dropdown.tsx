import { useState } from "react";
import "./styles.scss";

const Dropdown: React.FC<IDropdownProps> = ({
  options,
  placeholder,
  selectedOption,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOptionSelect = (opt: IDropdownOption) => {
    onSelect(opt);
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
          {options.map((opt: IDropdownOption) => (
            <div
              key={opt.id}
              className="options-item"
              onClick={() => handleOptionSelect(opt)}
              role="option"
            >
              {opt.label}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
