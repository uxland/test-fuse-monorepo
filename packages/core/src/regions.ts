import { appointmentsValidationConstantBuilder } from './constants';
let regionsBuilder = appointmentsValidationConstantBuilder('region');

export const regions = {
  main: regionsBuilder('main'),
  header: regionsBuilder('header'),
};
