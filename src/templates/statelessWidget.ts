import CreateComponent from './interfaces/CreateComponent';
import pascalCase from './shared/functions/pascal-case';

export default ({ componentName }: CreateComponent) => (
`import 'package:flutter/material.dart';

class ${ pascalCase(componentName) } extends StatelessWidget {
  const ${ pascalCase(componentName) }({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container();
  }
}
`
);
