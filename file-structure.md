# ITS Hotelling front-end: files and naming

## Namings

All the files and folders in `src` folder of the application should be postfixed with the meaning of the file. The only one exception is `index.ts` files.

List of available postfixes:

- `ComponentExample.ts{x}` - component file.
- `StyleExample.css` - style file.

All the folders and files should be written in `CamelCase` exectely named as component inside.

## Folder structure

General folder architecture in the application:

```bash
src
+---modules
|   +---particular-module
|   |   +---constants
|   |   +---containers
|   |   +---saga
|   |   +---store
|   |   +---views
|   |   \---*
|   |           index.css
|   |           index.ts


## Folders definition

### Module folder

Each module of the application is a separated package of functionality. Each module should structured in the same way.
The main idea behind the approach is that if the application will grow in the future we can move the entire module to completely separate application (micro-frontend adaptation).
Each module contains it's own components, containers and routing.

`views` folder contains all of the `stupid` components that are not connected to any kind of state management.
`containers` folder contains `container` components. The components are connected to state management. They pass all the values down.

Module component file manages routing for the particular module.
`index.ts` file exports the entire component of the module.

### Component folder

Each component folder should contain all the code related to the particular piece of the application. It contains component file itself, styles, interfaces (if needed).
The purpose of doing it that way is to keep all of the imports in other files nice and beautiful.

Let's imagine we have a component called `CanvasView`. The correct folder structure is the next:

```bash

+---components
|   +---Canvas
|       Canvas.tsx
|       Canvas.css
|       Canvas.interfaces.tsx

```

### Service folder

Each service folder contains `index.ts` file that exports all the functionality defined in the service.

Folder structure:
```bash

+---services
|   +---ModalsFacade
|       ModalsFacade.service.ts
|       ModalsFacade.interfaces.ts
|       index.ts

```

### Interface file

Interface file should contain only one interface. The exception is for types that are used only in this interface.

```ts
export interface ChatPostProps {
  email: string;
  name: string;
  img: string;
  change: (check: boolean, id: number) => void;
  checked: boolean;
  id: number;
}
```
