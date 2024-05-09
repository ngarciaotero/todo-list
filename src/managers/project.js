const project = (name, image, todoList) => ({
  name,
  image,
  todoList,

  updateName(newName) {
    this.name = newName;
  },

  updateImage(newImage) {
    this.image = newImage;
  },
});

export default project;