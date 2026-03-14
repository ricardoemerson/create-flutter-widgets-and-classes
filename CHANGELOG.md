# Change Log

All notable changes to the Flutter Tools Pro extension will be documented in this file.

## [4.1.12]

### Added
- Added the documentation in `README.pt-br.md`.

### Changed
- Updated the `README.md` for better readability.

## [4.0.0]

### Added
- Added the command `✨ Read pubspec.yaml to enable Flutter Tools Pro features`.
- Added the command `Open User Settings for Flutter Tools Pro`.
- Added the command `Open Workspace Settings for Flutter Tools Pro`.
- Added the command `➖ Take Previous Value` (Value step decrementor).
- Added the command `➕ Take Next Value` (Value step incrementor).
- Added the event `onSave:pubspec.yaml` to automatically read project configuration.
- Added context menu `📂 Create Riverpod App Structure`.
- Added context menu `📑 Create Riverpod Feature` (with GoRouter support).
- Added context menu `📝 Create Final Class` (Dart 3+).
- Added context menu `📝 Create Sealed Class` (Dart 3+).
- Added `Wrap with Consumer`.
- Added `Wrap with CustomScrollView` and sliver delegates.
- Added `Wrap with Offstage`.
- Added setting `projectViewsPath`.
- Added `Riverpod` snippets.
- Added `FVM` snippets for SDK path configuration.

### Changed
- Updated `Flutter Modular Module` support for versions 5 and 6.
- Improved extension settings and overall project structure.
- Updated `Widget` snippets.

### Removed
- Removed the setting `projectsPath`.

## [3.21.0]

- Added the context menu item `📂 Create Widgets Folder`.
- Added the item `Wrap with CustomScrollView and SliverList and SliverChildListDelegate`.
- Added the item `Wrap with SliverList and SliverChildListDelegate`.
- Added the item `Wrap with SliverVisibility`.
- Updated `Modular` snippets.

## [3.20.0]

- Updated `Widgets` snippets.

## [3.19.0]

- Added the item `Wrap with ScrollViewAndSliverAppBar`.
- Added the item `Wrap with SliverAppBar`.
- Updated `Flutter` snippets.
- Updated `Modular` snippets.
- Updated `Widgets` snippets.

## [3.18.0]

- Added the item `Wrap with CallbackShortcuts`.

## [3.17.0]

- Updated `Wrap with widget...`.
- Added shortcuts for `Wrap with widget...` that are displayed in context menu.

## [3.16.0]

- Updated `GetX` snippets.
- Updated `Provider` snippets.

## [3.15.0]

- Added the item `Wrap with CustomScrollView and SliverList.builder()`.
- Added the item `Wrap with CustomScrollView and SliverList.separated()`.
- Added the item `Wrap with SliverFillRemaining`.
- Added the item `Wrap with SliverList.builder()`.
- Added the item `Wrap with SliverList.separated()`.
- Added the item `Wrap with SliverToBoxAdapter`.

## [3.14.0]

- Added snippets for `Bloc/Cubit`.
- Updated `Widgets` snippets.
- Updated `Yaml` snippets.
- Updated `Wrap with widget...` to allow choose snippets options.
- Changed `Wrap with widget...` shortcut to `alt` + `q`.
- Added the item `Wrap with CustomScrollView and SliverFillRemaining`.
- Added the item `Wrap with CustomScrollView and SliverToBoxAdapter`.

## [3.13.0]

- Added the context menu item `📂 Create Flutter Modular App Structure`.
- Added the context menu item `📑 Create Flutter Modular Feature`.
- Added the context menu item `🪧 Create Flutter Modular Module`.
- Added the item `Wrap with FittedBox`.
- Added the item `Wrap with FractionallySizedBox`.
- Added the item `Wrap with ListView.builder()`.
- Added the item `Wrap with GridView.builder()`.
- Added the item `Wrap with Wrap`.
- Added the item `Wrap with LayoutBuilder and ConstrainedBox`.
- Change the item `Wrap with LayoutBuilder` to be simple.
- Updated snippets.
- Project restructured and updated.

## [3.12.0]

- Updated snippets.

## [3.11.0]

- Updated the template for MobX Store.

## [3.10.0]

- Added the setting `useSuperInitializerParameters`.

## [3.9.0]

- Updated snippet for linter rules.

## [3.8.3]

- Updated the badges in README.md.

## [3.8.2]

- Fix snippet `ft-delayed-seconds-with-callback`.

## [3.8.1]

- Fix internal commands definition.

## [3.8.0]

- Added the item `Wrap with ColoredBox`.
- Added the item `Wrap with DecoratedBox`.
- Added the item `Wrap with WillPopScope`.
- Include the type of widget in VSCode Quick Pick.
- Disabled the use of constructors tear-off as default for GetX Features.

## [3.7.0]

- Added new snippets for linter rules to the file `analysis_options.yaml`.

## [3.6.0]

- Added new Modular snippets.
- Improved Flutter snippets.

## [3.5.0]

- Added the item `Wrap with Visibility`.
- Added a check if some GetX folders exist to avoid errors.

## [3.4.0]

- Updated snippets list:
  - Flutter and Dart
  - `ft-get-property` -> Adds a get property.
  - `ft-static-get-property` -> Adds a static get property.
  - `ft-signature-static-method` -> Add a signature to a static method.
  - `ft-static-method` -> Adds a static method.
  - `ft-signature-future-static-method` -> Adds a signature of a future static method.
  - `ft-future-static-method` -> Adds a future static method.

  - GetX:
  - `ft-get-put-service-impl` -> Adds Get.put() instruction for ServiceImpl().
  - `ft-get-put-repository-impl` -> Adds Get.put() instruction for RepositoryImpl().
  - `ft-get-put-provider-impl` -> Adds Get.put() instruction for ProviderImpl().
  - `ft-get-lazy-put-provider-impl` -> Adds Get.lazyPut() instruction for ProviderImpl() used by a ServiceImpl().
  - `ft-get-lazy-put-service-impl` -> Adds Get.lazyPut() instruction for ServiceImpl().
  - `ft-get-lazy-put-repository-impl` -> Adds Get.lazyPut() instruction for RepositoryImpl() used by a ServiceImpl().
  - `ft-rx-attribute` -> Creates a Rx attribute.
  - `ft-rxn-attribute` -> Creates a Rxn attribute.
  - `ft-obs-attribute` -> Creates a GetX Observable attribute.

  - Provider:
  - `ft-provider-watch` -> Adds the context.watch<type>()... to watch instance of class using Provider.
  - `ft-provider-select` -> Adds the context.select<ClassName, type>()... to select instance of class using Provider.

  - Flutter Modular
  - `ft-modular-module` -> Creates a Flutter Modular Module.
  - `ft-modular-get` -> Adds the Modular.get() the get instance of class using Modular.
  - `ft-modular-get-of-type` -> Adds the Modular.get<Class>() to get instance of class using Modular.
  - `ft-bind-lazy-singleton-class` -> Adds Bind.lazySingleton() instruction for any Class using Modular.
  - `ft-bind-lazy-singleton-class-impl` -> Adds Bind.lazySingleton() instruction for any ClassImpl using Modular.
  -

## [3.3.3]

- Added fix for open the interface file when created through context menu -> 🗒️ Create Interface -> 📄 Create Interface Class.

## [3.3.2]

- Updated CHANGELOG.md.

## [3.3.1]

- Updated README.md.

## [3.3.0]

- Updated snippets list:
  - `ft-direction` -> Adds direction property using Axis.
  - `ft-static-method` -> Adds a static method.
  - `ft-static-future-void-method` -> Adds a static Future<void> method.
  - `ft-static-future-method` -> Adds a static Future method.
- Added the list of available snippets inside the README.md file in the [Snippets](#snippets) section.

## [3.2.0]

- Updated snippets:
  - `ft-part` -> Adds part file for main file.
  - `ft-part-of` -> Adds part of main file.
  - `ft-constr-inject-i-provider` -> Creates an injection for IProvider - Complete.
  - `ft-constr-inject-provider` -> Creates an injection for Provider - Complete.
  - `ft-constr-inject-i-repository` -> Creates an injection for IRepository - Complete.
  - `ft-constr-inject-repository` -> Creates an injection for Repository - Complete.
  - `ft-constr-inject-i-service` -> Creates an injection for IService - Complete.
  - `ft-constr-inject-service` -> Creates an injection for Service - Complete.

## [3.1.0]

- Added notification message for extension updates.

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
- Cleaned up the wrappers widgets context menu, removing the items below and added new options via VSCode QuickPick:
  - `Wrap with Align`
  - `Wrap with ClipRRect`
  - `Wrap with ConstrainedBox`
  - `Wrap with Expanded`
  - `Wrap with Flexible`
  - `Wrap with Form`
  - `Wrap with GestureDetector`
  - `Wrap with Hero`
  - `Wrap with InkWell`
  - `Wrap with IntrinsicHeight`
  - `Wrap with IntrinsicWidth`
  - `Wrap with LayoutBuilder`
  - `Wrap with LayoutBuilder and SingleChildScrollView`
  - `Wrap with Positioned`
  - `Wrap with SafeArea`
  - `Wrap with SingleChildScrollView`
  - `Wrap with Stack`
  - `Wrap with ValueListenableBuilder`
  - `Wrap with MobX Observer`
  - `Wrap with GetX Obx`
- Added **163 snippets** that can be accessed with `ft-` prefix.

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

- Added the setting `useConstructorTearOffs`.

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
- Added the setting `displayGetxContextMenu`.
- Added the setting `widgetsViewsSuffix`.
- Added the setting `projectPath`.
- Added the setting `displayMobxContextMenu`.
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
