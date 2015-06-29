var Counter = function(){
  this.count = 0;
}

Counter.prototype.increment = function(){
  this.count++;
}

Counter.prototype.decrement = function(){
  this.count--;
}

Counter.prototype.print = function(){
  console.log('count:', this.count);    
}

var counter = new Counter();
counter.print();      // Outputs: 0
counter.increment();
counter.increment();
counter.print();      // Outputs: 2
counter.decrement();
counter.decrement();
counter.decrement();
counter.print();      // Outputs: -1
