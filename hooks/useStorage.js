const useStorage = (key, value = null) => {
  const currentValue = JSON.parse(localStorage.getItem(key));
  if (value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  return { storage: currentValue };
};
export default useStorage;
