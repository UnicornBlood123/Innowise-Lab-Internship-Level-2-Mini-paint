# ITS Hotelling front-end: state management

Store structure:

```bash
|   +---store
|   |   +---CanvasStore
|   |   +---ChatStore
|   |   +---ToolStore
|   |           rootReducer.ts
|   |           types.ts
```

ChatStore folder:

```bash
|   +---CanvasStore
|   |   +---actions.ts
|   |   +---reducer.ts
```

Reducer is a pure function that takes an action and the previous state of the application and returns the new state. The action describes what happened and it is the reducer's job to return the new state based on that action.
Chat reducer code example:

```ts
import { Types } from '../types';

export const reducer = (state = { isLoad: true, filterImages: [] }, action: any) => {
  switch (action.type) {
    case Types.SETIMAGES:
      return {
        ...state,
        images: action.images,
        isLoad: action.isLoad,
      };
    case Types.SETUSERS:
      return {
        ...state,
        users: action.users,
        isLoad: action.isLoad,
      };
    case Types.LOADIMAGES:
      return {
        ...state,
        isLoad: action.isLoad,
      };
    case Types.LOADUSERS:
      return {
        ...state,
        isLoad: action.isLoad,
      };
    case Types.EMAILFILTER:
      return {
        ...state,
        filterImages: action.images,
      };
    default:
      return state;
  }
};
```

Actions are objects that have a type property and any other data that it needs to describe the action. 
For example, a chat actions:

```ts
import { Types } from '../types';

export const emailFilter = (images: {}[]) => ({
  type: Types.EMAILFILTER,
  images: images,
});

export const setImages = (data: {}[]) => ({ type: Types.SETIMAGES, images: data, isLoad: false });
export const setUsers = (data: {}[]) => ({ type: Types.SETUSERS, users: data, isLoad: false });

export const loadImages = () => ({ type: Types.LOADIMAGES, isLoad: true });
export const loadUsers = () => ({ type: Types.LOADUSERS, isLoad: true });
```

The state is an object that describes aspects of your application that can change over time. You should make your state the minimal amount of data that's required to describe the state of the application. 
For example, application might have this state:

```ts
canvas: 
{
  canvasRef: canvas
}
chat: 
{
  filterImages: (9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
  images: (9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
  isLoad: false
  users: (2) [{…}, {…}]
}
tools:
{
  selectTool: Brush {mouseDown: false, x: 0, y: 0, ctx: CanvasRenderingContext2D, canvas: canvas}
  toolName: "BRASH"
}
```