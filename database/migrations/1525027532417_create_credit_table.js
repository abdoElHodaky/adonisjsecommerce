'use strict'

const Schema = use('Schema')

class CreditsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('credits', (table) => {
      table.increments()
      table.timestamps()
      table.text("creditNo")
      table.date("expires")
      table.integer("cvv")
      table.integer("cid").unsigned()
      table.foreign("cid").references("id").on("clients")
      table.integer("balance").unsigned()
    })
  }

  down () {
    this.drop('credits')
  }

}

module.exports = CreditsTableSchema
