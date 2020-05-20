import { html, TemplateResult } from 'lit-element';
import { ProductsList } from './view';
import { moduleName } from '../../constants';
import { repeat } from 'lit-html/directives/repeat';
import { doConfirm } from '@uxland/uxl-interaction';
import '@vaadin/vaadin-combo-box';
export const template = (props: ProductsList): TemplateResult =>
  html`<div class="list">
    <div class="title">${props.localize(`${moduleName}.list.title`)}</div>
    ${repeat(props.products, (product) => html`<span @click="${(e) => showDetail(product)}">ID: ${product.id} - ${product.description}</span>`)}
    <div class="title">${props.localize(`${moduleName}.list.title2`)}</div>
    <vaadin-combo-box
      @change="${(e) => showDetail(e.currentTarget.selectedItem)}"
      .items="${props.products}"
      item-value-path="id"
      item-label-path="description"
      label="Products"
    ></vaadin-combo-box>
  </div>`;

const showDetail = (product) =>
  doConfirm({
    title: 'Product detail',
    message: `${product.id} - ${product.description}`,
    modal: true,
    type: 'info',
    showCloseButton: true,
  });
