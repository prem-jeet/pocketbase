/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v5xuwcmjdzea43k")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_Nnv2RhC` ON `enums` (`name`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v5xuwcmjdzea43k")

  collection.indexes = []

  return dao.saveCollection(collection)
})
