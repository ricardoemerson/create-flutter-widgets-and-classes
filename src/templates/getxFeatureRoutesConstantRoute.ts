import CreateComponent from './interfaces/CreateComponent';

import { camelCase, kebabCase } from 'lodash';

export default ({ featurePath }: CreateComponent) =>
  `static const ${camelCase(featurePath)} = '${featurePath!
    .split('/')
    .map(route => kebabCase(route))
    .join('/')}';`;
