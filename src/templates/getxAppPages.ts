import { kebabCase, snakeCase } from 'lodash';
import CreateComponent from './interfaces/CreateComponent';
import pascalCase from './shared/functions/pascal-case';

export default ({ componentName }: CreateComponent) => (
`import 'home_routes.dart';

class AppPages {
  AppPages._();

  static const INITIAL = '/home';

  static final routes = [
    ...HomeRoutes.routes,
  ];
}
`
);
