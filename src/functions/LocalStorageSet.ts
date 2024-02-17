import type { LocalStorageKeys } from "../types/LocalStorageKeys.ts";

const LocalStorageSet = function (key: LocalStorageKeys, value: string | object): boolean {
    try {
        const valueTransformed = typeof value === "string" ? value : JSON.stringify(value);
        localStorage.setItem(key, valueTransformed);
        return true;
    } catch (error) {
        console.error("[src/functions/LocalStorageSet.ts]", error);
        return false;
    }
};

export default LocalStorageSet;
