import { ITEM_TO_CREATE } from "./types";

export const itemToCreate = item => {
  console.log("payload is", item);
  return {
    type: ITEM_TO_CREATE,
    payload: item
  };
};
