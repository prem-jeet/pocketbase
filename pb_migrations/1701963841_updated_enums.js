/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v5xuwcmjdzea43k")

  // remove
  collection.schema.removeField("ltwrjojc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yklg4bo7",
    "name": "label",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ce9oz9f4",
    "name": "options",
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

  // remove
  collection.schema.removeField("yklg4bo7")

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
})
