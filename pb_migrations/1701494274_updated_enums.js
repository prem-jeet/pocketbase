/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v5xuwcmjdzea43k")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ce9oz9f4",
    "name": "enum",
    "type": "json",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v5xuwcmjdzea43k")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ce9oz9f4",
    "name": "field",
    "type": "json",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
