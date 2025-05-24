import React from 'react';
import { List, Datagrid, TextField, DateField, EditButton, Edit, SimpleForm, TextInput, DateInput, Create } from 'react-admin';

export const TaskList = () => (
  <List>
    <Datagrid>
      <TextField source="title" />
      <DateField source="dueDate" />
      <EditButton />
    </Datagrid>
  </List>
);

export const TaskEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="title" />
      <DateInput source="dueDate" />
    </SimpleForm>
  </Edit>
);

export const TaskCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" />
      <DateInput source="dueDate" />
    </SimpleForm>
  </Create>
);
