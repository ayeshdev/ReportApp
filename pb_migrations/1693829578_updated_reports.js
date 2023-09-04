/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("29v5t4m61i7hq9n")

  collection.indexes = []

  // remove
  collection.schema.removeField("jgdnnvjd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "16qr7yqk",
    "name": "student_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "0watwkjvs3ez06o",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("29v5t4m61i7hq9n")

  collection.indexes = [
    "CREATE INDEX `idx_dpxhYK8` ON `reports` (`student_id`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("16qr7yqk")

  return dao.saveCollection(collection)
})
