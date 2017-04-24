class Greeter {
    greeting: string;
    constructor (message: string) {
        this.greeting = message;
    }

    greet() {
        return "Olá " + this.greeting;
    }

    showGreeting() {
        return "Greeting " + this.greeting;
    }
}

var greeter = new Greeter("world");

var button = document.createElement('button')
button.innerText = "Say Hello"
button.onclick = function() {
    alert(greeter.greet())
}
