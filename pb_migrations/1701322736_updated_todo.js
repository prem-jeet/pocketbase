/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6tc5tqbj4qsmggj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4lu9vcvb",
    "name": "description",
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
  const collection = dao.findCollectionByNameOrId("6tc5tqbj4qsmggj")

  // remove
  collection.schema.removeField("4lu9vcvb")

  return dao.saveCollection(collection)
})
