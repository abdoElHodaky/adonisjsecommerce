'use strict'

const Lucid = use('Lucid')

class Cat extends Lucid {

  static get connection () {
    return 'mysql'
  }
  shop(){
  	return this.belongsTo("App/Model/Shop",'id','sid');
  }
  products(){
    return this.hasMany("App/Model/Product","cid","cid")
  }
}

module.exports = Cat
