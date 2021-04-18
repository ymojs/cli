import Project from './Project';

/**
 * 工程生产器
 */
class Generator {
  /**
   * 工程
   */
  private project: Project;

  /**
   * package.json
   *
   * @private
   * @type {{
   *     [key: string]: any;
   *   }}
   * @memberof Generator
   */
  private packageInfo: {
    [key: string]: any;
  };

  /**
   * 文件列表
   *
   * @private
   * @type {{
   *     [key: string]: any;
   *   }}
   * @memberof Generator
   */
  private files: {
    [key: string]: any;
  }

  constructor(project: Project) {
    this.project = project;

    this.packageInfo = {};

    this.files = {};
  }
}

export default Generator;