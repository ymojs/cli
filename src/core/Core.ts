// import EventEmitter from 'events';

class Core {
  // 指令
  private command: string;
 
  // 配置参数
  private options: { [key: string]: any };

  // // 事件队列
  // private event: EventEmitter

  // 任务队列
  private tasks: Array<() => Promise<any>>;

  constructor(options: { [key: string]: any }) {
    this.command = options.name;

    this.options = options;
    // this.event = new EventEmitter();
    this.tasks = [];
  }

  addTask(task: () => Promise<any>) {
    task.bind(this);
    this.tasks.push(task);
  }

  addTasks(...tasks: Array<() => Promise<any>>) {
    tasks.forEach(task => {
      task.bind(this);
      this.tasks.push(task);
    })
  }

  async runTasks() {
    this.tasks.forEach(async task => {
      await task();
    })
  }

  async runTask(task: Function) {
    return task.call(this);
  }

  stopTask() {
    process.exit(1);
  }
}

export default Core;