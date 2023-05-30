import { Item } from "../../types/types";
import offers from "../../data/offers.json";

export const getAllOffers = (): Item[] => {
  const response: Item[] = offers;
  return response;
};
