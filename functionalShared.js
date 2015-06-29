var Counter = function(){
  var obj = {};

  obj.count = 0;

  obj.increment = objMethods.increment;
  obj.decrement = objMethods.decrement;
  obj.print = objMethods.print;

  return obj;
}

var objMethods = {};

objMethods.increment = function(){
  this.count++;
}

objMethods.decrement = function(){
  this.count--;    
}

objMethods.print = function(){
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
