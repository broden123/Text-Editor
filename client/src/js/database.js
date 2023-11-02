import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// initialize and update database
export const putDb = async (content) => {
  // connect to jate db
  const databaseConnect = await openDB("jate", 1);
  // create a transaction with database and privledges specified
  const trans = databaseConnect.transaction("jate", "readwrite");
  // object store
  const store = trans.objectStore("jate");
  // PUT method to store data in database
  const putInDB = store.put({ id: 1, value: content });
  // confirm request
  const confirm = await putInDB;
  console.log("Stored in Database!", confirm);
  // error log
  if (!databaseConnect) {
    console.error("putDb not implemented");
  }
};

// logic for a method that gets all the content from the database
export const getDb = async () => {
  // connect to jate db
  const databaseConnect = await openDB("jate", 1);
  // create a transaction with database and privledges specified
  const trans = databaseConnect.transaction("jate", "readonly");
  // object store
  const store = trans.objectStore("jate");
  // GET method to store data in database
  const readDB = store.getAll();
  // confirm request
  const confirm = await readDB;
  console.log("Data Retrieved!", confirm);
  // error log
  if (!databaseConnect) {
    console.error("getDb not implemented");
  }
};

initdb();
