import { TestFuseApp } from './src/components/app/view';
console.log('App initialized');

const app = new TestFuseApp();
document.body.appendChild(app as any);
