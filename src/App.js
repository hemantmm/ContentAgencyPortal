import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from './authProvider';
import Dashboard from './components/Dashboard';

import { ClientList, ClientEdit, ClientCreate } from './resources/clients';
import { ProjectList, ProjectEdit, ProjectCreate } from './resources/projects';
import { ContentList, ContentEdit, ContentCreate } from './resources/content';
import { TaskList, TaskEdit, TaskCreate } from './resources/tasks';

const dataProvider = jsonServerProvider('http://localhost:3001');

const App = () => (
  <Admin
    dashboard={Dashboard}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    <Resource
      name="clients"
      list={ClientList}
      edit={ClientEdit}
      create={ClientCreate}
    />
    <Resource
      name="projects"
      list={ProjectList}
      edit={ProjectEdit}
      create={ProjectCreate}
    />
    <Resource
      name="content"
      list={ContentList}
      edit={ContentEdit}
      create={ContentCreate}
    />
    <Resource
      name="tasks"
      list={TaskList}
      edit={TaskEdit}
      create={TaskCreate}
    />
  </Admin>
);

export default App;
