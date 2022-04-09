'use strict'

const Schema = use('Schema')

class SpecificationsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('specifications', (table) => {
      table.increments()
      table.timestamps()
      table.string("Name").nullable(false)
      table.string("Value").nullable(false)
      table.integer("pid").unsigned()
      table.foreign("pid").references("id").on("products")
    })
  }

  down () {
    this.drop('specifications')
  }

}

module.exports = SpecificationsTableSchema
