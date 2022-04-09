'use strict'

const Schema = use('Schema')

class ShopsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('shops', (table) => {
      table.increments()
      table.timestamps()
      table.string("Name",50).unique()
      table.binary("Image")
      table.integer("uid").unsigned()
      table.foreign("uid").references("id").on("users")
      table.softDeletes()
    })
  }

  down () {
    this.drop('shops')
  }

}

module.exports = ShopsTableSchema
