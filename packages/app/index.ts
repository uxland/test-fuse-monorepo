import { AppointmentsValidationApp } from './src/components/app/view';

console.log(`ICS SMS Patient v${process.env.appVersion}`);
const app = new AppointmentsValidationApp();
document.body.appendChild(app as any);
