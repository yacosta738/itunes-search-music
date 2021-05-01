import { ItunesTypes } from "../types/ItunesTypes.interface";

export const itunesSearch = async (search: string): Promise<ItunesTypes> =>
  await fetch(
    `https://itunes.apple.com/search?term=${search}&entity=album`, {mode:'cors'}
  ).then(val => val.json());
