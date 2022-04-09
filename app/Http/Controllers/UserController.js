'use strict'
const User=use("App/Model/User"),Client=use("App/Model/Client");
class UserController {

  * index(request, response) {
    //
    yield response.sendView("welcome")
  }

  * create(request, response) {
    //

  }

  * store(request, response) {
    //
    var inputs=yield request.post();
    if (inputs.type=="Client") {
      var client={
        Name:inputs.Name,
        Password:inputs.Password,
        Email:inputs.Email
      };
      yield Client.create(client)
    }else{
      var adms={
        Name:inputs.Name,
        Password:inputs.Password,
        Email:inputs.Email,
        type:inputs.type
      };
      yield User.create(adms);
    }
    response.redirect("back");
  }

  * show(request, response) {
    //
    var user=yield request.session.get("user")
    var payments=yield(yield Client.find(user.id)).payments(),orders=yield(yield Client.find(user.id)).orders()
     user={
      Name:user.Name,
      id:user.id,
      type:user.type?user.type:"Client",
      payments:payments,
      orders:[]
      }
    for (var order of orders) {
      user.orders.push({
        id:order.id,
        created_by:user.Name,
        products:yield(yield use("App/Model/Order").find(order.id)).products()
      })
    }
    yield response.sendView("user",{user:user})
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

  * login(request, response) {
    //
    var inputs=yield request.post();
    var obj;
    if (inputs.type=="Client") {
      obj=yield Client.findBy("Name",inputs.Name);
    } else {
      obj=yield User.findBy("Name",inputs.Name);
    }
    if (obj!={}) {
      yield request.session.put("user",obj);
      response.redirect("/Shop")
    } else {
      response.redirect("/Home")
    }
  }
  *logout(request,response){
    var user =yield request.session.get("user")
    if (user) {
        yield  request.session.forget("user")
    }
    response.redirect("/Home")
  }

}

module.exports = UserController
