import { createContext } from "react";

const AppContext = createContext({
  date: {},
  updateDate: () => {}
});

export default AppContext;
