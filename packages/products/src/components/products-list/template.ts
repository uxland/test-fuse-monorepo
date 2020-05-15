import { html, TemplateResult } from 'lit-element';
import { ProductsList } from './view';
import { moduleName } from '../../constants';

export const template = (props: ProductsList): TemplateResult =>
  html`<div class="list">
    <div class="title">${props.localize(`${moduleName}.list.title`)}</div>
    <p>Product1</p>
    <p>Product2</p>
    <p>Product3</p>
    <p>Product4</p>
    <p>Product5</p>
    <p>Product6</p>
  </div>`;
