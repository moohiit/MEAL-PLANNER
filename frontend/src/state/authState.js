import { atom } from "recoil";

// Define the authState atom
export const authState = atom({
  key: "authState",
  default: {
    token: null,
    user: null,
  },
});
