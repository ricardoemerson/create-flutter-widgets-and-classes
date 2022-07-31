import CreateComponent from './interfaces/CreateComponent';
import pascalCase from './shared/functions/pascal-case';

export default ({ componentName, widgetsViewsSuffix }: CreateComponent) => (
`import 'package:flutter/material.dart';

class ${ pascalCase(componentName) }${ widgetsViewsSuffix } extends StatefulWidget {
  const ${ pascalCase(componentName) }${ widgetsViewsSuffix }({ Key? key }) : super(key: key);

  @override
  State<${ pascalCase(componentName) }${ widgetsViewsSuffix }> createState() => _${ pascalCase(componentName) }${ widgetsViewsSuffix }State();
}

class _${ pascalCase(componentName) }${ widgetsViewsSuffix }State extends State<${ pascalCase(componentName) }${ widgetsViewsSuffix }> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('${ pascalCase(componentName) }${ widgetsViewsSuffix }'),
        centerTitle: true,
      ),
      body: const Center(
        child: Text(
          '${ pascalCase(componentName) }${ widgetsViewsSuffix } is working',
          style: TextStyle(fontSize: 20),
        ),
      ),
    );
  }
}
`
);
