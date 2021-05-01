import { ItunesTypes } from "../types/ItunesTypes.interface";

export const itunesSearch = async (search: string): Promise<ItunesTypes> =>
  await fetch(
    `https://itunes.apple.com/search?term=${search}&entity=album`,   {
        headers: [
          ["Content-Type", "application/json"],
          ["Content-Type", "text/plain"]
        ],
        credentials: "include",
      }
  ).then(val => val.json());
