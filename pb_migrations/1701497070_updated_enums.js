/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v5xuwcmjdzea43k")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ltwrjojc",
    "name": "field",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "1amaksurh70iajp",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v5xuwcmjdzea43k")

  // remove
  collection.schema.removeField("ltwrjojc")

  return dao.saveCollection(collection)
})
