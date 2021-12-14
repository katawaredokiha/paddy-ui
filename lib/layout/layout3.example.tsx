import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Aside from './aside';

export default function () {
  return (
    <div>
      <Layout style={{height: 500, width: 500}}>
        <Header className="x">header</Header>
        <Layout>
          <Content className="y">content</Content>
          <Aside className="z">aside</Aside>
        </Layout>
        <Footer className="x">footer</Footer>
      </Layout>
    </div>
  );
}