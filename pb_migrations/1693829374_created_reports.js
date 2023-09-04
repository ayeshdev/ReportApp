/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "29v5t4m61i7hq9n",
    "created": "2023-09-04 12:09:34.921Z",
    "updated": "2023-09-04 12:09:34.921Z",
    "name": "reports",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fqp5btlz",
        "name": "maths",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 3
        }
      },
      {
        "system": false,
        "id": "fqusjdek",
        "name": "science",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 3
        }
      },
      {
        "system": false,
        "id": "xla34jsx",
        "name": "english",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 3
        }
      },
      {
        "system": false,
        "id": "jgdnnvjd",
        "name": "student_id",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
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
  const collection = dao.findCollectionByNameOrId("29v5t4m61i7hq9n");

  return dao.deleteCollection(collection);
})
