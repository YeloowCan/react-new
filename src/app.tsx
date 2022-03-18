import React, { FC, lazy, Suspense } from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Logo from './assets/logo.jpg';
import LeftMenu from './components/leftMenu';
import routes from './routes';

const { Header, Content, Sider } = Layout;

const App: FC = () => (
  <Layout className="layout-app">
    <Header>
      <img src={Logo} className="logo" alt="logo" />
    </Header>
    <Layout>
      <Router>
        <Sider className="layout-sider">
          <LeftMenu />
        </Sider>
        <Content className="layout-content">
          <Suspense fallback={<div>loading</div>}>
            <Routes>
              {routes.map(r => (
                <Route key={r.key}>
                  {r.children.map(c => {
                    const Component = lazy(() => import(`./pages/${c.key}`));
                    return <Route key={c.key} path={`/${c.key}`} element={<Component />} />;
                  })}
                </Route>
              ))}
            </Routes>
          </Suspense>
        </Content>
      </Router>
    </Layout>
  </Layout>
);
export default App;
