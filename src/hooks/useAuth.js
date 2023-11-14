import { useContext } from "react";
import { StateContext } from "../contexts/ContextProvider";

export const useAuth = () => useContext(StateContext);