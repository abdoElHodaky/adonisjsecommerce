'use strict'

const Schema = use('Schema')

class ProductsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('products', (table) => {
      table.increments()
      table.timestamps()
      table.string("Name",50).unique()
      table.integer("Quantity").nullable(false)
      table.integer("Price")
      table.binary("Image")
      table.integer("cid").unsigned()
      table.foreign("cid").references("id").on("cats")
      table.softDeletes()
    })
  }

  down () {
    this.drop('products')
  }

}

module.exports = ProductsTableSchema
