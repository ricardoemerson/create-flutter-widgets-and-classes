import CreateComponent from './interfaces/CreateComponent';
import pascalCase from './shared/functions/pascal-case';

export default ({ componentName }: CreateComponent) => (
`import 'package:flutter/material.dart';

class ${ pascalCase(componentName) } extends StatefulWidget {
  const ${ pascalCase(componentName) }({ Key? key }) : super(key: key);

  @override
  _${ pascalCase(componentName) }State createState() => _${ pascalCase(componentName) }State();
}

class _${ pascalCase(componentName) }State extends State<${ pascalCase(componentName) }> {
  @override
  Widget build(BuildContext context) {
    return Container();
  }
}
`
);
