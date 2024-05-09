import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Navbar from './components/Navbar';
import { IconHome2, IconUsersGroup , IconActivity, IconUser  } from '@tabler/icons-react';
import { useLocation } from 'react-router-dom';

interface PageProps {
  children: React.ReactNode
}

function Page({ children }: PageProps) {
  const [opened, { toggle }] = useDisclosure();
  const location = useLocation();
  const menus = [
    { title: 'Home', icon: <IconHome2 size="1rem" stroke={1.5} />, href: '/'},
    { title: 'Times', icon: <IconUsersGroup  size="1rem" stroke={1.5} />, href: '/teams'},
    { title: 'Jogadores', icon: <IconUser size="1rem" stroke={1.5} />, href: '/players'},
    { title: 'Settings', icon: <IconActivity size="1rem" stroke={1.5} />, href: '/settings', disabled: true},
  ];

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      
      <AppShell.Header>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
        {
          !opened && (<div>Logo</div>)
        }
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Navbar menus={menus} activeItem={location.pathname} />
      </AppShell.Navbar>

      <AppShell.Main>{ children }</AppShell.Main>
    </AppShell>
  );
}

export default Page;