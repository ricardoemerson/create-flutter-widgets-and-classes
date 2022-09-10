import CreateComponent from './interfaces/CreateComponent';
import createGetPageTearOff from './shared/functions/create-get-page-tear-off';
import pascalCase from './shared/functions/pascal-case';

import { camelCase } from 'lodash';

export default ({
  componentName,
  getxViewsSuffix,
  getxUseConstructorTearOffs,
}: CreateComponent) =>
  `GetPage(
      name: ${camelCase(componentName)},
      page: ${createGetPageTearOff(
        componentName,
        getxViewsSuffix,
        getxUseConstructorTearOffs
      )}
      binding: ${pascalCase(componentName)}Binding(),
    ),`;
