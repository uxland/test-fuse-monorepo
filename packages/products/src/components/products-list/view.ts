import { locale } from '@uxland/uxl-prism';
import { regionView } from '@uxland/uxl-regions';
import { css, CSSResult, customElement, html, LitElement, TemplateResult, unsafeCSS, property } from 'lit-element';
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

  @property()
  products = [
    { id: 1, description: 'product 1' },
    { id: 2, description: 'product 2' },
    { id: 3, description: 'product 3' },
    { id: 4, description: 'product 4' },
    { id: 5, description: 'product 5' },
    { id: 6, description: 'product 6' },
    { id: 7, description: 'product 7' },
    { id: 8, description: 'product 8' },
  ];
}
