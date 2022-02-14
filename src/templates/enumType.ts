import CreateComponent from './interfaces/CreateComponent';
import pascalCase from './shared/functions/pascal-case';

export default ({ componentName }: CreateComponent) => (
`enum ${ pascalCase(componentName) } {

}
`
);
