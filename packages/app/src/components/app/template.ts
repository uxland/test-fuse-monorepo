import '@uxland/uxl-content-switcher';
import { html } from 'lit-element';
import '../shell/view';
import { TestFuseMonorepoApp } from './view';

export const template = (props: TestFuseMonorepoApp) =>
  html`
    <uxl-content-switcher id="content" attrForSelected="name" selected="${props.currentView}">
      <test-fuse-monorepo-shell name="shell"></test-fuse-monorepo-shell>
    </uxl-content-switcher>
  `;
