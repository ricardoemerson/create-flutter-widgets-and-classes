import { camelCase, kebabCase, lowerCase, snakeCase } from 'lodash';
import CreateComponent from './interfaces/CreateComponent';

export default ({ featurePath }: CreateComponent) => (
`static const ${camelCase(featurePath)} = '${ featurePath!.split('/').map(route => kebabCase(route)).join('/') }';`
);
