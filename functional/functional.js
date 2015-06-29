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

var counter = Counter();
counter.print();      // Outputs: 0
counter.increment();
counter.increment();
counter.print();      // Outputs: 2
counter.decrement();
counter.decrement();
counter.decrement();
counter.print();      // Outputs: -1
