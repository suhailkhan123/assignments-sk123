class Todo {
  constructor () {
    this.todoList = [];
  }
  add(todo) {
    this.todoList.push(todo);
  }
  remove(indexOfTodo) {
    this.todoList.splice(indexOfTodo, 1);
  }
  update(index, updatedTodo) {
    this.todoList(index, 1, updatedTodo);
  }
  getAll() {
    return this.todoList;
  }
  get(indexOfTodo) {
    return this.todoList[indexOfTodo];
  }
  clear() {
    this.todoList.splice(0, this.todoList.length)
  }
}

let todoList = new Todo();
todoList.add('Task 1');
		todoList.add('Task 2');
		todoList.add('Task 3');
console.log(todoList.getAll());