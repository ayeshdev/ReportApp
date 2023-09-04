/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "0watwkjvs3ez06o",
    "created": "2023-09-04 12:06:47.699Z",
    "updated": "2023-09-04 12:06:47.699Z",
    "name": "students",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pbl4kvzm",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 4,
          "max": 50,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "snxryp0i",
        "name": "class",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 4,
          "max": 10,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0watwkjvs3ez06o");

  return dao.deleteCollection(collection);
})
