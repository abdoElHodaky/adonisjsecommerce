'use strict'

const Lucid = use('Lucid')

class Order extends Lucid {

  static get connection () {
    return 'mysql'
  }

  products(){
  	return this.hasMany("App/Model/OrderedProduct",'oid','id');
  }
}

module.exports = Order
