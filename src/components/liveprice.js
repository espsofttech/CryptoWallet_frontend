import React, { Component } from 'react';

import Websocket from 'react-websocket';
import Cookies from 'js-cookie';
import config from '../config/config';
export default class LivePrice extends Component {

    constructor(props) {
        super(props);
        this.state = {
            my_pair_list: [],
            mainData1: [{ pair: 'BTCUSDT', coin_name: 'BTC' }, { pair: 'ETHUSDT', coin_name: 'ETH' }],
            loginData:(!Cookies.get('loginSuccessCryptoWalletLogin')) ? [] : JSON.parse(Cookies.get('loginSuccessCryptoWalletLogin'))
        }

        // this.livePairDataFromBinance = this.livePairDataFromBinance.bind(this)
    }

    componentDidMount() {
        this.setState({
            my_pair_list: this.state.mainData1
        })
    }


    async livePairDataFromBinance(socketData) {
        console.log(socketData)
        socketData = JSON.parse(socketData);

        if (this.state.my_pair_list.length > 0) {
            let coinList1 = this.state.my_pair_list;

            var i = 0;
            for (i = 0; i < coinList1.length; i++) {
                var item = coinList1[i];

                var si = socketData.findIndex(el => el['s'] === item.pair);
                if (si > -1) {
                    coinList1[i].livePrice = socketData[si].c;
                    coinList1[i].changePercantage = socketData[si].P;
                }
            }




            this.setState({
                my_pair_list: coinList1,

            })

        }
        // console.log('this',this.state.my_pair_list)
    }


    exchangeData = async() => {
        if(this.state.loginData.length == 0){
            window.location.href = `${config.baseUrl}login`
        }
        else{
            window.location.href = `${config.baseUrl}buy`
        }
    }


    render() {
        return (
            <>
                <Websocket url='wss://stream.binance.com:9443/ws/!ticker@arr'
                    onMessage={this.livePairDataFromBinance.bind(this)} />
                <div>


                    <div className="exchange-table">
                        <div className="table-responsive">
                            <table className="table table-striped mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">24h Change</th>
                                        {/* <th scope="col">Markets</th> */}
                                        <th scope="col">Trade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.my_pair_list.map((item) => (
                                        <tr>
                                            <td>
                                                <div className="country-flag">
                                                    {/* <img src="images/BTC.png" alt="Image" /> */}
                                                    {item.pair}</div>
                                            </td>
                                            <td>{parseFloat(item.livePrice).toFixed(6)}</td>
                                            <td> {(parseFloat(item.changePercantage) < 0) ?
                                                <b style={{ color: 'red' }}>{parseFloat(item.changePercantage).toFixed(2)}%</b>
                                                :
                                                <b style={{ color: 'green' }}>{parseFloat(item.changePercantage).toFixed(2)}%</b>
                                            }</td>
                                            {/* <td><img src="images/waveline.png" alt="Image" width="90px" /></td> */}
                                            <td>
                                                <div className="d-flex">
                                                
                                                            <button className="btn style1 mr-1" onClick={this.exchangeData.bind(this)} type="submit">Buy</button>&nbsp;&nbsp;
                                                            <button className="btn style1" onClick={this.exchangeData.bind(this)} type="submit">Sell</button>
                                                    

                                                </div>
                                            </td>
                                        </tr>
                                    ))}



                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}