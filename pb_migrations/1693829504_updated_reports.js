/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("29v5t4m61i7hq9n")

  collection.indexes = [
    "CREATE INDEX `idx_dpxhYK8` ON `reports` (`student_id`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("29v5t4m61i7hq9n")

  collection.indexes = []

  return dao.saveCollection(collection)
})
