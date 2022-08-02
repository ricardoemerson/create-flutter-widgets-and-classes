import CreateComponent from './interfaces/CreateComponent';
import pascalCase from './shared/functions/pascal-case';

export default ({ componentName }: CreateComponent) =>
  `import 'home_routes.dart';

class ${pascalCase(componentName)} {
  ${pascalCase(componentName)}._();

  static const INITIAL = '/home';

  static final routes = [
    ...HomeRoutes.routes,
  ];
}
`;
