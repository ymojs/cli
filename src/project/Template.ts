import Project from './Project';

/**
 * 模板信息
 */
class Template {
  // 工程
  private project: Project;

  constructor(project: Project) {
    this.project = project;
  }
}

export default Template;