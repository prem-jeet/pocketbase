/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v5xuwcmjdzea43k")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qza69peg",
    "name": "name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v5xuwcmjdzea43k")

  // remove
  collection.schema.removeField("qza69peg")

  return dao.saveCollection(collection)
})
