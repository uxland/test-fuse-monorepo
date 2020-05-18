import { Bootstrapper, ModuleInfo, ModulePostFn, ModuleType, PrismAppBase } from '@uxland/uxl-prism';
import * as R from 'ramda';
/** Module loaders */
const isTypeOf = (type: ModuleType) => (mi: ModuleInfo): boolean => R.equals<ModuleType>(type)(mi.type);
const isLocalModule = isTypeOf('local');
const isDemoModule = isTypeOf('demo');
const main = 'main.ts';
const loadRemoteModule = (mi: ModuleInfo): Promise<any> => import(`@test-fuse-monorepo/${mi.folder}/es/main.js`);
const loadLocalModule = (mi: ModuleInfo): Promise<any> => import(`@test-fuse-monorepo/${mi.folder}/src/${main}`);
const loadDemoModule = (mi: ModuleInfo): Promise<any> => import(`demo/${mi.folder}/src/${main}`);

const loadModule = R.cond([
  [isLocalModule, loadLocalModule],
  [isDemoModule, loadDemoModule],
  [R.T, loadRemoteModule],
]);
const moduleLoader = (postFn: ModulePostFn, appBaseRoute: string) => (mi: ModuleInfo): Promise<any> => loadModule(mi).then(postFn(mi));

class TestFuseAppBootstrapper extends Bootstrapper {
  protected moduleLoader(postFn: ModulePostFn, appsBaseRoute: string): (moduleInfo: ModuleInfo) => Promise<any> {
    return moduleLoader(postFn, this.appsBaseRoute);
  }
}

export class TestFuseAppBase extends PrismAppBase {
  constructor() {
    super();
    // withBaseUrl(process.env.CONFINAPP_API_URL);
    this.options = {
      ...this.options,
      language: 'ca',
      //   apiUrl: process.env.CONFINAPP_API_URL,
      fetchUser: () => this.doFetchUser(),
    };
  }

  protected async initApp(): Promise<any> {
    return new TestFuseAppBootstrapper(this.options).run();
  }

  initializeReducers(): void {
    // initializeReducers();
  }

  private async doFetchUser(): Promise<any> {
    return Promise.resolve({
      modules: [{ moduleId: 'products', folder: 'products', type: 'local' }],
    });
  }
}
