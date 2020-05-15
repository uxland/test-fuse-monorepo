import { locale } from '@uxland/uxl-prism';
import { regionView } from '@uxland/uxl-regions';
import { css, CSSResult, customElement, html, LitElement, TemplateResult, unsafeCSS } from 'lit-element';
//@ts-ignore
import styles from './styles.scss';
import { template } from './template';

@customElement('products-list')
export class ProductsList extends locale(regionView(LitElement)) {
  render(): TemplateResult {
    return html` ${template(this)} `;
  }

  static get styles(): CSSResult {
    return css`
      ${unsafeCSS(styles)}
    `;
  }
}
