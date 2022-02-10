import { snakeCase } from 'lodash';
import CreateComponent from './interfaces/CreateComponent';
import pascalCase from './shared/functions/pascal-case';

export default ({ componentName }: CreateComponent) => (
`import 'package:get/get.dart';

import '${ snakeCase(componentName) }_controller.dart';

class ${ pascalCase(componentName) }Binding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<${ pascalCase(componentName) }Controller>(
      ${ pascalCase(componentName) }Controller.new,
    );
  }
}
`
);
