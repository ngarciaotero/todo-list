const projectList = () => ({
  projectList: [],

  addProject(project) {
    this.projectList.push(project);
  },

  removeProject(project) {
    const index = this.projectList.indexOf(project);
    this.projectList.splice(index, 1);
  },
});

export default projectList;
