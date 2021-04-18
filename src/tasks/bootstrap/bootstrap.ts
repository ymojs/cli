import cliService from '@ymo/cli-service';

async function bootstrap() {
  console.log('bootstrap --- task');
  await cliService.createPm2();
}

export default bootstrap;