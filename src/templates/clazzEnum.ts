import CreateComponent from './interfaces/CreateComponent';
import pascalCase from './shared/functions/pascal-case';

export default ({ componentName }: CreateComponent) =>
  `enum ${pascalCase(componentName)} {
  info('This is an info message'),
  success('This is a success message'),
  warning('This is a warning message'),
  error('This is an error message');

  final String value;

  const ${pascalCase(componentName)}(this.value);
}
`;
