'use strict'

const Lucid = use('Lucid')

class Payment extends Lucid {

  static get connection () {
    return 'mysql'
  }
  client(){
  	return this.belongTo("App/Model/Client","id","cid");
  }
}

module.exports = Payment
