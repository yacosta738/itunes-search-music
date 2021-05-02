import { ItunesTypes } from "../types/ItunesTypes.interface";

export const itunesSearch = async (search: string): Promise<ItunesTypes> =>
  await fetch(
    `https://itunes.apple.com/search?term=${search}&entity=album`,   {
        headers: [
          ["Content-Type", "application/json"],
          ["Content-Type", "text/plain"]
        ],
        credentials: "include",
        referrerPolicy: 'origin-when-cross-origin', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      }
  ).then(val => val.json());
