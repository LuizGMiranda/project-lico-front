import React from 'react';
import { Button, Table as TableM } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Modal from '../../../Modal';
import { ITeam } from '../../../..';

interface itemProps extends ITeam {}

const Item: React.FC<itemProps> = (item) => {
    console.log({item})
    const [modalOpen, { open, close }] = useDisclosure(false);
  return (
    <>
        <TableM.Tr key={item.name}>
            <TableM.Td>{item.name}</TableM.Td>
            <TableM.Td>{item.coach}</TableM.Td>
            <TableM.Td>
                <Button onClick={open}>Editar</Button>
            </TableM.Td>
        </TableM.Tr>
        <Modal isOpen={modalOpen} type='edit' onClose={close} data={item} />
    </>
  );
}

export default Item;