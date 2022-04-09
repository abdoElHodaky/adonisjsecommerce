'use strict'

const Schema = use('Schema')

class OrdersTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('orders', (table) => {
      table.increments()
      table.timestamps()
      table.integer("cid").unsigned()
      table.foreign("cid").references("id").on("clients")
    })
  }

  down () {
    this.drop('orders')
  }

}

module.exports = OrdersTableSchema
