const project = (name, todoList, progress) => ({
  name,
  image,
  todoList,
  progress,

  updateName(newName) {
    this.name = newName;
  },

  updateImage(newImage) {
    this.image = newImage;
  },
});

export default project;