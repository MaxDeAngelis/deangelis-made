/* eslint-disable no-console */
import path from 'path';
import { spawn } from 'node:child_process';
import chalk from 'chalk';

const formatOutput = (
  color: Function,
  prefix: string,
  msg: string,
  logger: Function,
) => {
  const output = msg
    .toString()
    .trim()
    .replace(/(\r\n|\r|\n)/g, `\n[${color(prefix)}]: `);
  logger(`${color(prefix)}: ${output}`);
};

const process = (
  script: string,
  color: Function,
  resolve: (value: string | void | PromiseLike<string | void>) => void,
  reject: (value: string | void | PromiseLike<string | void>) => void,
) => {
  const prefix = script.split('/')[0] as string;
  const childProcess = spawn('node', [script], {
    cwd: path.join(__dirname, '../'),
  });
  childProcess.stdout.on('data', (data) =>
    formatOutput(color, prefix, data, console.log),
  );
  childProcess.stderr.on('data', (data) =>
    formatOutput(color, prefix, data, console.error),
  );
  childProcess.on('close', resolve);
  childProcess.on('error', reject);
};

const tasks: Promise<string | void>[] = [];
tasks.push(
  new Promise((resolve, reject) => {
    process('backend/dist/server.js', chalk.green, resolve, reject);
  }),
  new Promise((resolve, reject) => {
    process('image-server/dist/server.js', chalk.blue, resolve, reject);
  }),
);

Promise.all(tasks).then(() => {
  console.log('all done');
});
