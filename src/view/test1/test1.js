import React from 'react';
import {Link} from 'react-router';
import './test1.css';
import Testporps from '../testporps/Testporps.js';
import { Collapse  } from 'antd';

let text ="test.................................";
const Panel = Collapse.Panel;
export default class WorkOrderSearch extends React.PureComponent {
    constructor() {
        super();
    }

    callback(key){
     close("key:"+key);
    }

    
    render() {
        return (
            <div className='Test_div'>
           
             <Collapse defaultActiveKey={['1']} onChange={this.callback}>
                <Panel header="This is panel header 1" key="1">
                    <Testporps title="测试" />

                     <Testporps title="测试1" />
                </Panel>
                <Panel header="This is panel header 2" key="2">
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 4" key="4" >
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 5" key="5" >
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 6" key="6" >
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 7" key="7" >
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 8" key="8" >
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 9" key="9" >
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 10" key="10" >
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 11" key="11" >
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 12" key="12" >
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 13" key="13" >
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 14" key="14" >
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 15" key="15" >
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 16" key="16" >
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 17" key="17" >
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 18" key="18" >
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 19" key="19" >
                  <p>{text}</p>
                </Panel>
              </Collapse>
            </div>
        )
    }
}









