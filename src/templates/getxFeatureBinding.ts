import CreateComponent from './interfaces/CreateComponent';
import createBindingTearOff from './shared/functions/create-binding-tear-off';
import pascalCase from './shared/functions/pascal-case';

import { snakeCase } from 'lodash';

export default ({ componentName, getxUseConstructorTearOffs }: CreateComponent) =>
  `import 'package:get/get.dart';

import '${snakeCase(componentName)}_controller.dart';

class ${pascalCase(componentName)}Binding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<${pascalCase(componentName)}Controller>(
      ${createBindingTearOff(componentName, getxUseConstructorTearOffs)}
    );
  }
}
`;
