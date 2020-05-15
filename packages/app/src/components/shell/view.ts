import { locale, PrismShellMixin } from '@uxland/uxl-prism';
import { propertiesObserver } from '@uxland/uxl-utilities';
import { IRegion, region, RegionHost } from '@uxland/uxl-regions';

import { css, CSSResult, customElement, html, LitElement, property, TemplateResult, unsafeCSS } from 'lit-element';
//@ts-ignore
import styles from './styles.scss';
import { template } from './template';
import { regions } from '@test-fuse-monorepo/core';

@customElement('test-fuse-monorepo-shell')
export class TestFuseMonorepoShell extends locale(PrismShellMixin(RegionHost(propertiesObserver(LitElement)))) {
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
