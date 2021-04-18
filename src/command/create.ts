import Project from '../project/Project';
import bootstrap from '../tasks/bootstrap/bootstrap';

function create(options: object) {
  const project = new Project(options)
  project.addTasks(
    bootstrap
  )
  return project;
}

export default create;

