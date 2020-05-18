import '@uxland/uxl-content-switcher';
import { html } from 'lit-element';
import '../shell/view';
import { TestFuseApp } from './view';

export const template = (props: TestFuseApp) =>
  html`
    <uxl-content-switcher id="content" attrForSelected="name" selected="${props.currentView}">
      <test-fuse-shell name="shell"></test-fuse-shell>
    </uxl-content-switcher>
  `;
