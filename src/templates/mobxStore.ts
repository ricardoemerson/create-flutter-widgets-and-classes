import CreateComponent from './interfaces/CreateComponent';
import pascalCase from './shared/functions/pascal-case';

import { lowerCase } from 'lodash';

export default ({ componentName, fileName, mobxFileSuffix }: CreateComponent) =>
  `import 'package:mobx/mobx.dart';

part '${fileName}_${lowerCase(mobxFileSuffix)}.g.dart';

class ${pascalCase(componentName)}${mobxFileSuffix} = _${pascalCase(
    componentName
  )}${mobxFileSuffix}Base with _$${pascalCase(componentName)}${mobxFileSuffix};

abstract class _${pascalCase(componentName)}${mobxFileSuffix}Base with Store {

}
`;
