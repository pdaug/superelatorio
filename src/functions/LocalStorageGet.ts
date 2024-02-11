import type { LocalStorageKeys } from "../types/LocalStorageKeys";

const LocalStorageGet = function (key: LocalStorageKeys): string {
    const data = localStorage.getItem(key);
    const dataTransformed = data ? data : "";
    return dataTransformed;
};

export default LocalStorageGet;
