import type { CartItem } from "../model/CartModel";

const databaseName = "MyCartDB";

export async function openCartDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(databaseName, 1);

    request.onupgradeneeded = function (event) {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains("Cart")) {
        db.createObjectStore("Cart", { keyPath: "productId" });
      }
    };

    request.onsuccess = function (event) {
      const db = (event.target as IDBOpenDBRequest).result;
      console.log("Available stores:", db.objectStoreNames);
      resolve(db);
    };

    request.onerror = () => reject("Failed to open IndexedDB");
  });
}

export async function loadCartFromIndexedDB(): Promise<CartItem[]> {
  const db = await openCartDB();
  const tx = db.transaction("Cart", "readonly");
  const store = tx.objectStore("Cart");

  const items: CartItem[] = [];

  return new Promise((resolve, reject) => {
    const cursorRequest = store.openCursor();

    cursorRequest.onsuccess = function (event) {
      const cursor = (event.target as IDBRequest<IDBCursorWithValue>).result;
      if (cursor) {
        items.push(cursor.value);
        cursor.continue();
      } else {
        db.close();
        resolve(items);
      }
    };

    cursorRequest.onerror = () => reject("Failed to read cart from IndexedDB");
  });
}

export async function saveCartToIndexedDB(items: CartItem[]) {
  const db = await openCartDB();
  const tx = db.transaction("Cart", "readwrite");
  const store = tx.objectStore("Cart");

  store.clear().onsuccess = () => {
    items.forEach(item => store.put(item));
  };

  tx.oncomplete = () => db.close();
}