import { TestFuseMonorepoApp } from './src/components/app/view';

console.log(`ICS SMS Patient v${process.env.appVersion}`);
const app = new TestFuseMonorepoApp();
document.body.appendChild(app as any);
