'use strict'

const Schema = use('Schema')

class UsersTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('users', (table) => {
      table.increments()
      table.timestamps()
      table.string("Name",50).unique()
      table.string("Password").nullable(false)
      table.string("Email",50).unique()
      table.string("type").nullable(false)
      table.softDeletes()
    })
  }

  down () {
    this.drop('users')
  }

}

module.exports = UsersTableSchema
