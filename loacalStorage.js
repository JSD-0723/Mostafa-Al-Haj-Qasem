export function setItem(key, value) {
  const serializedValue = JSON.stringify(value);
  localStorage.setItem(key, serializedValue);
}

export function getItem(key) {
  const storedValue = localStorage.getItem(key);
  if (storedValue === null) {
    return null;
  }

  try {
    return JSON.parse(storedValue);
  } catch (error) {
    // If parsing fails, return the raw string value
    return storedValue;
  }
}

export function removeItem(key) {
  localStorage.removeItem(key);
}

export function clearStorage() {
  localStorage.clear();
}
