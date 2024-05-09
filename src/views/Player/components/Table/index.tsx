import React, { useEffect } from 'react';
import { Table as TableM } from '@mantine/core';
import Item from './components/Item';
import { IPlayer } from '../..';
import ServicePlayer from '../../../../services/player';

const Table: React.FC = () => {
    const [player, setPlayer] = React.useState<IPlayer[]>([]);

    useEffect(() => {
        !player[0] && fetchData();
    });
    const servicePlayer = new ServicePlayer();
    const fetchData  = async () => {
        const player = await servicePlayer.getPlayers();
        setPlayer(player)
    }

    const rows = player?.map((item: IPlayer) => (<Item key={item.name} {...item} />));

    return (
        <>
            <TableM>
                <TableM.Thead>
                <TableM.Tr>
                    <TableM.Th>Nome</TableM.Th>
                    <TableM.Th>Posicao</TableM.Th>
                    <TableM.Th>Pe dominante</TableM.Th>
                    <TableM.Th>Nascimento</TableM.Th>
                    <TableM.Th>Altura</TableM.Th>
                    <TableM.Th>Acao</TableM.Th>
                </TableM.Tr>
                </TableM.Thead>
                <TableM.Tbody>{rows}</TableM.Tbody>
            </TableM>
            
        </>
    )
}

export default Table;