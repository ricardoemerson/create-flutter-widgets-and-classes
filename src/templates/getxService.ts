import CreateComponent from './interfaces/CreateComponent';
import pascalCase from './shared/functions/pascal-case';

export default ({ componentName }: CreateComponent) =>
  `import 'package:get/get.dart';

class ${pascalCase(componentName)} extends GetxService {
  //TODO: Implement ${pascalCase(componentName)} GetxService.
}
`;
