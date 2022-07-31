import CreateComponent from './interfaces/CreateComponent';
import pascalCase from './shared/functions/pascal-case';

export default ({ componentName }: CreateComponent) => (
`class ${ pascalCase(componentName) }Exception implements Exception {
  final String? message;

  ${ pascalCase(componentName) }Exception([this.message]);
}
`
);
