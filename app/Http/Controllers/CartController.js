'use strict'
const order=use("App/Model/Order")
class CartController {

  * index(request, response) {
    if (request.session.get("user")) {
      yield response.sendView("Cart",{})
    } else {
      response.redirect("Home")
    }
     
  }

  * create(request, response) {
    //
    var inputs=request.post();
    order.create(inputs);
  }

  * store(request, response) {
    //
    console.log(request.post)
  }

  * show(request, response) {
    //
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    //
  }

}

module.exports = CartController
