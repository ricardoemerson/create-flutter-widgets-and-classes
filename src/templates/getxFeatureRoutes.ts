import { kebabCase, snakeCase } from 'lodash';
import CreateComponent from './interfaces/CreateComponent';
import addHomeImport from './shared/functions/add-home-import';
import pascalCase from './shared/functions/pascal-case';

export default ({ componentName, getxViewsSuffix, createHomeImport = false }: CreateComponent) => (
`import 'package:get/get.dart';
${ addHomeImport(createHomeImport) }
class ${ pascalCase(componentName) }Routes {
  ${ pascalCase(componentName) }Routes._();

  static final routes = [
    GetPage(
      name: '/${ kebabCase(componentName) }',
      page: ${ pascalCase(componentName) }${ getxViewsSuffix }.new,
      binding: ${ pascalCase(componentName) }Binding(),
    ),
  ];
}
`
);
