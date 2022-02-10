import { kebabCase, snakeCase } from 'lodash';
import CreateComponent from './interfaces/CreateComponent';
import pascalCase from './shared/functions/pascal-case';

export default ({ componentName }: CreateComponent) => (
`import 'package:get/get.dart';

class ${ pascalCase(componentName) }Routes {
  ${ pascalCase(componentName) }Routes._();

  static final routes = [
    GetPage(
      name: '/${ kebabCase(componentName) }',
      page: ${ pascalCase(componentName) }View.new,
      binding: ${ pascalCase(componentName) }Binding(),
    ),
  ];
}
`
);
