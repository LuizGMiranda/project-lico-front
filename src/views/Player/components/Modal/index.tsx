import React from 'react';
import { Modal as ModalM, Button, TextInput, Group, NativeSelect } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { IPlayer } from '../..';
import ServicePlayer from '../../../../services/player';

interface ModalProps {
    type: 'create' | 'edit'
    isOpen: boolean
    onClose: () => void
    data?: IPlayer
}

const Modal: React.FC<ModalProps> = ({type, isOpen, data, onClose}) => {
    const servicePlayer = new ServicePlayer();
    const title = type === 'edit' ? 'Editar jogador' : 'Criar jogador';
    const buttonTitle = type === 'edit' ? 'Atualizar' : 'Criar';

    const [loading, setLoading] = React.useState(false);
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
          name: data?.name || '',
          position: data?.position || '',
          birthOf: type === 'edit' ? new Date(data?.birthOf) : '' || '',
          nationality: data?.nationality || '',
          height: data?.height || '',
          weight: data?.weight || '',
          dominantFoot: data?.dominantFoot || '',
        },
    
        validate: {
          name: (value) => (value == '' || !!value ? null : 'Nome invalido'),
          position: (value) => (!!value ? null : 'Posição invalida'),
          birthOf: (value) => (!!value ? null : 'Data de nascimento invalida'),
          nationality: (value) => (value == '' || !!value ? null : 'Nacionalidade invalida'),
          height: (value) => (value == '' || !!value ? null : 'Altura invalida'),
          weight: (value) => (value == '' || !!value ? null : 'Peso invalido'),
          dominantFoot: (value) => (!!value ? null : 'Pé dominante invalido'),
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

        values.birthOf = new Date(values.birthOf)?.toISOString();
        values.weight = Number(values.weight);
        values.height = Number(values.height);

        if (type === 'edit' && data?.id) {
            const newValue = {...values, id: data.id}
            await servicePlayer.update(newValue).then(handleRefresh);
            return
        }

        await servicePlayer.create(values).then(handleRefresh).catch(err => console.log(err));
        
      };
    
  return (
    <ModalM opened={isOpen} onClose={onClose} title={title}>
        <form onSubmit={() => form.onSubmit(handleSubmit)}>
            <TextInput
                withAsterisk
                label="Nome"
                key={form.key('name')}
                {...form.getInputProps('name')}
            />

            <NativeSelect
              label="Posição"
              withAsterisk
              key={form.key('position')}
              {...form.getInputProps('position')}
              data={[
                { label: 'Goleiro', value: 'gk' },
                { label: 'Zagueiro', value: 'df' },
                { label: 'Lateral', value: 'fb' },
                { label: 'Meio Campista', value: 'mf' },
                { label: 'Volante', value: 'dm' },
                { label: 'Meia Ofensivo', value: 'vue' },
                { label: 'Vue', value: 'am' },
                { label: 'Ponta', value: 'w' },
                { label: 'Atacante', value: 'fw' },
              ]}
            />

            <DateInput
              withAsterisk
              label="Data de nascimento"
              key={form.key('birthOf')}
              {...form.getInputProps('birthOf')}
              valueFormat="DD/MM/YYYY"
            />

            <TextInput
                withAsterisk
                label="Nacionalidade"
                key={form.key('nationality')}
                {...form.getInputProps('nationality')}
            />

            <TextInput
                withAsterisk
                label="Altura"
                key={form.key('height')}
                {...form.getInputProps('height')}
            />

            <TextInput
                withAsterisk
                label="Peso"
                key={form.key('weight')}
                {...form.getInputProps('weight')}
            />

            <NativeSelect
              label="Pé dominante"
              withAsterisk
              key={form.key('dominantFoot')}
              {...form.getInputProps('dominantFoot')}
              data={[
                { label: 'Direito', value: 'right' },
                { label: 'Esquerdo', value: 'left' },
              ]}
            />

            <Group justify="flex-end" mt="md">
                <Button type="submit" disabled={loading}>{buttonTitle}</Button>
            </Group>
        </form>
    </ModalM>
  );
}

export default Modal;