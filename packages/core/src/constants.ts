import { constantBuilder } from '@uxland/functional-utilities';

export type Builder = (name: string) => string;
export const APP_NAME = 'TEST-FUSE-MONOREPO';
export const appointmentsValidationConstantBuilder = (suffix: string, separator?: string): Builder =>
    constantBuilder(APP_NAME, suffix, separator);

export const regionBuilder = appointmentsValidationConstantBuilder('REGION');
export const eventBuilder = appointmentsValidationConstantBuilder('EVENT');
export const actionBuilder = appointmentsValidationConstantBuilder('ACTION');