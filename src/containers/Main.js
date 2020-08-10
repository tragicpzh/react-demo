import React, {Component} from 'react';
import "../styles/Main.css";
import Defaultpage from "./defaultpage";
import Item2 from "./Item2";
import Item1 from "./Item1";
class  Main extends Component{
    constructor() {
        super();
        this.state= {
            Items: [
                {
                    name: "item1",
                    items: [
                        {
                            name: "item1",
                            id: 0,
                            style:{}
                        },
                        {
                            name: "item2",
                            id: 1,
                            style:{}
                        }
                    ],
                    style: {
                        display: "none"
                    }
                },
                {
                    name: "item2",
                    items: [
                        {
                            name: "itemA",
                            id: 2,
                            style:{}
                        },
                        {
                            name: "itemB",
                            id: 3,
                            style:{}
                        }
                    ],
                    style: {
                        display: "none"
                    }
                },
                {
                    name: "item3",
                    items: [
                        {
                            name: "item_a",
                            id: 4,
                            style:{}
                        }
                    ],
                    style: {
                        display: "none"
                    }
                }
            ],
            choose_contain: [<Item1 bread="index/item1/item1"></Item1>,<Item2 bread="index/item1/item2"></Item2>],
            curr_contain:<Defaultpage></Defaultpage>,
            cur_click:-1,
        };
        this.levelClick=this.levelClick.bind(this);
        this.lodaClick=this.loadClick.bind(this);
    }
    levelClick(index,e){
        e.stopPropagation();
        const items=this.state.Items;
        items[index].style=(items[index].style.display==="none")?{display:"inline"}:{display: "none"};
        this.setState({
                Items:items
            }
        )
    }
    loadClick(id,e){
        e.stopPropagation();
        const index=(id>1)?id%2:id;
        const contain=this.state.choose_contain[index];
        this.setState({
            curr_contain:contain,
            cur_click: id
        })
    }
    render(){
        return (
            <div className="container">
                <div className="sidebar">
                    <div id="log">
                        <h1>导航栏</h1>
                    </div>
                    <div>
                        <ul className="ul_level1">
                            {
                                this.state.Items.map(
                                    (item,index_1)=>
                                        <li key={index_1} className="level1" onClick={this.levelClick.bind(this,index_1)}>
                                            {item.name}
                                            <ul className="ul_level1" style={item.style}>
                                                {
                                                    item.items.map((x,index_2)=>
                                                        <li key={index_2}
                                                            className={this.state.cur_click === x.id
                                                                ? "clickStyle"
                                                                : "level2"
                                                            }
                                                            onClick={this.loadClick.bind(this,x.id)}
                                                        >
                                                            {x.name}
                                                        </li>
                                                    )
                                                }
                                            </ul>
                                        </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
                <div className="main">
                    <div className="header">
                            header
                    </div>
                    <div className="main-contain">
                        {this.state.curr_contain}
                    </div>
                    <div className="footer">
                        footer
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;
