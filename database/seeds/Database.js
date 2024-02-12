'use strict'

/*
|--------------------------------------------------------------------------
| Database Seeder
|--------------------------------------------------------------------------
| Database Seeder can be used to seed dummy data to your application
| database. Here you can make use of Factories to create records.
|
| make use of Ace to generate a new seed
|   ./ace make:seed [name]
|
*/

const Factory = use('Factory')

class DatabaseSeeder {

  * run () {
     var user=yield Factory.model('App/Model/User').create(1)
     var client=yield Factory.model('App/Model/Client').create(1)
     var shop=yield Factory.model('App/Model/Shop').make(1)
     var cats=yield Factory.model("App/Model/Cat").create(3)
     cats.each(function *(cat){
     	var product=Factory.model("App/Model/Product").make(1)	
      product.cid=cat.id
      yield product.save()
      cat.sid=shop.id
      yield cat.save()

       //yield cat.products().save(product)
      // console.log(yield cat.products())
     })
     console.log(user.attributes,shop)
     //shop.uid=user.id
     //yield shop.save()
  }
  

}

module.exports = DatabaseSeeder
