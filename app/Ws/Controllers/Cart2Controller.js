'use strict'
const order=use("App/Model/Order"),Oproduct=use("App/Model/OrderedProduct"),
product=use("App/Model/Product"),
Payment =use("App/Model/Payment"),Credit=use("App/Model/Credit")
class Cart2Controller {

  constructor (socket, request) {
    this.socket = socket
    this.request = request
  }
  *onChange(d){
      this.socket.toMe().emit("changed",d)
  }
  *onBuy(bcart,inputs){
    var user=yield this.request.session.get("user")
    console.log(inputs)
  	var createdOrder=yield order.create({id:null,cid:user.id})
  	var obj={}
  	inputs.forEach(function (input){
  		obj[input.name]=input.value;
  	})
    var amount=0;
    for(var i in bcart){
      var p=yield(product.findBy("Name",i))
      yield createdOrder.products().create({
        pid:p.id,
        Quantity:bcart[i].q,
        oid:createdOrder.id
      });
      amount+=parseInt(p.Price)*parseInt(bcart[i].q)
    }
    var credit=yield Credit.findBy("creditNo",obj.CN)
    if(credit==null) {
      credit=yield Credit.create({
        creditNo:obj.CN,
        cvv:obj.CVV,
        balance:500,
        cid:user.id
      })
    }
    credit.balance-=parseInt(amount);
    yield credit.save();
    yield Payment.create({
      cid:user.id,
      amount:amount
    })
    this.socket.toMe().emit("ok","your order will be sent");
  }
}

module.exports = Cart2Controller
