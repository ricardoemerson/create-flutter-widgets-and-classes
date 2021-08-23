import { camelCase, upperFirst } from 'lodash';

export default function pascalCase(text: string) {
  return upperFirst(camelCase(text));
}
