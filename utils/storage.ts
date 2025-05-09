import { MMKV } from "react-native-mmkv";

export const storage = new MMKV();

// Functions to interact with storage
export const setItem = (key: string, value: string) => {
  storage.set(key, value);
};

export const getItem = (key: string) => {
  return storage.getString(key);
};

export const removeItem = (key: string) => {
  storage.delete(key);
};
