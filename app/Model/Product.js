'use strict'

const Lucid = use('Lucid')

class Product extends Lucid {

  static get connection () {
    return 'mysql'
  }
  cat(){
    return this.belongsTo("App/Model/Cat","id","cid");
  }
  specs(){
    return this.hasMany("App/Model/Spec","pid","id");
  }
}

module.exports = Product
