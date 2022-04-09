'use strict'

const Schema = use('Schema')

class PaymentsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('payments', (table) => {
      table.increments()
      table.timestamps()
      table.integer("cid").unsigned()
      table.integer("amount")
    })
  }

  down () {
    this.drop('payments')
  }

}

module.exports = PaymentsTableSchema
