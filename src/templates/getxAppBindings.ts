import { snakeCase } from 'lodash';
import CreateComponent from './interfaces/CreateComponent';
import pascalCase from './shared/functions/pascal-case';

export default ({ componentName }: CreateComponent) => (
`import 'package:get/get.dart';

class ApplicationBindings extends Bindings {
  @override
  void dependencies() {

  }
}
`
);
