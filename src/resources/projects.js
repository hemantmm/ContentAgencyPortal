import React from 'react';
import { List, Datagrid, TextField, EditButton, Edit, SimpleForm, TextInput, SelectInput, Create } from 'react-admin';

const statusChoices = [
  { id: 'pending', name: 'Pending' },
  { id: 'in_progress', name: 'In Progress' },
  { id: 'completed', name: 'Completed' },
  { id: 'published', name: 'Published' },
];

export const ProjectList = () => (
  <List>
    <Datagrid>
      <TextField source="name" />
      <TextField source="status" />
      <EditButton />
    </Datagrid>
  </List>
);

export const ProjectEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <SelectInput source="status" choices={statusChoices} />
    </SimpleForm>
  </Edit>
);

export const ProjectCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <SelectInput source="status" choices={statusChoices} />
    </SimpleForm>
  </Create>
);
