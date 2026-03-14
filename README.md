# Flutter Tools Pro

<p align="right">
  🌐 <b>English</b> | <a href="https://github.com/ricardoemerson/create-flutter-widgets-and-classes/blob/main/README.pt-br.md">Português</a>
</p>

<p align="center">
  <br />
  <a title="Learn More about Flutter Tools Pro" href="https://github.com/ricardoemerson/create-flutter-widgets-and-classes">
    <img src="https://raw.githubusercontent.com/ricardoemerson/create-flutter-widgets-and-classes/main/images/cover-logo.png" alt="Flutter Tools Pro Logo" width="180"  height="180"/>
  </a>
</p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=ricardo-emerson.create-flutter-widgets-and-classes">
    <img src="https://img.shields.io/visual-studio-marketplace/v/ricardo-emerson.create-flutter-widgets-and-classes.svg?style=for-the-badge&logo=visual-studio-code" alt="Version"/>
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=ricardo-emerson.create-flutter-widgets-and-classes">
    <img src="https://img.shields.io/visual-studio-marketplace/i/ricardo-emerson.create-flutter-widgets-and-classes.svg?style=for-the-badge" alt="Installs"/>
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=ricardo-emerson.create-flutter-widgets-and-classes">
    <img src="https://img.shields.io/visual-studio-marketplace/r/ricardo-emerson.create-flutter-widgets-and-classes.svg?style=for-the-badge" alt="Rating"/>
  </a>
</p>

---

  ![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/ricardo-emerson.create-flutter-widgets-and-classes.svg?style=flat-square)
  ![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/ricardo-emerson.create-flutter-widgets-and-classes.svg?style=flat-square)
  ![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/ricardo-emerson.create-flutter-widgets-and-classes.svg?style=flat-square)
  ![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/ricardo-emerson.create-flutter-widgets-and-classes.svg?style=flat-square)
  [![GitHub](https://img.shields.io/github/stars/ricardoemerson/create-flutter-widgets-and-classes.svg?style=flat-square)](https://github.com/ricardoemerson/create-flutter-widgets-and-classes)

---

## 🚀 Accelerate Your Flutter Development

**Flutter Tools Pro** is a high-performance productivity suite for Visual Studio Code, specifically designed for developers working with modern Flutter architectures. It automates the boilerplate of creating widgets, classes, and complex feature structures across the industry's leading state management frameworks.

### 💎 Key Benefits
- **Architectural Automation**: Generate complete feature folders (View, Controller, Binding, Route) for GetX, Riverpod, and Modular instantly.
- **Smart Context**: Automatically enables/disables features by reading your `pubspec.yaml`.
- **Boilerplate Eradication**: Over 160+ optimized snippets and intelligent code actions for wrapping widgets.

---

## 🛠 Features

| Category | Capability | Tier |
| :--- | :--- | :---: |
| **Frameworks** | GetX, Riverpod, Flutter Modular, MobX | **PRO** |
| **Generators** | Stateless/Stateful Widgets (Page or Component) | **PRO** |
| **Architecture** | Interfaces, Repositories, DTOs, Services | **PRO** |
| **Productivity** | Custom Template Generation | **PRO** |
| **Code Actions** | Intelligent Widget Wrappers (LayoutBuilder, Obx, etc.) | **PRO** |
| **Snippets** | 160+ Dart & Flutter Utilities | **FREE** |

---

## 🔑 Licensing & Getting Started

Initially offered for free, Flutter Tools is now a fully paid extension to ensure its sustainability and continuous improvement.

### How to Register Your Subscription
1. Visit [Extensions Hub](https://extensionshub.com.br) to purchase your plan.
2. Open the **Command Palette** (`Ctrl+Shift+P` / `Cmd+Shift+P`).
3. Select ✏️ **Add/Update Subscription Key for Flutter Tools Pro**.
4. Enter your key and name your device.

---

## 🎬 Usage Examples

> All examples follow default settings. Feel free to customize them to fit your project's architecture.

### Widgets (Components & Pages)
Generate `Stateless` or `Stateful` widgets with pre-defined structures.

| Action | Page | Component |
| :--- | :---: | :---: |
| **Stateless** | ![Page](images/create-stateless-widget-page.gif) | ![Comp](images/create-stateless-widget-component.gif) |
| **Stateful** | ![Page](images/create-stateful-widget-page.gif) | ![Comp](images/create-stateful-widget-component.gif) |

<details>
<summary><b>View Advanced Framework Integrations (GetX, MobX, etc.)</b></summary>

### Custom Widget Types

### Create Stateless Widget as Component:

![Usage](images/create-stateless-widget-component.gif)

### Create Stateless Widget as Page:

![Usage](images/create-stateless-widget-page.gif)

### Create Stateful Widget as Component:

![Usage](images/create-stateful-widget-component.gif)

### Create Stateful Widget as Page:

![Usage](images/create-stateful-widget-page.gif )

### Settings for Creating Pages with Widgets

#### Create folder for Widgets Pages

![Usage](images/settings-create-folder-for-widgets-page.gif)

#### Suffix for Widgets as Pages (Page, Screen or View)

![Usage](images/settings-create-folder-for-widgets-suffix.gif)

To create a Stateless Widget, right-click on the folder where the widget will be created, choose
`🔶 Create Stateless Widget` and inform the name of the widget that will be created.

![Usage](images/create-stateless-widget.gif)

## Create Stateful Widget Example:

To create a Stateful Widget, right-click on the folder where the widget will be created, choose
`🔷 Create Stateful Widget` and inform the name of the widget that will be created.

![Usage](images/create-stateful-widget.gif)

### GetX Modern Architecture
Automatically generate bindings, controllers, and routes.
![GetX Feature](images/create-getx-feature.gif)

### MobX Stores
boilerplate-free store generation.
![MobX Store](images/create-mobx-store.gif)

### Domain Layers
Create professional interfaces for Providers, Repositories, and Services.
![Interfaces](images/create-services.gif)

### Core Classes
Generate DTOs, Models, and Singletons with standard patterns.
![Classes](images/create-class.gif)
</details>

---

## 🛠 Pro Code Actions

Intelligently wrap widgets using Visual Studio Code's code actions.
> **Tip**: Use `Alt + W` to select the entire widget before applying a wrapper for 100% accuracy.

<details>
<summary><b>View All 15+ Available Wrappers & Tooling</b></summary>

### Smart Interface Implementation
Automatically generate implementation files from interface definitions.
![Implements Interface](images/implements-interface.gif)

### Comprehensive Wrappers
Available actions include:
- `Wrap with LayoutBuilder`
- `Wrap with Expanded`, `Stack`, `Positioned`, `Align`
- `Wrap with ClipRRect`, `Hero`, `GestureDetector`
- `Wrap with SingleChildScrollView`, `SafeArea`, `Form`
- `Wrap with Obx` (GetX), `Observer` (MobX)

![Wrappers](images/wrap-with-layout-builder.gif)

> **Safety Warning**: If wrapping complex structures, use selection mode to avoid syntax breakage.
![Wrap Break](images/wrap-with-break-code.gif)
</details>

## ⚡ Snippet Library (160+)

Access high-speed snippets using the `ft-` prefix.

<details>
<summary><b>Expand Full Snippet Documentation</b></summary>

## Flutter and Dart

| Snippet                                                               | Description                                                                    |
|-----------------------------------------------------------------------|--------------------------------------------------------------------------------|
| `ft-imp-dart-date`                                                    | Adds Dart Date import                                                          |
| `ft-part`                                                             | Adds (.g) part file for main file                                              |
| `ft-part-of`                                                          | Adds part of main file                                                         |
| `ft-get-file-name`                                                    | Adds current filename in pascal case                                           |
| `ft-class`                                                            | Creates a class for the current file                                           |
| `ft-constructor-class`                                                | Creates a class constructor for the current file                               |
| `ft-constructor-class-with-named-params`                              | Creates a class constructor for the current file with named params             |
| `ft-private-construtor`                                               | Creates a private class constructor for the current file                       |
| `ft-private-attribute`                                                | Creates a private class attribute                                              |
| `ft-constr-inject-firebase-auth`                                      | Creates an injection for Firebase Auth - Complete                              |
| `ft-add-inject-firebase-auth`                                         | Adds an injection for Firebase Auth - Parts to include                         |
| `ft-constr-inject-controller`                                         | Creates an injection for Controller - Complete                                 |
| `ft-add-inject-controller`                                            | Adds an injection for Controller - Parts to include                            |
| `ft-constr-inject-i-class`                                            | Creates an injection for IClass - Complete                                     |
| `ft-constr-inject-class`                                              | Creates an injection for Class - Complete                                      |
| `ft-add-inject-i-class`                                               | Creates an injection for IClass - Parts to include                             |
| `ft-add-inject-class`                                                 | Creates an injection for Class - Parts to include                              |
| `ft-constr-inject-i-service`                                          | Creates an injection for IService - Complete                                   |
| `ft-constr-inject-service`                                            | Creates an injection for Service - Complete                                    |
| `ft-add-inject-i-service`                                             | Creates an injection for IService - Parts to include                           |
| `ft-add-inject-service`                                               | Creates an injection for Service - Parts to include                            |
| `ft-constr-inject-i-repository`                                       | Creates an injection for IRepository - Complete                                |
| `ft-constr-inject-repository`                                         | Creates an injection for Repository - Complete                                 |
| `ft-add-inject-i-repository`                                          | Adds an injection for IRepository - Parts to include                           |
| `ft-add-inject-repository`                                            | Adds an injection for Repository - Parts to include                            |
| `ft-constr-inject-session`                                            | Creates an injection for Session - Complete                                    |
| `ft-add-inject-session`                                               | Adds an injection for Session - Parts to include                               |
| `ft-constr-inject-i-provider`                                         | Creates an injection for IProvider - Complete                                  |
| `ft-constr-inject-provider`                                           | Creates an injection for Provider - Complete                                   |
| `ft-add-inject-i-provider`                                            | Adds an injection for IProvider - Parts to include                             |
| `ft-add-inject-provider`                                              | Adds an injection for Provider - Parts to include                              |
| `ft-constr-inject-rest-client`                                        | Creates an injection for RestClient - Complete                                 |
| `ft-add-inject-rest-client`                                           | Adds an injection for RestClient - Parts to include                            |
| `ft-constr-inject-i-api-storage`                                      | Creates an injection for ApiCacheStorageService - Complete                     |
| `ft-add-inject-i-api-storage`                                         | Adds an injection for ApiCacheStorageService - Parts to include                |
| `ft-constr-inject-i-local-storage`                                    | Creates an injection for ILocalStorageService - Complete                       |
| `ft-constr-inject-local-storage`                                      | Creates an injection for LocalStorageService - Complete                        |
| `ft-add-inject-i-local-storage`                                       | Adds an injection for ILocalStorageService - Parts to include                  |
| `ft-add-inject-local-storage`                                         | Adds an injection for LocalStorageService - Parts to include                   |
| `ft-constr-inject-i-session-storage`                                  | Creates an injection for ISessionStorageService - Complete                     |
| `ft-constr-inject-session-storage`                                    | Creates an injection for SessionStorageService - Complete                      |
| `ft-add-inject-i-session-storage`                                     | Adds an injection for ISessionStorageService - Parts to include                |
| `ft-add-inject-session-storage`                                       | Adds an injection for SessionStorageService - Parts to include                 |
| `ft-constr-inject-rest-client-with-i-api-storage`                     | Creates an injection for RestClient and ApiCacheStorageService - Complete      |
| `ft-if-not`                                                           | Creates an if denying the condition                                            |
| `ft-if-return`                                                        | Creates an if with return if condition was truthy                              |
| `ft-if-not-return`                                                    | Creates an if with return if condition was falsy                               |
| `ft-if-not-mounted`                                                   | Creates an if with return if StateFull Widget it'n mounted                     |
| `ft-if-context-not-mounted`                                           | Creates an if with return if context it'n mounted                              |
| `ft-if-context-mounted`                                               | Creates an if for mounted context                                              |
| `ft-if-null`                                                          | Creates an if for null condition                                               |
| `ft-if-not-null`                                                      | Creates an if for not null condition                                           |
| `ft-if-contains`                                                      | Creates an if for check if String contains term                                |
| `ft-cm-basic`                                                         | Creates a basic comment                                                        |
| `ft-cm-block`                                                         | Creates a block comment                                                        |
| `ft-cm-section`                                                       | Creates a section comment                                                      |
| `ft-cm-subsection`                                                    | Creates a subsection comment                                                   |
| `ft-cm-section-footer`                                                | Creates a footer comment                                                       |
| `ft-cm-element-block`                                                 | Creates a documentation comment                                                |
| `ft-delayed-zero`                                                     | Adds a Future.delayed(Duration.zero) instruction                               |
| `ft-delayed-seconds`                                                  | Adds a Future.delayed instruction                                              |
| `ft-delayed-seconds-with-callback`                                    | Adds a Future.delayed instruction with a callback function                     |
| `ft-duration`                                                         | Adds a Duration instruction                                                    |
| `ft-final-void-function`                                              | Adds property as a void Function()                                             |
| `ft-final-void-call-back`                                             | Adds property as a VoidCallback function                                       |
| `ft-form-key`                                                         | Adds a variable of type GlobalKey<FormState>()                                 |
| `ft-form-key-private`                                                 | Adds a private variable of type GlobalKey<FormState>()                         |
| `ft-focus-node`                                                       | Adds a variable of type FocusNode()                                            |
| `ft-focus-node-private`                                               | Adds a private variable of type FocusNode()                                    |
| `ft-text-editing-controller`, `ft-editing-controller`                 | Adds a variable of type TextEditingController()                                |
| `ft-text-editing-controller-private`, `ft-editing-controller-private` | Adds a private variable of type TextEditingController()                        |
| `ft-list-from-map-and-json`                                           | Adds two functions fromMap and fromJson to create lists from map data          |
| `ft-prop-eq`                                                          | Adds a key and value assignment to an object where the key and value are equal |
| `ft-prop-eq-map`                                                      | Adds a key and value assignment to an map where the key and value are equal    |
| `ft-throw-exception`                                                  | Adds the instruction throw Exception()                                         |
| `ft-throw-app-exception`                                              | Adds the instruction throw AppException()                                      |
| `ft-throw-auth-exception`                                             | Adds the instruction throw AuthException()                                     |
| `ft-await`                                                            | Adds the instruction await                                                     |
| `ft-final-simple`                                                     | Adds a simple assignment variable                                              |
| `ft-final-await`                                                      | Adds a future assignment variable                                              |
| `ft-final-future-wait`                                                | Adds a future assignment variable for multiple futures processing              |
| `ft-build-context`                                                    | Adds a declaration for BuildContext                                            |
| `ft-date-format-dd-mm-yyyy`                                           | Adds a variable of type DateFormat('dd/MM/y')                                  |
| `ft-future-method`                                                    | Adds a Future method                                                           |
| `ft-future-void-method`                                               | Adds a Future void method                                                      |
| `ft-void-method`                                                      | Adds a void method                                                             |
| `ft-form-is-valid`                                                    | Check if a form is valid                                                       |
| `ft-get-property`                                                     | Adds a get property                                                            |
| `ft-static-get-property`                                              | Adds a static get property                                                     |
| `ft-signature-static-method`                                          | Add a signature to a static method                                             |
| `ft-signature-method`                                                 | Add a signature to method                                                      |
| `ft-static-method`                                                    | Adds a static method                                                           |
| `ft-signature-future-static-method`                                   | Adds a signature of a future static method                                     |
| `ft-signature-future-method`                                          | Adds a signature of a future method                                            |
| `ft-future-static-method`                                             | Adds a future static method                                                    |
| `ft-value-notifier`                                                   | Creates a ValueNotifier attribute                                              |
| `widgets-binding-add-post-frame-callback`                             | Adds WidgetsBinding.instance.addPostFrameCallback() to be used in initState()  |

## Widgets

| Snippet                                            | Description                                                                     |
|----------------------------------------------------|---------------------------------------------------------------------------------|
| `ft-border-side`                                   | Adds borderSide property using BorderSide() with width and color                |
| `ft-border-side-color`                             | Adds borderSide property using BorderSide() with color                          |
| `ft-shape-circle-border`                           | Adds a shape property using CircleBorder()                                      |
| `ft-shape-rounded-rectangle-border`                | Adds a shape property using RoundedRectangleBorder()                            |
| `ft-main-axis-size`                                | Adds mainAxisSize property using MainAxisSize to Row() or Column()              |
| `ft-main-axis-alignment`                           | Adds mainAxisAlignment property using MainAxisAlignment to Row() or Column()    |
| `ft-cross-axis-alignment`                          | Adds crossAxisAlignment property using CrossAxisAlignment to Row() or Column()  |
| `ft-alignment`                                     | Adds alignment property using Alignment                                         |
| `ft-wrap-alignment`                                | Adds alignment property using WrapAlignment                                     |
| `ft-wrap-cross-axis-alignment`                     | Adds crossAxisAlignment property using WrapCrossAlignment                       |
| `ft-font-weight`                                   | Adds FontWeight                                                                 |
| `ft-text-decoration`                               | Adds TextDecoration for Underline, LineThrough, Overline and Combine Options    |
| `ft-text-decoration-thickness`                     | Adds TextDecoration Thickness                                                   |
| `ft-text-align`                                    | Adds TextAlign                                                                  |
| `ft-0xff`, `ft-hex-color`                          | Adds a Hexadecimal Color                                                        |
| `ft-color-hex`                                     | Adds a color property using a Hexadecimal Color                                 |
| `ft-color`                                         | Adds a color property using Colors                                              |
| `ft-background-color`                              | Adds a backgroundColor property using Colors                                    |
| `ft-background-color-hex`                          | Adds a backgroundColor property using a Hexadecimal Color                       |
| `ft-color-theme`                                   | Adds a color property using Theme.of(context)                                   |
| `ft-theme-of`                                      | Adds a color using Theme.of(context)                                            |
| `ft-text-overflow`                                 | Adds an overflow property using TextOverflow.ellipsis                           |
| `ft-space-vertical`, `ft-separator-vertical`       | Adds a vertical spacing between widgets using SizedBox                          |
| `ft-space-horizontal`, `ft-separator-horizontal`   | Adds a horizontal spacing between widgets using SizedBox                        |
| `ft-gap`                                           | Adds a horizontal or vertical spacing between widgets using Gap                 |
| `ft-space-shrink`                                  | Adds a SizedBox.shrink()                                                        |
| `ft-margin-all`                                    | Adds margin property using EdgeInsets.all()                                     |
| `ft-margin-symmetric`                              | Adds margin property using EdgeInsets.symmetric()                               |
| `ft-margin-only`                                   | Adds margin property using EdgeInsets.only()                                    |
| `ft-padding-all`                                   | Adds padding property using EdgeInsets.all()                                    |
| `ft-content-padding-all`                           | Adds contentPadding property using EdgeInsets.all()                             |
| `ft-padding-symmetric`                             | Adds padding property using EdgeInsets.symmetric()                              |
| `ft-content-padding-symmetric`                     | Adds contentPadding property using EdgeInsets.symmetric()                       |
| `ft-padding-only`                                  | Adds padding property using EdgeInsets.only()                                   |
| `ft-content-padding-only`                          | Adds contentPadding property using EdgeInsets.only()                            |
| `ft-padding-zero`                                  | Adds padding property using EdgeInsets.zero                                     |
| `ft-content-padding-zero`                          | Adds contentPadding property using EdgeInsets.zero                              |
| `ft-edge-insets-zero`                              | Adds EdgeInsets.zero                                                            |
| `ft-border-all`                                    | Adds border property using Border.all()                                         |
| `ft-border-symmetric`                              | Adds border property using Border.symmetric()                                   |
| `ft-bouncing-scroll-physics`                       | Adds physics property using BouncingScrollPhysics()                             |
| `ft-direction`                                     | Adds direction property using Axis                                              |
| `ft-scroll-direction`                              | Adds scrollDirection property using Axis                                        |
| `ft-navigator-pop`                                 | Adds Navigator instruction using pop                                            |
| `ft-navigator-pop-until`                           | Adds Navigator instruction using popUntil                                       |
| `ft-navigator-pop-and-push-named`                  | Adds Navigator instruction using popAndPushNamed                                |
| `ft-navigator-push-named`                          | Adds Navigator instruction using pushNamed                                      |
| `ft-navigator-push-replacement-named`              | Adds Navigator instruction using pushReplacementNamed                           |
| `ft-navigator-push-named-and-remove-util`          | Adds Navigator instruction using pushNamedAndRemoveUntil                        |
| `ft-navigator-of-pop`                              | Adds Navigator.of(context) instruction using pop                                |
| `ft-navigator-of-pop-until`                        | Adds Navigator.of(context) instruction using popUntil                           |
| `ft-navigator-of-pop-and-push-named`               | Adds Navigator.of(context) instruction using popAndPushNamed                    |
| `ft-navigator-of-push-named`                       | Adds Navigator.of(context) instruction using pushNamed                          |
| `ft-navigator-of-push-replacement-named`           | Adds Navigator.of(context) instruction using pushReplacementNamed               |
| `ft-navigator-of-push-named-and-remove-util`       | Adds Navigator.of(context) instruction using pushNamedAndRemoveUntil            |
| `ft-navigator-pop`                                 | Adds Navigator instruction using pop                                            |
| `ft-navigator-push-named`                          | Adds Navigator instruction using pushNamed                                      |
| `ft-navigator-push-named-and-remove-util`          | Adds Navigator instruction using pushNamedAndRemoveUntil                        |
| `ft-navigator-push`                                | Adds Navigator instruction using MaterialPageRoute                              |
| `ft-navigator-push-and-remove-until`               | Adds Navigator instruction using PageRouteBuilder                               |
| `ft-media-query`                                   | Adds MediaQuery instruction using size                                          |
| `ft-app-bar-theme`                                 | Adds appBarTheme property using AppBarTheme()                                   |
| `ft-app-bar-brightness`                            | Adds brightness property using Brightness                                       |
| `ft-text-style`                                    | Adds style property using TextStyle() with color, fontSize and fontWeight       |
| `ft-text-style-weight`                             | Adds style property using TextStyle() only for fontWeight                       |
| `ft-text-style-size`                               | Adds style property using TextStyle() only for fontSize                         |
| `ft-text-style-color`                              | Adds style property using TextStyle() only for color                            |
| `ft-text-style-theme-of`                           | Adds style property using Theme.of(context).textTheme                           |
| `ft-image-asset`                                   | Adds Image Widget from assets                                                   |
| `ft-image-asset-plus`                              | Adds Image Widget from assets with properties height, width and fit             |
| `ft-image-network`                                 | Adds Image Widget from network                                                  |
| `ft-image-network-plus`                            | Adds Image Widget from network with properties height, width and fit            |
| `ft-fit-box-fit`                                   | Adds fit property using BoxFit                                                  |
| `ft-icon-button`                                   | Adds IconButton Widget with properties icon, color, iconSize and onPressed      |
| `ft-elevated-rectangle-button`                     | Adds ElevatedButton Widget using BorderRadius()                                 |
| `ft-elevated-circ-button`                          | Adds ElevatedButton Widget using CircleBorder()                                 |
| `ft-decoration`                                    | Adds decoration property using BoxDecoration                                    |
| `ft-input-decoration`                              | Adds decoration property using InputDecoration                                  |
| `ft-decoration-with-decoration-image`              | Adds decoration property using BoxDecoration and DecorationImage                |
| `ft-decoration-asset-image`                        | Adds image property using DecorationImage and AssetImage                        |
| `ft-decoration-network-image`                      | Adds image property using DecorationImage and NetworkImage                      |
| `ft-shape-with-border-radius`                      | Adds shape property using RoundedRectangleBorder with BorderRadius.circular()   |
| `ft-decoration-with-border-radius`                 | Adds decoration property using BoxDecoration with BorderRadius.circular()       |
| `ft-border-radius`                                 | Adds borderRadius property using BorderRadius.circular()                        |
| `ft-shape-with-border-radius-only`                 | Adds shape property using RoundedRectangleBorder with BorderRadius.only()       |
| `ft-decoration-with-border-radius-only`            | Adds decoration property using BoxDecoration with BorderRadius.only()           |
| `ft-border-radius-only`                            | Adds borderRadius property using BorderRadius.only()                            |
| `ft-shape-with-border-radius-vertical`             | Adds shape property using RoundedRectangleBorder with BorderRadius.vertical()   |
| `ft-decoration-with-border-radius-vertical`        | Adds decoration property using BoxDecoration with BorderRadius.vertical()       |
| `ft-border-radius-vertical`                        | Adds borderRadius property using BorderRadius.vertical()                        |
| `ft-shape-with-border-radius-horizontal`           | Adds shape property using RoundedRectangleBorder with BorderRadius.horizontal() |
| `ft-decoration-with-border-radius-horizontal`      | Adds decoration property using BoxDecoration with BorderRadius.horizontal()     |
| `ft-border-radius-horizontal`                      | Adds borderRadius property using BorderRadius.horizontal()                      |
| `ft-decoration-with-box-shadow`                    | Adds decoration property using BoxDecoration with BoxShadow                     |
| `ft-box-shadow`                                    | Adds boxShadow property using BoxShadow                                         |
| `ft-decoration-with-box-shadow-bottom-sheet`       | Adds decoration property using BoxDecoration with BoxShadow for Bottom Sheet    |
| `ft-box-shadow-bottom-sheet`                       | Adds boxShadow property using BoxShadow for Bottom Sheet                        |
| `ft-column`                                        | Adds Column Widget                                                              |
| `ft-row`                                           | Adds Row Widget                                                                 |
| `ft-wrap`                                          | Adds Wrap Widget                                                                |
| `ft-stack`                                         | Adds Stack Widget                                                               |
| `ft-custom-scroll-view-with-sliver-to-box-adapter` | Adds CustomScrollView Widget with SliverToBoxAdapter                            |
| `ft-custom-scroll-view-with-sliver-fill-remaining` | Adds CustomScrollView Widget with SliverFillRemaining                           |
| `ft-text`                                          | Adds Text Widget                                                                |
| `ft-text-style-context`                            | Adds Text Widget with style from context. (Needs extensions created)            |
| `ft-text-span`                                     | Adds TextSpan Widget with text property                                         |
| `ft-text-span-children`                            | Adds TextSpan Widget with children property                                     |
| `ft-outlined-icon-button`                          | Adds OutlinedButton Widget with Icon                                            |
| `ft-status-bar-icon-brightness`                    | Sets the color for statusBarIconBrightness                                      |
| `ft-text-input-action`, `ft-input-action`          | Adds textInputAction property using TextInputAction                             |
| `ft-text-capitalization`                           | Adds textCapitalization property using TextCapitalization                       |
| `ft-keyboard-type`, `ft-input-type`                | Adds keyboardType property using TextInputType                                  |
| `ft-ensure-initialized`                            | Adds the instruction WidgetsFlutterBinding.ensureInitialized();                 |
| `ft-scaffold`                                      | Adds Scaffold Widget                                                            |
| `ft-popup-menu-button`                             | Adds PopupMenuButton Widget                                                     |
| `ft-constraints-box-constraints`                   | Adds constraints property using BoxConstraints                                  |
| `ft-add-initialize-date-formatting`                | Adds initializeDateFormatting()                                                 |
| `ft-add-locales-pt-br`                             | Adds localizations for pt-BR                                                    |
| `ft-text-shadow`                                   | Adds shadows property using Shadow to use in Text Widget                        |
| `ft-text-rich`                                     | Adds Text.rich Widget                                                           |
| `ft-font-size-values`                              | Adds the font sizes values                                                      |
| `ft-padding-values`                                | Adds the padding values                                                         |
| `ft-space-values`, `ft-separator-values`           | Adds the space/separator values                                                 |
| `ft-border-radius-values`                          | Adds the border radius values                                                   |
| `ft-border-side-values`                            | Adds the border side values                                                     |
| `ft-icon`                                          | Adds an icon from Google Fonts                                                  |
| `ft-phosphor-icon`                                 | Adds an icon from PhosphorIcon package                                          |
| `ft-navigator-context`                             | Get the Navigator.of(context)                                                   |

## GetX

| Snippet                           | Description                                                                 |
|-----------------------------------|-----------------------------------------------------------------------------|
| `ft-imp-get`                      | Adds GetX import                                                            |
| `ft-rx-attribute`                 | Creates a Rx attribute                                                      |
| `ft-rxn-attribute`                | Creates a Rxn attribute                                                     |
| `ft-obs-attribute`                | Creates a GetX Observable attribute                                         |
| `ft-get-size`                     | Uses GetX to get width or height of screen                                  |
| `ft-get-find`                     | Adds the Get.find() the get instance of class using GetX                    |
| `ft-get-width`                    | Uses GetX to get width of screen                                            |
| `ft-get-height`                   | Uses GetX to get height of screen                                           |
| `ft-width-get-width`              | Adds width property using Get.width                                         |
| `ft-height-get-height`            | Adds width property using Get.height                                        |
| `ft-get-put-service`              | Adds Get.put() instruction for Service()                                    |
| `ft-get-put-service-impl`         | Adds Get.put() instruction for ServiceImpl()                                |
| `ft-get-put-session`              | Adds Get.put() instruction for Session()                                    |
| `ft-get-put-repository`           | Adds Get.put() instruction for Repository()                                 |
| `ft-get-put-repository-impl`      | Adds Get.put() instruction for RepositoryImpl()                             |
| `ft-get-put-provider`             | Adds Get.put() instruction for Provider()                                   |
| `ft-get-put-provider-impl`        | Adds Get.put() instruction for ProviderImpl()                               |
| `ft-get-view`                     | Adds GetView instruction for get instance of controller inside view         |
| `ft-get-put-controller`           | Adds Get.put() instruction for Controller()                                 |
| `ft-get-lazy-put-controller`      | Adds Get.lazyPut() instruction for Controller()                             |
| `ft-get-lazy-put-provider`        | Adds Get.lazyPut() instruction for Provider() used by a Service()           |
| `ft-get-lazy-put-provider-impl`   | Adds Get.lazyPut() instruction for ProviderImpl() used by a ServiceImpl()   |
| `ft-get-lazy-put-service`         | Adds Get.lazyPut() instruction for Service()                                |
| `ft-get-lazy-put-service-impl`    | Adds Get.lazyPut() instruction for ServiceImpl()                            |
| `ft-get-lazy-put-repository`      | Adds Get.lazyPut() instruction for Repository() used by a Service()         |
| `ft-get-lazy-put-repository-impl` | Adds Get.lazyPut() instruction for RepositoryImpl() used by a ServiceImpl() |
| `ft-on-init`                      | Adds override for onInit method                                             |
| `ft-on-ready`                     | Adds override for onReady method                                            |
| `ft-on-close`                     | Adds override for onClose method                                            |

## Provider

| Snippet                              | Description                                                                           |
|--------------------------------------|---------------------------------------------------------------------------------------|
| `ft-context-read-provider`           | Adds the context.read() to get instance of class using Provider                       |
| `ft-context-read-provider-data`      | Adds the context.read<type>() to get instance of Controller class using Provider      |
| `ft-context-watch-provider`          | Adds the context.watch<type>() to watch instance of class using Provider              |
| `ft-context-select-provider`         | Adds the context.select<ClassName, type>() to select instance of class using Provider |
| `ft-provider-create`                 | Adds Provider() instruction for Bloc, Cubit or Controller                             |
| `ft-provider-create-class`           | Adds Provider() instruction for for IClass                                            |
| `ft-provider-create-class-impl`      | Adds Provider() instruction for for Class                                             |
| `ft-provider-create-controller`      | Adds Provider() instruction for Controller()                                          |
| `ft-provider-create-provider`        | Adds Provider() instruction for Provider() used by a Service()                        |
| `ft-provider-create-provider-impl`   | Adds Provider() instruction for ProviderImpl() used by a ServiceImpl()                |
| `ft-provider-create-service`         | Adds Provider() instruction for Service()                                             |
| `ft-provider-create-service-impl`    | Adds Provider() instruction for ServiceImpl()                                         |
| `ft-provider-create-repository`      | Adds Provider() instruction for Repository() used by a Service()                      |
| `ft-provider-create-repository-impl` | Adds Provider() instruction for RepositoryImpl() used by a ServiceImpl()              |

## Bloc/Cubit

| Snippet                    | Description                            |
|----------------------------|----------------------------------------|
| `ft-bloc-router`           | Creates a Bloc Router Module           |
| `ft-bloc-router-with-args` | Creates a Bloc Router Module with args |
| `ft-get-navigation-args`   | Get args from ModalRoute               |

## Modular

| Snippet                                     | Description                                                                                              |
|---------------------------------------------|----------------------------------------------------------------------------------------------------------|
| `ft-modular-get`                            | Adds the Modular.get() the get instance of class using Flutter Modular                                   |
| `ft-modular-get-data`                       | Adds the Modular.get<type>() to get instance of Controller class using Flutter Modular                   |
| `ft-modular-get-controller`                 | Adds the Modular.get() for controller the get instance of class using Flutter Modular                    |
| `ft-modular-get-of-type`                    | Adds the Modular.get<Class>() to get instance of class using Flutter Modular                             |
| `ft-modular-to-navigate`                    | Navigate to a new screen                                                                                 |
| `ft-modular-to-push-named`                  | Navigate to a route                                                                                      |
| `ft-module-route-v5`                        | Adds ModuleRoute to Module                                                                               |
| `ft-child-route-v5`                         | Adds ChildRoute to Module                                                                                |
| `ft-child-route-with-router-outlet-v5`      | Adds ChildRoute with RouterOutlet to Module                                                              |
| `ft-bind-lazy-singleton-class-v5`           | Adds Bind.lazySingleton() instruction for any Class using Flutter Modular                                |
| `ft-bind-lazy-singleton-class-impl-v5`      | Adds Bind.lazySingleton() instruction for any ClassImpl using Flutter Modular                            |
| `ft-bind-lazy-singleton-controller-v5`      | Adds Bind.lazySingleton() instruction for Controller using Flutter Modular                               |
| `ft-bind-lazy-singleton-repository-v5`      | Adds Bind.lazySingleton() instruction for Repository() used by a Service() using Flutter Modular         |
| `ft-bind-lazy-singleton-repository-impl-v5` | Adds Bind.lazySingleton() instruction for RepositoryImpl() used by a ServiceImpl() using Flutter Modular |
| `ft-bind-lazy-singleton-service-v5`         | Adds Bind.lazySingleton() instruction for Service() using Flutter Modular                                |
| `ft-bind-lazy-singleton-service-impl-v5`    | Adds Bind.lazySingleton() instruction for ServiceImpl() using Flutter Modular                            |
| `ft-module-route-v6`                        | Adds ModuleRoute to Module                                                                               |
| `ft-child-route-v6`                         | Adds ChildRoute to Module                                                                                |
| `ft-bind-lazy-singleton-class-v6`           | Adds i.addLazySingleton() instruction for any Class using Flutter Modular                                |
| `ft-bind-lazy-singleton-class-impl-v6`      | Adds i.addLazySingleton() instruction for any ClassImpl using Flutter Modular                            |
| `ft-bind-lazy-singleton-controller-v6`      | Adds i.addLazySingleton() instruction for Controller using Flutter Modular                               |
| `ft-bind-lazy-singleton-repository-v6`      | Adds i.addLazySingleton() instruction for Repository() used by a Service() using Flutter Modular         |
| `ft-bind-lazy-singleton-repository-impl-v6` | Adds i.addLazySingleton() instruction for RepositoryImpl() used by a ServiceImpl() using Flutter Modular |
| `ft-bind-lazy-singleton-service-v6`         | Adds i.addLazySingleton() instruction for Service() using Flutter Modular                                |
| `ft-bind-lazy-singleton-service-impl-v6`    | Adds i.addLazySingleton() instruction for ServiceImpl() using Flutter Modular                            |

## Riverpod

| Snippet                                | Description                                 |
|----------------------------------------|---------------------------------------------|
| `ft-riverpod-provider-rest-client`     | Adds Riverpod provider for RestClient()     |
| `ft-riverpod-provider-class`           | Adds Riverpod provider for class()          |
| `ft-riverpod-provider-session-class`   | Adds Riverpod provider for Session class()  |
| `ft-riverpod-provider-repository`      | Adds Riverpod provider for Repository()     |
| `ft-riverpod-provider-repository-impl` | Adds Riverpod provider for RepositoryImpl() |
| `ft-riverpod-provider-service`         | Adds Riverpod provider for Service()        |
| `ft-riverpod-provider-service-impl`    | Adds Riverpod provider for ServiceImpl()    |

## Linter (analysis_options.yaml)

| Snippet                            | Description                                               |
|------------------------------------|-----------------------------------------------------------|
| `ft-linter-analyzer`               | Configures the analyzer options                           |
| `ft-linter-rules`                  | Includes many rules for the linter to improve development |
| `ft-build-runner-options-bloc`     | Configures the build-runner options for Bloc              |
| `ft-build-runner-options-riverpod` | Configures the build-runner options for Riverpod          |

</details>

---

## ⚙️ Advanced Configuration

Fine-tune how Flutter Tools Pro generates code to match your team's style.

<details>
<summary><b>View All Available Settings</b></summary>

The **Flutter Tools Pro** allows extensive customization of behavior for Interfaces, GetX Features, and MobX Stores.

- **Create Folder for Interfaces**: Toggle automatic nesting.
- **GetX Use Constructor Tear-offs**: modern Dart syntax support.
- **Use `I` Prefix**: Enforce interface naming conventions.

![Settings](images/settings-create-folder-interfaces.gif)

</details>

---

<p align="center">
  <b>Enjoy high-velocity Flutter development!</b><br/>
  © 2026 Extensions Hub Team
</p>
