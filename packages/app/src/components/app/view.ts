import { TestFuseMonorepoAppBase } from '@test-fuse-monorepo/core';
import { BootstrapOptions, setLanguage, setLocales } from '@uxland/uxl-prism';
import { css, CSSResult, customElement, html, property, TemplateResult, unsafeCSS } from 'lit-element';
import { locales } from '../../../locales';
//@ts-ignore
import styles from './styles.scss';
import { template } from './template';

@customElement('test-fuse-monorepo-app')
export class TestFuseMonorepoApp extends TestFuseMonorepoAppBase {
  options: BootstrapOptions;
  constructor() {
    super();
    this.initializeReducers();
  }

  protected async initializeReducers() {
    setLocales(locales);
    setLanguage('ca');
  }

  static get styles(): CSSResult {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  render(): TemplateResult {
    return html`${template(this)} `;
  }

  get currentView() {
    return this.view;
  }

  @property()
  view: string;
}
