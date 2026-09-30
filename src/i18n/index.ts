import { es } from "./es";
import { en } from "./en";
export type Lang = "es" | "en";
export const dicts = { es, en } as const;
export const getDict = (lang: Lang) => dicts[lang];
export const isLang = (v: unknown): v is Lang => v === "es" || v === "en";
