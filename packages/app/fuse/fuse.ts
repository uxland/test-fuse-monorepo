const { fusebox, pluginCSS, pluginSass } = require('fuse-box');
const { join, resolve } = require('path');
// import { runUpdateSimulation } from './simulate';

const workspaceRoot = join(__dirname, '../..');
console.log('Workspace Root:', workspaceRoot);

// set AUTOMOD to true to automatically update some files to trigger the watcher
// runUpdateSimulation(!!process.env.AUTOMOD);

const fuse = fusebox({
  compilerOptions: {
    tsConfig: '../tsconfig.json',
  },
  devServer: true,
  entry: '../index.ts',
  target: 'browser',
  watcher: {
    root: [workspaceRoot],
  },
  stylesheet: {
    ignoreAllExternal: true,
    include: ['tslib'],
    cache: false,
    autoImport: [{ file: '../../styles/test-fuse-monorepo.scss', capture: 'packages' }],
  },
  plugins: [pluginSass('components/*.scss', { asText: true, useDefault: true })],
  webIndex: { template: '../index.html' },
});

fuse.runDev();
