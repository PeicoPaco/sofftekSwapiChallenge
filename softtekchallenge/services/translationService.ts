import { Dictionary } from "../dictionary/Dictionary";

export const translateKeys = (data: any, resource: string, id: number) => {
  const dictionary = Dictionary[resource];

  if (Array.isArray(data)) {
    return data.map((item) => translateKeys(item, resource, id));
  }

  if (typeof data === "object" && data !== null) {
    const translatedData: any = {};
    Object.keys(data).forEach((key) => {
      const newKey = dictionary[key] || key;
      translatedData[newKey] = translateKeys(data[key], resource, id);
    });
    return translatedData;
  }

  return data;
};
