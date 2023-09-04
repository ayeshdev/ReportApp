/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("29v5t4m61i7hq9n")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fqp5btlz",
    "name": "maths",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 100
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fqusjdek",
    "name": "science",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 100
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xla34jsx",
    "name": "english",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 100
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("29v5t4m61i7hq9n")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
