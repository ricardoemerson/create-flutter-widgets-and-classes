import CreateComponent from './interfaces/CreateComponent';

import { lowerCase, snakeCase } from 'lodash';

export default ({ componentName, getxViewsSuffix, featurePath }: CreateComponent) =>
  `import '../modules${featurePath}/${snakeCase(componentName)}_binding.dart';
import '../modules${featurePath}/${snakeCase(componentName)}_${lowerCase(
    getxViewsSuffix
  )}.dart';`;
