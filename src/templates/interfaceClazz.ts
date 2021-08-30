import CreateComponent from './interfaces/CreateComponent';
import pascalCase from './shared/functions/pascal-case';

export default ({ componentName, useIPrefixForInterfaces }: CreateComponent) => (
`abstract class ${ useIPrefixForInterfaces ? 'I' : '' }${ pascalCase(componentName) } {

}
`
);
