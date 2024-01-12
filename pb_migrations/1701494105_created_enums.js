/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "v5xuwcmjdzea43k",
    "created": "2023-12-02 05:15:05.499Z",
    "updated": "2023-12-02 05:15:05.499Z",
    "name": "enums",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ce9oz9f4",
        "name": "field",
        "type": "json",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("v5xuwcmjdzea43k");

  return dao.deleteCollection(collection);
})
