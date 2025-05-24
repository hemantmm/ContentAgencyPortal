import React from 'react';
import { List, Datagrid, TextField, EditButton, Edit, SimpleForm, TextInput, SelectInput, Create } from 'react-admin';

const statusChoices = [
  { id: 'draft', name: 'Draft' },
  { id: 'submitted', name: 'Submitted' },
  { id: 'approved', name: 'Approved' },
  { id: 'published', name: 'Published' },
];

export const ContentList = () => (
  <List>
    <Datagrid>
      <TextField source="title" />
      <TextField source="status" />
      <EditButton />
    </Datagrid>
  </List>
);

export const ContentEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="title" />
      <SelectInput source="status" choices={statusChoices} />
    </SimpleForm>
  </Edit>
);

export const ContentCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" />
      <SelectInput source="status" choices={statusChoices} />
    </SimpleForm>
  </Create>
);
