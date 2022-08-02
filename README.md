<p align="center">
  <br />
  <a title="Learn more about Flutter Tools" href="https://github.com/ricardoemerson/create-flutter-widgets-and-classes">
    <img src="https://raw.githubusercontent.com/ricardoemerson/create-flutter-widgets-and-classes/master/images/cover-logo.png" alt="Flutter Tools Logo" width="256"  height="256"/>
    </a>
</p>

# What's new in Flutter Tools 2.5.0

- Cleaned up the context menu, removing the items below and added new options via VSCode QuickPick:
  - `Create Controller`
  - `Create DTO`
  - `Create Provider Interface`
  - `Create Repository Interface`
  - `Create Service Interface`
  - `Create Model`
  - `Create Singleton Class`
- Now when choose `Create Stateless Widget` or `Create Stateful Widget` it's possible to choose if a widget will be created as `Component` or `Page`.
- Now when choose `Create MobX Store` it's possible to choose if the suffix name of MobX Store will be created as `Controller` or `Store`.
- Now when choose `Create Class` it's possible to choose the options bellow:
  - `Create Class`
  - `Create Controller Class`
  - `Create Controller Class with ChangeNotifier`
  - `Create DTO Class`
  - `Create Enum`
  - `Create Exception Class`
  - `Create Extension`
  - `Create Helper Class`
  - `Create Interface Class`
  - `Create Mixin`
  - `Create Model Class`
  - `Create Singleton Class`
- Now when choose `Create Interface` it's possible to choose the options bellow:
  - `Create Interface Class`
  - `Create Provider Interface`
  - `Create Repository Interface`
  - `Create Service Interface`
- Added the wrapper `Wrap with ValueListenableBuilder`.
- Added the wrapper `Wrap with InkWell`.
- Updated the template of the wrapper `Wrap with LayoutBuilder`.
- Added configuration of Widgets Page file suffix.
- Added configuration of Create Folder for Widgets Page.
- Removed configuration of MobX file suffix.

# What's new in Flutter Tools 2.4.1

- Changed the template file for Stateful Widgets to avoid this warning `Avoid using private types in public APIs`.

# What's new in Flutter Tools 2.4.0

- Added the context menu item `Create Singleton Class`.

# What's new in Flutter Tools 2.3.1

- For the resource's routes file, a static const variable has been added with the path of the route to represent it, such as `static const home = '/home';` . With this, it is now possible to navigate to a route, for example using `Get.toNamed(HomeRoutes.home);`.
- Added key into Widgets constructors.

# Support

**Flutter Tools** is an extension created for **Visual Studio Code** to be used in your Flutter projects.

> ## This extension has a lot of features, please consider donating so I can continue to add new features.

<table align="center" width="100%" border="0">
  <tr>
    <td >
      <a title="PayPal" href="https://www.paypal.com/donate?hosted_button_id=X26H7L6AVMD96">
        <img src="https://raw.githubusercontent.com/ricardoemerson/create-flutter-widgets-and-classes/master/images/donate-with-paypal.png" alt="Flutter Tools Logo" width="180"  height="80"/>
      </a>
    </td>
    <td>
      <a title="Mercado Pago" href="https://mpago.la/1LvP93a">
        <img src="https://raw.githubusercontent.com/ricardoemerson/create-flutter-widgets-and-classes/master/images/donate-with-mercado-pago.png" alt="Flutter Tools Logo" width="220"  height="65"/>
      </a>
    </td>
  </tr>
</table>


# Flutter Tools

[![Version](https://vsmarketplacebadge.apphb.com/version/ricardo-emerson.create-flutter-widgets-and-classes.svg)](https://marketplace.visualstudio.com/items?itemName=ricardo-emerson.create-flutter-widgets-and-classes)
[![Install](https://vsmarketplacebadge.apphb.com/installs/ricardo-emerson.create-flutter-widgets-and-classes.svg)](https://marketplace.visualstudio.com/items?itemName=ricardo-emerson.create-flutter-widgets-and-classes)
[![Downloads](https://vsmarketplacebadge.apphb.com/downloads/ricardo-emerson.create-flutter-widgets-and-classes.svg)](https://marketplace.visualstudio.com/items?itemName=ricardo-emerson.create-flutter-widgets-and-classes)
[![Ratings](https://vsmarketplacebadge.apphb.com/rating-short/ricardo-emerson.create-flutter-widgets-and-classes.svg)](https://marketplace.visualstudio.com/items?itemName=ricardo-emerson.create-flutter-widgets-and-classes&ssr=false#review-details)

This extension creates Stateless Widgets, Stateful Widgets, GetX App Structure, GetX Features, GetX Services, MobX Store, Classes, Interfaces, and you can also apply to existing widgets the following wrappers in your Flutter projects:

- `Wrap with LayoutBuilder`
- `Wrap with Expanded`
- `Wrap with Stack`
- `Wrap with Positioned`
- `Wrap with Align`
- `Wrap with ClipRRect`
- `Wrap with Hero`
- `Wrap with GestureDetector`
- `Wrap with SingleChildScrollView`
- `Wrap with SafeArea`
- `Wrap with Form`
- `Wrap with Obx`
- `Wrap with Observer`


# Usage Examples

> All the examples shown below were performed using the extension's default settings. In your project feel free to customize as you wish.

You can create Stateless Widgets, Stateful Widgets, GetX App Structures, GetX Features, GetX Services, MobX Store, Classes and Interfaces by right clicking on any folder in the tree view and using the following options:

![Usage](images/usage-right-mouse-click.png)


# Widgets

## Create Stateless Widget Example:

To create a Stateless Widget, right-click on the folder where the widget will be created, choose `🔶 Create Stateless Widget` and inform the name of the widget that will be created.

![Usage](images/create-stateless-widget.gif)


## Create Stateful Widget Example:

To create a Stateful Widget, right-click on the folder where the widget will be created, choose `🔷 Create Stateful Widget` and inform the name of the widget that will be created.

![Usage](images/create-stateful-widget.gif)


# GetX

## Create GetX App Structure Example:

> You need to have the `get` package installed in your `pubspec.yaml`

To create a GetX App Structure, right-click on the `lib` folder and choose `📂 Create GetX App Structure`.

![Usage](images/create-getx-app-structure.gif)

The folders that will be created by the command `📂 Create GetX App Structure`:

![Usage](images/getx-app-structure.png)

If you not will use some folder, just delete it from your project.


## Create GetX Feature Example:

> You need to have the `get` package installed in your `pubspec.yaml`

To create a GetX resource that is composed of the `view`, `controller`, `binding` and `route` files, right-click on the `modules` folder or any subfolder inside it and choose `📑 Create GetX Feature`.

![Usage](images/create-getx-feature.gif)

You can create a folder to group GetX resources. In this case the name of the route file will be the name of the folder created, as we can see in the example below:

![Usage](images/create-getx-feature-folder-group.gif)


## Create GetX Service Example:

> You need to have the `get` package installed in your `pubspec.yaml`

To create a GetX Service, right-click on the desired folder and choose  `🗃️ Create GetX Service`.

![Usage](images/create-getx-service.gif)


# MobX

## Create MobX Store

> You need to have the `mobx and flutter_mobx` package installed in your `pubspec.yaml`

To create a MobX Store, right-click on the desired folder and choose `📦 Create MobX Store`.

![Usage](images/create-mobx-store.gif)


# Interface for Providers, Repositories and Services

## Create Provider Interface Example:

Select the folder where the Provider Interface will be created and choose `📄 Create Provider Interface` and enter the name of the provider interface to be created.

![Usage](images/create-providers.gif)


## Create Repository Interface Example:

Select the folder where the Repository Interface will be created and choose `📄 Create Repository Interface` and enter the name of the repository interface to be created.

![Usage](images/create-repositories.gif)


## Create Service Interface Example:

Select the folder where the Service Interface will be created and choose `📄 Create Service Interface` and enter the name of the service interface to be created.

![Usage](images/create-services.gif)

# Classes

## Create Class Example:

Select the folder where the class will be created and choose `📝 Create Dart Class` and enter the name of the class to be created.

![Usage](images/create-class.gif)


## Create Controller Example:

Select the folder where the controller will be created and choose `📝 Create Controller` and enter the name of the controller to be created.

![Usage](images/create-controller.gif)


## Create DTO Example:

Select the folder where the DTO will be created and choose `📝 Create DTO` and enter the name of the DTO to be created.

![Usage](images/create-dto.gif)


## Create Interface Example:

Select the folder where the interface will be created and choose `📝 Create Interface` and enter the name of the interface to be created.

![Usage](images/create-interface.gif)


## Create Model Example:

Select the folder where the model will be created and choose `📝 Create Model` and enter the name of the model to be created.

![Usage](images/create-model.gif)


## Create Singleton Class Example:

Select the folder where the model will be created and choose `📝 Create Singleton Class` and enter the name of the singleton class to be created.

![Usage](images/create-singleton-class.gif)


# Code Actions

## Code action Implements Interface:

In interfaces files it is possible to use the code action `Implements interface` to create interface implementation file case it is not implemented yet or when already exists and you want create another implementation of interface.

![Usage](images/implements-interface.gif)


# Extra wrappers

Use the code actions of Visual Studio Code to wrap a widget with one of the following wrappers:

- `Wrap with LayoutBuilder`
- `Wrap with Expanded`
- `Wrap with Stack`
- `Wrap with Positioned`
- `Wrap with Align`
- `Wrap with ClipRRect`
- `Wrap with Hero`
- `Wrap with GestureDetector`
- `Wrap with SingleChildScrollView`
- `Wrap with SafeArea`
- `Wrap with Form`
- `Wrap with Obx`
- `Wrap with Observer`

## Wrap with LayoutBuilder

![Usage](images/wrap-with-layout-builder.gif)

## Wrap with Expanded

![Usage](images/wrap-with-expanded.gif)

## Wrap with Stack

![Usage](images/wrap-with-stack.gif)

## Wrap with Positioned

![Usage](images/wrap-with-positioned.gif)

## Wrap with Align

![Usage](images/wrap-with-align.gif)

## Wrap with ClipRRect

![Usage](images/wrap-with-clip-rrect.gif)

## Wrap with Hero

![Usage](images/wrap-with-hero.gif)

## Wrap with GestureDetector

![Usage](images/wrap-with-gesture-detector.gif)

## Wrap with SingleChildScrollView

![Usage](images/wrap-with-single-child-scroll-view.gif)

## Wrap with SafeArea

![Usage](images/wrap-with-safe-area.gif)

## Wrap with Form

![Usage](images/wrap-with-form.gif)

## Wrap with Obx

In case of use of `GetX`, it is possible to wrapper a widget that uses an observable property with the widget `Obx` from lib [`get`](https://pub.dev/packages/get).

![Usage](images/wrap-with-obx.gif)

## Wrap with Observer

In case of use of `MobX`, it is possible to wrapper a widget that uses an observable property with the widget `Observer` from lib [`flutter_mobx`](https://pub.dev/packages/flutter_mobx).

![Usage](images/wrap-with-observer.gif)

## If wrap fails and breaks the code?

In some widgets structures by positioning the cursor over the widget which will be surrounded by new widget may cause breaking the code.

![Usage](images/wrap-with-break-code.gif)

In this case, undo the last operation and select all the widget that will be wrapped using the shorcut `Alt` + `W`, then use Visual Studio Code `code actions` and choose the appropriate wrapper.

![Usage](images/wrap-with-selecting.gif)


# Settings

The **Flutter Tools** has many settings that change it's behavior when creating Interfaces, GetX Features and MobX Store.

> The previous name of extension was **Create Widgets and Classes for Flutter** and now the name it's **Flutter Tools**. So in your VSCode the name of extension in settings will be the new name.

## Create Folder for Interfaces

Defines if it will create a folder to contain the **interface** and **implementation** only for `Providers`, `Repositories` and `Services`.

![Usage](images/settings-create-folder-interfaces.gif)


## Create Implementation of Interface

Defines whether the implementation class of an interface will be created together.

![Usage](images/settings-implements-interfaces.gif)


## GetX Display Context Menu

Defines if the context menu with GetX features will be displayed.

![Usage](images/settings-display-getx-menu.gif)


## GetX Project Path

Default path for the GetX Project folders and files.

![Usage](images/settings-getx-project-path.gif)


## GetX Use Constructor Tear-offs

Defines if the Bindings and Routes files will use the new Dart language feature named Constructor tear-offs.

![Usage](images/settings-getx-constructor-tear-off.gif)


## GetX View Suffix

Default suffix name for the GetX view layer.

![Usage](images/settings-getx-views-suffix.gif)


## MobX Display Context Menu

Defines if the context menu with MobX features will be displayed.

![Usage](images/settings-display-mobx-menu.gif)


## MobX File Suffix

Default suffix name for the MobX store.

![Usage](images/settings-mobx-file-suffix.gif)


## Use `I` Prefix For Interfaces

Defines whether an interface will be created using `I` with prefix to the interface name..

![Usage](images/settings-use-i-preffix-interface.gif)



**That's all, Enjoy!**
