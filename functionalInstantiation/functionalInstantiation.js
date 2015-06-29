var Counter = function(){
  var obj = {};

  obj.count = 0;

  obj.increment = function(){
    this.count++;
  }

  obj.decrement = function(){
    this.count--;
  }

  obj.print = function(){
    console.log("count:", this.count);
  }

  return obj;
}

var newCounter = Counter();
newCounter.print();      // Outputs: 0
newCounter.increment();
newCounter.increment();
newCounter.print();      // Outputs: 2
newCounter.decrement();
newCounter.decrement();
newCounter.decrement();
newCounter.print();      // Outputs: -1
