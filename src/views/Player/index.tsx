import React from 'react';
import Page from '../../components/Page';
import Table from './components/Table';
import Create from './components/Create';

export interface IPlayer {
  id?:number;
  name: string;
  position: string;
  birthOf: any;
  nationality: string;
  height: number;
  weight: number;
  dominantFoot: string;
}

const Player: React.FC = () => {
 
  return (
    <Page>
        <h1>Player</h1>
        <Create />
        <Table />
    </Page>
  );
}

export default Player;