import CreateComponent from './interfaces/CreateComponent';
import pascalCase from './shared/functions/pascal-case';

export default ({ componentName }: CreateComponent) =>
  `import 'package:flutter/material.dart';

class ${pascalCase(componentName)} extends ChangeNotifier {

}
`;
