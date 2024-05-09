import React from 'react';
import { Button, Table as TableM } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Modal from '../../../Modal';
import { IPlayer } from '../../../..';
import translatePosition from '../../../../../../helpers/translatePosition';

interface itemProps extends IPlayer {}

const Item: React.FC<itemProps> = (item) => {
    console.log({item})
    const [modalOpen, { open, close }] = useDisclosure(false);


    const birth = new Date(item.birthOf);
    const dominantFoot = item.dominantFoot === 'right' ? 'Direito' : 'Esquerdo';

  return (
    <>
        <TableM.Tr key={item.name}>
            <TableM.Td>{item.name}</TableM.Td>
            <TableM.Td>{translatePosition(item.position)}</TableM.Td>
            <TableM.Td>{dominantFoot}</TableM.Td>
            <TableM.Td>{birth.toLocaleDateString()}</TableM.Td>
            <TableM.Td>{(item.height/100)}m</TableM.Td>
            <TableM.Td>
                <Button onClick={open}>Editar</Button>
            </TableM.Td>
        </TableM.Tr>
        <Modal isOpen={modalOpen} type='edit' onClose={close} data={item} />
    </>
  );
}

export default Item;