import React, { useEffect } from 'react';
import { Table as TableM } from '@mantine/core';
import { ITeam } from '../..';
import ServiceTeam from '../../../../services/teams';
import Item from './components/Item';

const Table: React.FC = () => {
    const [teams, setTeams] = React.useState<ITeam[]>([]);

    useEffect(() => {
        !teams[0] && test();
    });
    const serviceTeam = new ServiceTeam();
    const test  = async () => {
        const teams = await serviceTeam.getTeams();
        setTeams(teams)
    }

    const rows = teams?.map((item: ITeam) => (<Item key={item.name} {...item} />));

    return (
        <>
            <TableM>
                <TableM.Thead>
                <TableM.Tr>
                    <TableM.Th>Nome</TableM.Th>
                    <TableM.Th>Treinador</TableM.Th>
                    <TableM.Th>Acao</TableM.Th>
                </TableM.Tr>
                </TableM.Thead>
                <TableM.Tbody>{rows}</TableM.Tbody>
            </TableM>
            
        </>
    )
}

export default Table;