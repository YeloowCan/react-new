import React, { FC, ReactElement } from 'react';
import { Menu } from 'antd';
import routes from '../../routes';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

interface MenuItem {
  key: string;
  title: string;
  children?: MenuItem[];
}

const LeftMenu: FC = () => {
  const renderMenu = (menu: MenuItem): ReactElement =>
    menu.children ? (
      <SubMenu key={menu.key} title={menu.title}>
        {menu.children.map((m: MenuItem) => renderMenu(m))}
      </SubMenu>
    ) : (
      <Menu.Item key={menu.key} title={menu.title}>
        <Link to={`/${menu.key}`}>{menu.title}</Link>
      </Menu.Item>
    );

  return (
    <Menu mode="inline" defaultOpenKeys={['mainPage']}>
      {routes.map(item => renderMenu(item))}
    </Menu>
  );
};
export default LeftMenu;
