class Emitter {
  constructor() {
    this.events = {};
  }
  //type "Message"
  on(type, listener) {
    // evets.message = []; array of functions
    if (this.events[type]) {
      this.events[type].push(listener);
    } else {
      this.events[type] = [];
      this.events[type].push(listener);
    }
  }
  emit(type, name) {
    //should check if it exists
    let listenerArray = this.events[type];
    listenerArray.forEach(listener => {
      listener(name);
    });
  }
}

var emitter = new Emitter();
emitter.on("greeting", n => {
  console.log("hello world!" + " " + n);
});

emitter.emit("greeting", "class");
