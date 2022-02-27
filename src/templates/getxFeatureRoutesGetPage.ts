import { kebabCase, lowerCase, snakeCase } from 'lodash';
import CreateComponent from './interfaces/CreateComponent';
import pascalCase from './shared/functions/pascal-case';

export default ({ componentName, getxViewsSuffix, featurePath }: CreateComponent) => (
`GetPage(
      name: '${ featurePath!.split('/').map(route => kebabCase(route)).join('/') }',
      page: ${ pascalCase(componentName) }${ getxViewsSuffix }.new,
      binding: ${ pascalCase(componentName) }Binding(),
    ),`
);
