import { camelCase } from 'lodash';
import CreateComponent from './interfaces/CreateComponent';
import createGetPageTearOff from './shared/functions/create-get-page-tear-off';
import pascalCase from './shared/functions/pascal-case';

export default ({ componentName, getxViewsSuffix, featurePath, getxUseConstructorTearOffs }: CreateComponent) => (
`GetPage(
      name: ${camelCase(featurePath)},
      page: ${ createGetPageTearOff(componentName, getxViewsSuffix, getxUseConstructorTearOffs) }
      binding: ${ pascalCase(componentName) }Binding(),
    ),`
);
