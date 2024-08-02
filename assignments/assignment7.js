const fs = require("fs");

// Q1.
fs.writeFile('notes.txt', 'Hello World', 'utf8', (err) => {
    if (err) {
      console.error(err);
    }
});

fs.readFile('notes.txt','utf8', (err,content) => {
    if (err) {
      console.error(err);
    }
    console.log(content); // Log content read from notes.txt
});

fs.appendFile('notes.txt'," How are you?",'utf8', (err) => {
    if (err) {
      console.error(err);
    }
});

fs.unlink('notes.txt',(err) => {
    if (err) {
      console.error(err);
    }
});

// Q2. Timing synchronous and asynchronous file operations
const lt="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem excepturi deserunt perspiciatis vel ex? Optio, praesentium nulla accusantium sit cumque minus sapiente officiis aspernatur dolores placeat! Recusandae dolorum cumque harum laborum dolores atque, laboriosam, maiores quo architecto, corrupti illum amet fugit optio magni! Earum debitis accusamus corporis nesciunt libero atque totam quo quos magnam maxime assumenda veritatis vel autem quis, error asperiores facere ratione ducimus ipsum qui reiciendis eos excepturi quibusdam in? Quod officia placeat incidunt expedita nulla commodi veniam harum est. Sapiente, placeat? Quae ea, libero esse magni, impedit, corrupti quibusdam aspernatur consequatur voluptas repellendus placeat facilis officia consequuntur."

console.time(); // Start timer
fs.writeFileSync("largeFile.txt", lt, "utf8"); // Synchronous write operation
console.timeEnd(); // End timer

console.time(); // Start timer
fs.readFileSync("largeFile.txt", "utf8"); // Synchronous read operation
console.timeEnd(); // End timer

console.time(); // Start timer 
fs.writeFile('notes.txt', 'Hello World', 'utf8', (err) => {
    if (err) {
      console.error(err);
    }
});
console.timeEnd(); // End timer

console.time(); // Start timer
fs.readFile('notes.txt','utf8', (err,content) => {
    if (err) {
      console.error(err);
    }
    console.log(content); // Log content read from notes.txt
});
console.timeEnd(); // End timer
console.log("Here we can see that the time required for reading and writing is more in synchronous operation");

// Q3. Asynchronous task and callback
const doTask = (cbf) => {
    console.log("Task started");
    setTimeout(() => {
        console.log("Task completed");
        cbf(); // Execute callback after task completion
    }, 2000);
}

doTask(() => console.log("Callback executed"));

// Q4. Nested asynchronous tasks with callbacks
const fun1 = (cb1) => {
    setTimeout(() => {
        cb1(); // Execute callback after task 1 completion
        console.log("Task 1");
    }, 1000);
}

const fun2 = (cb1) => {
    setTimeout(() => {
        cb1(); // Execute callback after task 2 completion
        console.log("Task 2");
    }, 2000);
}

const fun3 = () => {
    setTimeout(() => {
        console.log("Task 3");
    }, 3000);
}

fun1(() => fun2(() => fun3())); // Nesting callbacks to ensure task sequence

// Q5. Promises chaining for asynchronous tasks
const fun11 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("Task 1")); // Resolve promise after task 1 completion
        }, 1000);
    })
}

const fun22 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("Task 2")); // Resolve promise after task 2 completion
        }, 2000);
    })   
}

const fun33 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("Task 3")); // Resolve promise after task 3 completion
        }, 3000);
    })
}

// function call

fun11()
.then((res) => {
    return fun22();
})
.then((res) => {
    return fun33();
})
.catch((err) => {
    console.log(err);
})
