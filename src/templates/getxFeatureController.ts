import CreateComponent from './interfaces/CreateComponent';
import pascalCase from './shared/functions/pascal-case';

export default ({ componentName }: CreateComponent) =>
  `import 'package:get/get.dart';

class ${pascalCase(componentName)}Controller extends GetxController {
  //TODO: Implement ${pascalCase(componentName)}Controller.

  @override
  void onInit() {
    super.onInit();
  }

  @override
  void onReady() {
    super.onReady();
  }

  @override
  void onClose() {
    super.onClose();
  }
}
`;
