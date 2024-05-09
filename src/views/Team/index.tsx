import React from 'react';
import Page from '../../components/Page';
import Table from './components/Table';
import Create from './components/Create';

export interface ITeam {
  id?:number;
  name: string;
  coach: string;
}

const Team: React.FC = () => {
 
  return (
    <Page>
        <h1>Team</h1>
        <Create />
        <Table />
    </Page>
  );
}

export default Team;