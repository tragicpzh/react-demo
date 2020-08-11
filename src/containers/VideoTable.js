import React, {Component} from "react";
import {Table,Icon,Switch,Radio,Form,Divider} from 'antd';
import "antd/dist/antd.css"
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Publish',
        dataIndex: 'publish',
        key: 'publish',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
                <a>Action 一 {record.name}</a>
                <Divider type="vertical" />
                <a>Delete</a>
                <Divider type="vertical" />
                <a className="ant-dropdown-link">
                  More actions <Icon type="down" />
                </a>
            </span>
        ),
    },
];
const data = [];
for (let i = 1; i <= 10; i++) {
    data.push({
        key: i,
        name: 'Video',
        publish: `${i}2`,
        address: `New York No. ${i} Lake Park`,
        description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
    });
}
const expandedRowRender = record => <p>{record.description}</p>;
const scroll = { y: 240 };

class VideoTable extends Component{
    constructor(props) {
        super(props);
        this.state = {
            bordered: false,
            loading: false,
            size: 'default',
            expandedRowRender,
            rowSelection: {},
            scroll: undefined,
            tableLayout: undefined,
        };
        this.handleToggle=this.handleToggle.bind(this);
        this.handleExpandChange=this.handleExpandChange.bind(this);
        this.handleHeaderChange=this.handleExpandChange.bind(this);
        this.handleRowSelectionChange=this.handleRowSelectionChange.bind(this);
        this.handleScollChange=this.handleScollChange.bind(this);
        this.handleSizeChange=this.handleSizeChange.bind(this);
        this.handleTableLayoutChange=this.handleTableLayoutChange.bind(this);
    };
    handleToggle = prop => enable => {
        this.setState({ [prop]: enable });
    };
    handleExpandChange = enable => {
        this.setState({ expandedRowRender: enable ? expandedRowRender : undefined });
    };
    handleRowSelectionChange = enable => {
        this.setState({ rowSelection: enable ? {} : undefined });
    };
    handleSizeChange = e => {
        this.setState({ size: e.target.value });
    };
    handleTableLayoutChange = e => {
        this.setState({ tableLayout: e.target.value });
    };
    handleScollChange = enable => {
        this.setState({ scroll: enable ? scroll : undefined });
    };
    render() {
        const  state  = this.state;
        return (
            <div>
                <Form
                    layout="inline"
                    className="components-table-demo-control-bar"
                    style={{ marginBottom: 16 }}
                >
                    <Form.Item label="Bordered">
                        <Switch checked={state.bordered} onChange={this.handleToggle('bordered')} />
                    </Form.Item>
                    <Form.Item label="loading">
                        <Switch checked={state.loading} onChange={this.handleToggle('loading')} />
                    </Form.Item>
                    <Form.Item label="Expandable">
                        <Switch checked={!!state.expandedRowRender} onChange={this.handleExpandChange} />
                    </Form.Item>
                    <Form.Item label="Checkbox">
                        <Switch checked={!!state.rowSelection} onChange={this.handleRowSelectionChange} />
                    </Form.Item>
                    <Form.Item label="Fixed Header">
                        <Switch checked={!!state.scroll} onChange={this.handleScollChange} />
                    </Form.Item>
                    <Form.Item label="Size">
                        <Radio.Group value={state.size} onChange={this.handleSizeChange}>
                            <Radio.Button value="default">Default</Radio.Button>
                            <Radio.Button value="middle">Middle</Radio.Button>
                            <Radio.Button value="small">Small</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Table Layout">
                        <Radio.Group value={state.tableLayout} onChange={this.handleTableLayoutChange}>
                            <Radio.Button value={undefined}>Unset</Radio.Button>
                            <Radio.Button value="fixed">Fixed</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                </Form>
                <Table
                    {...this.state}
                    columns={columns}
                    dataSource={data}
                />
            </div>
        );
    }
}
export default VideoTable;