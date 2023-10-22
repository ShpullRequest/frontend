import { FC, useState } from "react";
import {
  Cell,
  Group, Header, List,
  NavIdProps,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Image, Card, CardGrid, Avatar
} from "@vkontakte/vkui";

import { ErrorPlaceholder, VoidPlaceholder } from '@/components'
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'



export const Components: FC<NavIdProps> = (props) => {
  const router = useRouteNavigator()
  const [dragAndSelectList, updateDragAndSelectList] = useState([
    { label: '⠀Люблю шляться', defaultChecked: true },
    { label: '⠀Ебейшие пельмени' },
    { label: '⠀Хуй культуры' },
    { label: '⠀Активный глист' },
    { label: '⠀Ебал социум' },
    { label: '⠀Там где нас нет' },
  ]);

  const reorderList = ({ from, to }: any, list: any, updateListFn: any) => {
    const _list = [...list];
    _list.splice(from, 1);
    _list.splice(to, 0, list[from]);
    updateListFn(_list);
  };

  return (
    <Panel {...props}>
      <PanelHeader before={<PanelHeaderBack onClick={() => router.back()} />}>
        Компоненты
      </PanelHeader>

      <Group
        header={
          <Header>
            ПризмОчка
          </Header>
        }
      >
        <List>
          {dragAndSelectList.map(({ label, ...restItem }) => (
            <Cell
              key={label}
              mode="selectable"
              before={<img src="/ghost.png" width="32" />}
              onDragFinish={({ from, to }) =>
                reorderList({ from, to }, dragAndSelectList, updateDragAndSelectList)
              }
              {...restItem}
            >
              {label}
            </Cell>
          ))}
        </List>
      </Group>

      <Group description="Внутри Group">
        <CardGrid size="s">
          <Card>
            <div style={{ paddingBottom: '92%' }} />
          </Card>
          <Card>
            <div style={{ paddingBottom: '92%' }} />
          </Card>
          <Card>
            <div style={{ paddingBottom: '92%' }} />
          </Card>
        </CardGrid>
      </Group>

      <Group>
        <VoidPlaceholder />
      </Group>

      <Group>
        <ErrorPlaceholder />
      </Group>
    </Panel>
  )
}
