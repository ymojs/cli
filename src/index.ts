#!/usr/bin/env node
import { version, command, parse } from 'commander';
import create from './command/create';

const pkg = require('../package.json');
console.log(pkg.version);

console.log(11111);

version(`@ymo/cli ${pkg.version}`);

command('create <app-name>')
  .description('create a new project')
  .option('-t, --template <template>', 'Use specified template to create')
  .action((name, cmd) => {
    create({
      ...cmd,
      name
    }).runTasks();
  })

parse();