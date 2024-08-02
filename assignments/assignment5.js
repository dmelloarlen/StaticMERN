// Q1.
const Add = (a) => {
    return (b) => {
        return a + b; //Adds 'a' and 'b'
    }
}

const a_add=Add(2) // calling and assigning the function
console.log(a_add(3))

// Q2.
const Clo1 = () => {
    let c = 0 // Initialization of counter 
    return () => {
        c += 1
        return c
    }
}

const a_clo1 =   Clo1() // calling and assigning the function
console.log(a_clo1())
console.log(a_clo1())
console.log(a_clo1())

// Q3.
function Rect(w, h) {
    width = w // Set the widths
    height = h // Set the height
}
Rect.prototype.area = function() {
    return width * height // Calculating area
}

const a_rect = new Rect(2, 3)
console.log(a_rect.area())

// Q4
function Cir(r) {
    radius = r // Set the radius
    pi = 3.14 // Set the value of pi
}

Cir.prototype.area = function () {
    return pi * radius ** 2 // Calculating area of circle
}
Cir.prototype.perimeter = function () {
    return 2 * pi * radius // calculating the perimeter of circle
}

const a_cir = new Cir(4)
console.log(a_cir.area())
console.log(a_cir.perimeter())

// Q5.
const Task = () => {
    let c = 0 // Initialization of a counter
    return {
        inc: (i = 1) => {
            c += i 
            return c 
        },
        dec: (i = 1) => {
            c -= i 
            return c 
        },
        reset: () => {
            c = 0 
            return c 
        }
    }
}

const a_Task = Task() // Creating an object
// calling prototyps 
console.log(a_Task.inc())
console.log(a_Task.dec())
console.log(a_Task.reset())
