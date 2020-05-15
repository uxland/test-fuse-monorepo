import { ModuleInfo, setLocales } from '@uxland/uxl-prism';
import { regionManager } from '@uxland/uxl-regions';
import './components/products-list/view';
import { locales } from './locales';
import { regions } from '@test-fuse-monorepo/core';

const registerViews = (): void => {
  regionManager.registerViewWithRegion(regions.main, 'products-list', {
    htmlTag: 'products-list',
  });
};

const deRegisterViews = (): void => {
  regionManager.getRegion(regions.main).removeView('products-list');
};

export const initialize = (mi: ModuleInfo): void => {
  setLocales(locales);
  registerViews();
};

export const dispose = (): void => {
  deRegisterViews();
};
