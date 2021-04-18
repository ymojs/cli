import Core from '../core/Core';
import Template from './Template';
import Generator from './Generator';

/**
 * 工程
 */
class Project extends Core {

  /**
   * 用于创建工程的模板信息
   *
   * @private
   * @type {Template}
   * @memberof Project
   */
  private template: Template;

  /**
   * 生成器
   *
   * @private
   * @type {Generator}
   * @memberof Project
   */
  private generator: Generator;

  constructor(options: { [key: string]: any }) {
    super(options);

    this.template = new Template(this);

    this.generator = new Generator(this);
  }
}

export default Project;