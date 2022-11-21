import React from "react";
import { toast } from "react-toastify";

export const Appcontext: any = React.createContext({
  state: {},
  setState: () => { },
});

export const api = ""

export const root = ``

export const notify = (x) => {
  toast(x);
};

export const FormatAmount = (amount) => {
  return amount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const unit_list = ["Kg", "g", "cg", "mg", "t", "mt", "L", "mL", "cL","carton"]