import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Button } from '@mantine/core';
import Modal from '../Modal';

const Create: React.FC = () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
      <>
        <Modal type="create" isOpen={opened} onClose={close} />
        <Button onClick={open}>Criar novo time</Button>
      </>
    );  
}

export default Create;