import angularConfig from './angular.js';
import lessConfig from './less.js';

export default {
  ...angularConfig,
  customSyntax: lessConfig.customSyntax,
  rules: {
    ...angularConfig.rules,
    ...lessConfig.rules,
  },
};
