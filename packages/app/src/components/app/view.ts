import { TestFuseAppBase } from '@test-fuse-monorepo/core';
import { regionAdapterRegistry, selectableAdapterFactory as factory } from '@uxland/uxl-regions';
import { css, CSSResult, customElement, html, TemplateResult, unsafeCSS } from 'lit-element';
import { locales } from '../../locales';
//@ts-ignore
import styles from './styles.scss';
import { template } from './template';

// @ts-ignore
@customElement('test-fuse-app')
export class TestFuseApp extends TestFuseAppBase {
  currentView: string;

  constructor() {
    super();
    super.initializeReducers();
    // @ts-ignore
    this.options = { ...this.options, locales };
  }

  firstUpdated(_changedProps) {
    super.firstUpdated(_changedProps);
  }

  static get styles(): CSSResult {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  render(): TemplateResult {
    return html`${template(this)} `;
  }
}

regionAdapterRegistry.registerAdapterFactory('uxl-content-switcher', factory);
