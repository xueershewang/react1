

import React from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

import './Menu.css';

export default class Tesmenus extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  onSelect1=(value)=>{
    this.props.router.replace('/'+value.key );
    // for(let key of menus){
    //     if(key.link==value.key){
    //         content=key.name;
    //         this.setState({content:content})
    //     }
    // }
  }
  render() {
    return (
      <div>Menu</div>
    );
  }
}