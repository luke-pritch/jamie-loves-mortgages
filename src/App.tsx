import React from "react";
import logo from "./img/jlm-logo.png";
import { Breadcrumb, Button, Layout, Menu } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import { Content, Footer, Header } from "antd/lib/layout/layout";

function App(): any {
    return (
        <div className="app">
            <Layout className="layout">
                <Header>
                    <div className="logo"></div>
                    <Menu theme="dark" mode="horizontal">
                        <Menu.Item key="1">About Me</Menu.Item>
                        <Menu.Item key="2">Apply Now</Menu.Item>
                        <Menu.Item key="3">Contact Me</Menu.Item>
                    </Menu>
                </Header>
                <Content>
                    <Breadcrumb style={{ margin: "16px 0" }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-content">
                        Your Mortgage Here!
                    </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    Jamie Loves Mortgages ©2020 created by Luke Pritchard
                </Footer>
            </Layout>
        </div>
    );
}

export default App;
