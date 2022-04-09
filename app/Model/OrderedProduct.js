'use strict'

const Lucid = use('Lucid')

class OrderedProduct extends Lucid {

  static get connection () {
    return 'mysql'
  }
  product(){
  	return this.belongsTo("App/Model/Product",'id','pid');
  }
}

module.exports = OrderedProduct
