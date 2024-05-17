const project = (name, imagePath, todoList) => ({
  name,
  imagePath,
  todoList,

  updateName(newName) {
    this.name = newName;
  },

  updateImage(newImage) {
    this.imagePath = newImage;
  },

  getName() {
    return this.name;
  },

  getImagePath() {
    return this.imagePath;
  },

  getTodoList() {
    return this.todoList;
  },
});

export default project;
