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

export interface ButtonTableProps {
  onTableSelect: (tableId: string) => void;
  selectedTable: string | null;
}

export interface Order {
  menu: string;
  table: string;
  totalPrice: number;
  quantity: number;
}

export interface ExistingOrder {
  menu: string;
  table: string;
  totalPrice: number;
  quantity: number;
}
