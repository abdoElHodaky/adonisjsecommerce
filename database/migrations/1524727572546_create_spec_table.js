'use strict'

const Schema = use('Schema')

class SpecsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('specs', (table) => {
      table.increments()
      table.timestamps()
      table.string("Name",50).nullable(false)
      table.integer("Value").nullable(false)
      table.integer("pid").unsigned()
      table.foreign("pid").references("id").on("products")
      table.softDeletes()
    })
  }

  down () {
    this.drop('specs')
  }

}

module.exports = SpecsTableSchema
