'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')
Route.get("/Logout","UserController.logout")
Route.resource("Home","UserController").addCollection("login", ['POST'])
Route.resource("Product","ProductController").addCollection("compare",['GET','POST'])
Route.resource("Shop","ShopController")
Route.resource("Cart","CartController")
