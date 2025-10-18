export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export type CartState = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  getTotalPrice: () => number;
};

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export type TodoState = {
  todos: Todo[];
  getCompletedCount: () => number;
};

export type UserState = {
  name: string;
  age: number;
  email: string;
  isOnline: boolean;

  setName: (name: string) => void;
  setAge: (age: number) => void;
  setEmail: (email: string) => void;
  setIsOnline: (isOnline: boolean) => void;
  getFullInfo: () => string;
};

export type Notification = {
  id: string;
  message: string;
  type: "success" | "error" | "info";
};

export type NotificationState = {
  notifications: Notification[];
  addNotification: (message: string, type: "success" | "error" | "info") => void;
  removeNotification: (id: string) => void;
};

export type User = {
  id: string;
  name: string;
  email: string;
};

export type AuthState = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};
