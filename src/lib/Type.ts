export interface MenuItem {
  id: string;
  name: string;
  price: number;
}

export interface MenuFunctions {
  inputValue: string;
  menuData: MenuItem[];
  formatAsIDR: (number: number) => string; // Corrected return type
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  addMenuItem: () => void;
  removeMenuItem: (id: string) => void;
  priceValue: number;
  setPriceValue: React.Dispatch<React.SetStateAction<number>>;
}
