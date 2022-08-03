# Change Log

All notable changes to the Flutter Tools extension will be documented in this file.

## [3.0.0]

- Cleaned up the context menu, removing the items below and added new options via VSCode QuickPick:
  - `📝 Create Controller`
  - `📝 Create DTO`
  - `📄 Create Provider Interface`
  - `📄 Create Repository Interface`
  - `📄 Create Service Interface`
  - `📝 Create Model`
  - `📝 Create Singleton Class`
- Now when choose `Create Stateless Widget` or `Create Stateful Widget` it's possible to choose if a widget will be created as `🧩 Component` or `📑 Page`.
- Now when choose `Create MobX Store` it's possible to choose if the suffix name of MobX Store will be created as `🗂️ Controller` or `📦 Store`.
- Now when choose `Create Class` it's possible to choose the options below:
  - `📝 Create Class`
  - `📝 Create Controller Class`
  - `📝 Create Controller Class with ChangeNotifier`
  - `📝 Create DTO Class`
  - `📃 Create Enum`
  - `⛔ Create Exception Class`
  - `📇 Create Extension`
  - `📝 Create Helper Class`
  - `📄 Create Interface Class`
  - `📒 Create Mixin`
  - `📝 Create Model Class`
  - `📝 Create Singleton Class`
- Now when choose `Create Interface` it's possible to choose the options below:
  - `📄 Create Interface Class`
  - `📄 Create Provider Interface`
  - `📄 Create Repository Interface`
  - `📄 Create Service Interface`
- Added the wrapper `Wrap with ValueListenableBuilder`.
- Added the wrapper `Wrap with InkWell`.
- Updated the template of the wrapper `Wrap with LayoutBuilder`.
- Added configuration of Widgets Page file suffix.
- Added configuration of Create Folder for Widgets Page.
- Removed configuration of MobX file suffix.

## [2.4.1]

- Changed the template file for Stateful Widgets to avoid this warning `Avoid using private types in public APIs`.

## [2.4.0]

- Added the context menu item `Create Singleton Class`.

## [2.3.2]

- Fix for existent routes.

## [2.3.1]

- Added key into Widgets constructors.

## [2.3.0]

- For the resource's routes file, a static const variable has been added with the path of the route to represent it, such as `static const home = '/home';` . With this, it is now possible to navigate to a route, for example using `Get.toNamed(HomeRoutes.home);`

## [2.2.2]

- Added the shortcut `Alt` + `W` for select a widget.

## [2.2.1]

- Change extension logo.

## [2.2.0]

- Change extension name to Flutter Tools.

## [2.1.0]

- Change extension name to Flutter Creator.

## [2.0.4]

- Update context menu image in readme.md.
- Change extension name to Create Widgets and Classes for Flutter.

## [2.0.3]

- Added the setting `getxUseConstructorTearOffs`.

## [2.0.2]

- Update extension description.

## [2.0.1]

- Improve the routes creation for `🗂️ Create GetX Feature`.

## [2.0.0]

- Added the context menu `📂 Create GetX App Structure`.
- Added the context menu `🗂️ Create GetX Feature`.
- Added the context menu `🗃️ Create GetX Service`.
- Added the context menu `📝 Create DTO`.
- Added the context menu `📝 Create Model`.
- Added the code action `Wrap with LayoutBuilder`.
- Added the setting `createFolderForInterfaces`.
- Added the setting `getxDisplayContextMenu`.
- Added the setting `getxViewsSuffix`.
- Added the setting `getxProjectPath`.
- Added the setting `mobxDisplayContextMenu`.
- Added the setting `mobxFileSuffix`.
- Improve code action Implements interface.

## [1.2.0]

- Added the code action `Implements interface`.
- Added the code action `Wrap with Align`.
- Added the code action `Wrap with ClipRRect`.
- Added the code action `Wrap with Hero`.
- Added the code action `Wrap with Obx`.
- Added the setting `createImplementationOfInterface`.
- Added the context menu `📝 Create Dart Controller Class`.
- Added the context menu `📄 Create Dart Provider Interface`.
- Added the context menu `📄 Create Dart Repository Interface`.
- Added the context menu `📄 Create Dart Service Interface`.
- Removed the setting `fileNameCaseFormat`.

## [1.1.4]

- Updated README.md.

## [1.1.3]

- Allow wrapping a widget using widget selection.

## [1.1.2]

- Added the code action `Wrap with SingleChildScrollView`.
- Added the context menu `📄 Create Dart Interface`.
- Added the setting for use `I` prefix in interfaces.
- Changed the icon of menu item `📝 Create Dart Class`.
- Refactored the Wrappers Section in code.
- Change order of Wrappers.
- Change examples of Wrappers in README.md.

## [1.1.1]

- Added the code action `Wrap with GestureDetector`.

## [1.1.0]

- Added the code action `Wrap with Observer`.
- Added the code action `Wrap with Expanded`.
- Added the code action `Wrap with Stack`.
- Added the code action `Wrap with Positioned`.
- Added the code action `Wrap with Form`.
- Added the code action `Wrap with SafeArea`.

## [1.0.1]

- Updated the readme.md file.

## [1.0.0]

- Initial release.
