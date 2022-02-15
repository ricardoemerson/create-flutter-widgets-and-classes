import { kebabCase, snakeCase } from 'lodash';
import CreateComponent from './interfaces/CreateComponent';
import pascalCase from './shared/functions/pascal-case';

export default ({ componentName, getxViewsSuffix, featurePath }: CreateComponent) => (
`import 'package:get/get.dart';

import '../modules${ featurePath }/${ snakeCase(componentName) }_binding.dart';
import '../modules${ featurePath }/${ snakeCase(componentName) }_page.dart';

class ${ pascalCase(componentName) }Routes {
  ${ pascalCase(componentName) }Routes._();

  static final routes = [
    GetPage(
      name: '${ featurePath!.split('/').map(route => kebabCase(route)).join('/') }',
      page: ${ pascalCase(componentName) }${ getxViewsSuffix }.new,
      binding: ${ pascalCase(componentName) }Binding(),
    ),
  ];
}
`
);
