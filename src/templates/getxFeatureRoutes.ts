import { camelCase, kebabCase, lowerCase, snakeCase } from 'lodash';
import CreateComponent from './interfaces/CreateComponent';
import createGetPageTearOff from './shared/functions/create-get-page-tear-off';
import pascalCase from './shared/functions/pascal-case';

export default ({ componentName, getxViewsSuffix, featurePath, getxUseConstructorTearOffs }: CreateComponent) => (
`import 'package:get/get.dart';

import '../modules${ featurePath }/${ snakeCase(componentName) }_binding.dart';
import '../modules${ featurePath }/${ snakeCase(componentName) }_${ lowerCase(getxViewsSuffix) }.dart';

class ${ pascalCase(componentName) }Routes {
  ${ pascalCase(componentName) }Routes._();

  static const ${camelCase(featurePath)} = '${ featurePath!.split('/').map(route => kebabCase(route)).join('/') }';

  static final routes = [
    GetPage(
      name: ${camelCase(featurePath)},
      page: ${ createGetPageTearOff(componentName, getxViewsSuffix, getxUseConstructorTearOffs) }
      binding: ${ pascalCase(componentName) }Binding(),
    ),
  ];
}
`
);
