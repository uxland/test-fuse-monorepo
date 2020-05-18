import { locale, PrismShellMixin, setLocales, setLanguage } from '@uxland/uxl-prism';
import { IRegion, region, RegionHost } from '@uxland/uxl-regions';

import { css, CSSResult, customElement, html, LitElement, property, TemplateResult, unsafeCSS } from 'lit-element';
//@ts-ignore
import styles from './styles.scss';
import { template } from './template';
import { regions } from '@test-fuse-monorepo/core';
import { locales } from '../../locales';

@customElement('test-fuse-shell')
export class TestFuseShell extends locale(PrismShellMixin(RegionHost(LitElement))) {
  constructor() {
    super();
    this.initializeReducers();
  }

  protected async initializeReducers() {
    setLocales(locales);
    setLanguage('ca');
  }
  connectedCallback() {
    super.connectedCallback();
  }

  static get styles(): CSSResult {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  render(): TemplateResult {
    return html` ${template(this)} `;
  }

  @region({ name: regions.main, targetId: 'main-region' })
  mainRegion: IRegion;

  @region({ name: regions.header, targetId: 'header-region' })
  headerRegion: IRegion;
}
