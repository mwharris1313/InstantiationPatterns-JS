var Counter = function(){
  var obj = Object.create(ObjMethods);
  obj.count = 0;

  return obj;
}

var ObjMethods = {};
ObjMethods.increment = function(){
  this.count++;
}

ObjMethods.decrement = function(){
  this.count--;
}

ObjMethods.print = function(){
  console.log('count:', this.count);
}

var counter = Counter();
counter.print();      // Outputs: 0
counter.increment();
counter.increment();
counter.print();      // Outputs: 2
counter.decrement();
counter.decrement();
counter.decrement();
counter.print();      // Outputs: -1
