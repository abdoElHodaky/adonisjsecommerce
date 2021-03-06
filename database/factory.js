'use strict'

/*
|--------------------------------------------------------------------------
| Model and Database Factory
|--------------------------------------------------------------------------
|
| Factories let you define blueprints for your database models or tables.
| These blueprints can be used with seeds to create fake entries. Also
| factories are helpful when writing tests.
|
*/

const Factory = use('Factory')

/*
|--------------------------------------------------------------------------
| User Model Blueprint
|--------------------------------------------------------------------------
| Below is an example of blueprint for User Model. You can make use of
| this blueprint inside your seeds to generate dummy data.
|
*/
Factory.blueprint('App/Model/User', (fake) => {
  return {
    name: fake.name(),
    email: fake.email(),
    password: fake.password(),
    type:"Owner"
  }
})
Factory.blueprint('App/Model/Client', (fake) => {
  return {
    name: fake.name(),
    email: fake.email(),
    password: fake.password()
  }
})
Factory.blueprint('App/Model/Shop', (fake) => {
  return {
    name: fake.name(),
    Image: fake.avatar()
  }
})
Factory.blueprint('App/Model/Cat', (fake) => {
  return {
    name: fake.name(),
    desc:fake.string()
  }
})
Factory.blueprint('App/Model/Product', (fake) => {
  return {
    name: fake.name(),
    quantity:50,
    Image:fake.avatar(),
    price:20,
    cid:2
  }
})