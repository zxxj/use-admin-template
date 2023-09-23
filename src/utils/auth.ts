export const setLocalStore = (name: string, data: any) =>
  localStorage.setItem(name, data);

export const getLocalStore = (name: string) => localStorage.getItem(name);

export const removeLocalItem = (name: string) => localStorage.removeItem(name);
