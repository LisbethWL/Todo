// el = element

const app = new Vue({
    el: '#app',
    data: {
        title: 'Hello Lisbeth\'s coding adventure',
        newTodo: '', // tom string, til at holde dét brugeren skriver
        todos: [] // array til alle posterne
    },
    methods: {
        addTodo() {
            //console.log(this.newTodo);
            this.todos.push({
                title: this.newTodo,
                done: false
            });
            this.newTodo = ''; // Tømmer label-box efter add er trykket
        },
        removeTodo(todo) {
            const todoIndex = this.todos.indexOf(todo);
            this.todos.splice(todoIndex, 1);
        },
        allDone() {
            this.todos.forEach(todo => {
                todo.done = true;                
            });
        }
    }

});