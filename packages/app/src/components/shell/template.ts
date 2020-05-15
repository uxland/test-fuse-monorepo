import { html } from 'lit-element';
import '@uxland/uxl-content-switcher';
import { TestFuseMonorepoShell } from './view';

export const template = (props: TestFuseMonorepoShell) =>
  html` <div id="header-region"></div>
    <uxl-content-switcher id="main-region"></uxl-content-switcher>`;
