interface ICountry {
  abbreviation: string;
  capital: string;
  currency: string;
  id: number;
  media: {
    flag: string;
    emblem: string;
    orthographic: string;
  };
  name: string;
  phone: string;
  population: number;
}

interface ITableProps {
  data: ICountry[];
}

interface IDropdownOption {
  id: number;
  label: string;
  value: number;
}

interface IDropdownProps {
  options: IDropdownOption[];
  placeholder: string;
  selectedOption: IDropdownOption | null;
  onSelect: (a: IDropdownOption) => void;
}

type TButtonType = "primary" | "secondary";
