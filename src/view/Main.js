

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Layout, Menu, Icon ,Tooltip ,Popconfirm, message} from 'antd';
const { Header, Sider, Content } = Layout;
import { Router, hashHistory,browserHistory} from 'react-router';
import logoimg from '../style/image/logo.png';
//import './assembly/Menu.css';

let menus = [
    {name: '基本信息', link: 'test1', icon: 'iconfont icon-chaxun'},
    {name: '基本信息1', link: 'Menu',  icon: 'iconfont icon-dingweimiaozhun' },
    {name: '基本信息2', link: 'Menu1', icon:'iconfont icon-Broken_graph_01'},
];
let content=menus[0].name;
export default class Main extends React.PureComponent{


      state = {
        collapsed: false,
        content:content,
      };
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      }

      onSelect=(value)=>{
        message.warning(value.key);
        this.props.router.replace('/'+value.key );

        for(let key of menus){

            if(key.link==value.key){
              console.log("key.link===:"+key.link+"=========value.key===:"+value.key);
                content=key.name;
                this.setState({content:content})
            }
        }
      }

    render(){
      let logoShow=this.state.collapsed?'none':'inline-block';
        return(
            <Layout className="main">
        <Sider
           width={180}
           trigger={null}
           collapsible
           collapsed={this.state.collapsed}
           minHeight={280}
        >
            <div className="logo">
                            <img  className="Img" src={logoimg} alt="logo"/>
                            <span className="logo_name" style={{display:logoShow}} >测试路径</span>
            </div>

          <Menu theme="dark" mode="inline" defaultSelectedKeys={['test1']} onSelect={this.onSelect}>
            <Menu.Item key="test1"  >
              <Icon type="upload" /> 
              <span>基本信息</span>
            </Menu.Item>
            <Menu.Item  key="Menu"> 
              <Icon type="upload" />
              <span>基本信息1</span>
            </Menu.Item>

            <Menu.Item  key="Menu1"> 
              <Icon type="upload" />
              <span>基本信息2</span>
            </Menu.Item>
            
          </Menu>
        </Sider>
        <Layout>
            <Header className="HeaderClass" >
              <div className="HeaderClass-left" >
                  <Icon className="trigger" type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle}/>
              </div>
              <div className="HeaderClass-middle" >
                  <Icon style={{marginRight:8}} className="iconfont icon-ionc--"/>
                  <span style={{color:"#000",fontWeight:'bolder'}}>{this.state.content}</span>
              </div>
            
            </Header>
            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 360 }}>
            {this.props.children} 
            </Content>
        </Layout>
      </Layout>
        
        )
    }
}