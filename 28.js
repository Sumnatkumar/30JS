class EventEmitter {

    constructor(){
        this.events = {};
    }

    subscribe(eventName, callback) {

        if(!this.events[eventName]) {
            this.events[eventName] = []
        }
        this.events[eventName].push(callback)

        return {
            unsubscribe: () =>{
                this.events[eventName] = this.events[eventName].filter(cb => cb !== callback)
                if(this.events[eventName].length === 0) {
                    delete this.events[eventName];
                }
            }
        }
    }

    emit(eventName, args = []){
        if(!this.events[eventName]) {
            return []
        }
        return this.events[eventName].map(callback => callback(...args))
    }
}

const emitter = new EventEmitter();

const sub = emitter.subscribe('event1', (a, b) => a + b);
const sub2 = emitter.subscribe('event1', (a, b) => a * b);

console.log(emitter.emit('event1', [2, 3])); 
// Output: [5, 6]

sub.unsubscribe();
console.log(emitter.emit('event1', [2, 3])); 
// Output: [6]
