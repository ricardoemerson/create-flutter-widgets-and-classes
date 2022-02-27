import { kebabCase, lowerCase, snakeCase } from 'lodash';
import CreateComponent from './interfaces/CreateComponent';
import pascalCase from './shared/functions/pascal-case';

export default ({ componentName, getxViewsSuffix, featurePath }: CreateComponent) => (
`import '../modules${ featurePath }/${ snakeCase(componentName) }_binding.dart';
import '../modules${ featurePath }/${ snakeCase(componentName) }_${ lowerCase(getxViewsSuffix) }.dart';`
);
