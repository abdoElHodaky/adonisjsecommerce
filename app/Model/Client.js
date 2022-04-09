'use strict'

const Lucid = use('Lucid')

class Client extends Lucid {

  static get connection () {
    return 'mysql'
  }
  orders(){
  	return this.hasMany("App/Model/Order","cid","id");
  }
  payments(){
  	return this.hasMany("App/Model/Payment","cid","id");
  }
  credits(){
    return this.hasMany("App/Model/Credit","cid","id");
  }
}

module.exports = Client
