import React from "react"
import "../styles/Item1.css"
import BreadCrumb from "./Breadcrumb";
import SaleEchart from "./SaleEchart";
import VisitedEchars from "./VisitedEchart";
import CollectionEchart from "./CollectionEchart";
import PeopleEchart from "./PeopleEchart";
import VideoTable from "./VideoTable";
import RadarEchart from "./RadarEchart";
function Item1(props) {
    return (
        <div className="contain">
            <BreadCrumb path={props.location.pathname}></BreadCrumb>
            <div className="simple-context">
                <div className="simple-card">
                    <div className="simple-card-body">
                        <div className="simple-card-header">
                            <h1>总转发量</h1>
                        </div>
                        <div className="simple-card-nums">
                            <h2>10000</h2>
                        </div>
                        <div className="simple-card-chart">
                            <SaleEchart ></SaleEchart>
                        </div>
                        <div className="simple-card-footer">
                            <h3>平均转发量1000</h3>
                        </div>
                    </div>
                </div>
                <div className="simple-card">
                        <div className="simple-card-body">
                            <div className="simple-card-header">
                                <h1>总访问量</h1>
                            </div>
                            <div className="simple-card-nums">
                                <h2>100</h2>
                            </div>
                            <div className="simple-card-chart">
                                <VisitedEchars></VisitedEchars>
                            </div>
                            <div className="simple-card-footer">
                                <h3>平均访问量10</h3>
                            </div>
                        </div>
                </div>
                <div className="simple-card">
                    <div className="simple-card-body">
                        <div className="simple-card-header">
                            <h1>总收藏量</h1>
                        </div>
                        <div className="simple-card-nums">
                            <h2>1000</h2>
                        </div>
                        <div className="simple-card-chart">
                            <CollectionEchart></CollectionEchart>
                        </div>
                        <div className="simple-card-footer">
                            <h3>平均收藏量60</h3>
                        </div>
                    </div>
                </div>
                <div className="simple-card">
                    <div className="simple-card-body">
                        <div className="simple-card-header">
                            <h1>人群分布</h1>
                        </div>
                        <div className="simple-card-chart-pie">
                            <PeopleEchart></PeopleEchart>
                        </div>
                    </div>
                </div>
            </div>
            <div className="large-table">
                <div className="large-card">
                    <div className="large-card-header">
                        <h1>视频列表</h1>
                    </div>
                    <div className="large-card-body">
                        <VideoTable></VideoTable>
                    </div>
                    <div className="large-card-footer"></div>
                </div>
            </div>
            <div className="large-chart">
                <div className="large-card">
                    <div className="large-card-header">
                        <h1>视频特点</h1>
                    </div>
                    <div className="large-card-body">
                        <RadarEchart></RadarEchart>
                    </div>
                    <div className="large-card-footer">

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Item1;
