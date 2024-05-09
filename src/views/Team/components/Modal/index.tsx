import React from 'react';
import { Modal as ModalM, Button, TextInput, Group } from '@mantine/core';
import { useForm } from '@mantine/form';
import ServiceTeam from '../../../../services/teams';
import { ITeam } from '../..';

interface ModalProps {
    type: 'create' | 'edit'
    isOpen: boolean
    onClose: () => void
    data?: ITeam
}

const Modal: React.FC<ModalProps> = ({type, isOpen, data, onClose}) => {
    const serviceTeam = new ServiceTeam();
    const title = type === 'edit' ? 'Editar time' : 'Criar novo time';
    const buttonTitle = type === 'edit' ? 'Atualizar' : 'Criar';

    const [loading, setLoading] = React.useState(false);
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
          name: data?.name || '',
          coach: data?.coach || '',
        },
    
        validate: {
          name: (value) => (value === '' || !!value ? null : 'Nome invalido'),
          coach: (value) => (value === '' || !!value ? null : 'Treinador invalido'),
        },
      });
      const handleRefresh = () => {
        form.reset();
        setLoading(true)
        setTimeout(() => {}, 2000);
        window.location.reload();
      }

      const handleSubmit = async (values: typeof form.values) => {
        if (!form.isValid()) return;

        if (type === 'edit' && data?.id) {
            const newValue = {...values, id: data.id}
            await serviceTeam.update(newValue).then(handleRefresh);
            return
        }
        await serviceTeam.create(values).then(handleRefresh);
        
      };
    
  return (
    <ModalM opened={isOpen} onClose={onClose} title={title}>
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
                withAsterisk
                label="Nome"
                key={form.key('name')}
                {...form.getInputProps('name')}
            />
            <TextInput
                withAsterisk
                label="Treinador"
                key={form.key('coach')}
                {...form.getInputProps('coach')}
            />
            <Group justify="flex-end" mt="md">
                <Button type="submit" disabled={loading}>{buttonTitle}</Button>
            </Group>
        </form>
    </ModalM>
  );
}

export default Modal;