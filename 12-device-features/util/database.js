import * as SQLite from 'expo-sqlite';
import {Place} from "../models/place";

const database = SQLite.openDatabase('places.db'); // create &| open

export const init = () => {
  const promise = new Promise((resolve, reject) => {
      database.transaction((tx) => {
        tx.executeSql(`CREATE TABLE IF NOT EXISTS places (
      id INTEGER PRIMARY KEY NOT NULL,
      title TEXT NOT NULL,
      imageUri TEXT NOT NULL,
      address TEXT NOT NULL,
      lat REAL NOT NULL,
      lng REAL NOT NULL
    )`,
          [],
          () => {
            resolve();
          }, // success
          (_, error) => {
            reject(error);
          } // err
        );
      });
    }
  );
  return promise;
};

export const insertPlace = (place) => {
  const promise = new Promise((resolve, reject) => {
      database.transaction((tx) => {
        tx.executeSql(`INSERT INTO places (
            title,
            imageUri,
            address,
            lat,
            lng
          ) VALUES (?,?,?,?,?)`,
          [place.title, place.imageUri, place.address, place.location.lat, place.location.lng],
          (_, result) => {
            console.log(result);
            resolve(result);
          }, // success
          (_, error) => {
            reject(error);
          } // err
        );
      });
    }
  );
  return promise;
};

export const fetchPlaces = () => {
  const promise = new Promise((resolve, reject) => {
      database.transaction((tx) => {
        tx.executeSql(`SELECT * FROM places`,
          [],
          (_, result) => {
            console.log(result);
            const places = [];
            for (const dp of result.rows._array) {
              places.push(new Place(dp.title, dp.imageUri, { address: dp.address, lat: dp.lat, lng: dp.lng }, dp.id))
            }
            resolve(places);
          }, // success
          (_, error) => {
            reject(error);
          } // err
        );
      });
    }
  );
  return promise;
};

export const fetchPlaceDetails = (id) => {
  const promise = new Promise((resolve, reject) => {
      database.transaction((tx) => {
        tx.executeSql(`SELECT * FROM places WHERE id=?`,
          [id],
          (_, result) => {
            console.log(result);
            const places = [];
            for (const dp of result.rows._array) {
              places.push(new Place(dp.title, dp.imageUri, { address: dp.address, lat: dp.lat, lng: dp.lng }, dp.id))
            }
            if (places.length === 0)
              reject(new Error('No place found for given id ' + id));
            else
              resolve(places[0]);
          }, // success
          (_, error) => {
            reject(error);
          } // err
        );
      });
    }
  );
  return promise;
};
