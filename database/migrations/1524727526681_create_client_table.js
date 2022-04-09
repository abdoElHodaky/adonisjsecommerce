'use strict'

const Schema = use('Schema')

class ClientsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('clients', (table) => {
      table.increments()
      table.timestamps()
      table.string("Name",50).unique()
      table.string("Password").nullable(false)
      table.string("Email",50).unique()
      table.softDeletes()
    })
  }

  down () {
    this.drop('clients')
  }

}

module.exports = ClientsTableSchema
