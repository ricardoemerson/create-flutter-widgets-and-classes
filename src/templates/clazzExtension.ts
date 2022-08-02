import CreateComponent from './interfaces/CreateComponent';
import pascalCase from './shared/functions/pascal-case';

export default ({ componentName }: CreateComponent) =>
  `extension ${pascalCase(componentName)} on String {

}
`;
