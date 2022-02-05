# ITS Hotelling front-end: Code Style

The purpose of the document is to show the main rules of code delivery in the application.

## What do follow

`SOLID`

## TypeScript integration

TypeScript allows us to keep the code clean and readable. You should avoid using type of any at the application, that means everything should be covered by interfaces. Type `any` is not allowed!

An example of a component, which covered by the standard React Component interface:

```ts
import React from 'react';
import { TextField } from '@mui/material';
import { ChatFilterProps } from './ChatFilter.interfaces';

export interface ChatFilterProps {
  filter: string;
  setFilter: (email: string) => void;
}

const ChatFilter = ({ filter, setFilter }: ChatFilterProps) => {
  const changeFilter = (e: any) => {
    setFilter(e.target.value);
  };

  return (
    <TextField
      id={'email'}
      label={'Email filter'}
      type={'email'}
      size={'small'}
      sx={{ justifyContent: 'center' }}
      value={filter}
      onChange={changeFilter}
    />
  );
};

export default ChatFilter;

```

[Documentation](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) Typescript.

## Styles and CSS

A custom material ui is used to style the components.

The example shows how to use material ui:

```ts
import React from 'react';
import { Checkbox, Box, Stack } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { ChatPostProps } from './ChatPost.interfaces';

const ChatPost = ({ email, name, img, change, checked = false, id }: ChatPostProps) => {
  const onCheckBoxClick = (event: any) => {
    change(event.target.checked, Number(event.target.id));
  };

  return (
    <Stack
      direction="row"
      sx={{ gap: '5px', boxShadow: '-1px -1px 3px rgb(0 0 0 / 24%) inset', padding: '5px' }}
    >
      <Box sx={{ border: '1px solid #c1bfbf' }}>
        <img src={img} width="45" height="45" alt={'img'} />
      </Box>
      <Stack sx={{ flexGrow: 1 }}>
        <Box sx={{ flexGrow: 1 }}>{email}</Box>
        <Box>{name}</Box>
      </Stack>
      <Checkbox
        id={id.toString()}
        checked={checked}
        onChange={onCheckBoxClick}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
    </Stack>
  );
};

export default ChatPost;

```
