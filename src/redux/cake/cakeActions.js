import { BUY_CAKE } from "./cakeTypes";

export const buyCake = (numbers = 1) => {
  return {
    type: BUY_CAKE,
    payload: numbers,
  };
};
