export const get = (key: string) => window.localStorage.getItem(key) ?? '[]';

export const getObject = <T>(key: string): T => JSON.parse(get(key));

export const set = <T> (key: string, value: T) => window.localStorage.setItem(key, JSON.stringify(value));
