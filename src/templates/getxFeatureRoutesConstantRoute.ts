import CreateComponent from './interfaces/CreateComponent';

import { camelCase, kebabCase } from 'lodash';

export default ({ featurePath, componentName }: CreateComponent) =>
  `static const ${camelCase(componentName)} = '${featurePath!
    .split('/')
    .map(route => kebabCase(route))
    .join('/')}';`;
