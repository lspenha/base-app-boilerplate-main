function addItemToLocalStorage(itemName: string, value: unknown) {
  localStorage.setItem(
    itemName,
    typeof value !== 'string' ? JSON.stringify(value) : (value as string),
  );
}

function clearLocalStorage() {
  localStorage.clear();
}

function getStorageItem(itemName: string) {
  return localStorage.getItem(itemName);
}

function getParsedStorageItem<T = unknown>(storageItem: string): T | null {
  const item = getStorageItem(storageItem);

  return item ? (JSON.parse(item) as T) : null;
}

const WallEPrefixEnvSufix =
  process.env.NODE_ENV === 'development' ? '-dev' : '';

// TODO: CHANGE NAME TO THE PRODUCT
const wallEStoragePrefix = `@WallE${WallEPrefixEnvSufix}`;

const wallEToken = `${wallEStoragePrefix}:Token`;

export {
  addItemToLocalStorage,
  clearLocalStorage,
  getStorageItem,
  getParsedStorageItem,
  wallEStoragePrefix,
  wallEToken,
};
