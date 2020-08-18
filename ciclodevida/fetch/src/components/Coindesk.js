import React, { Component } from 'react';

export default class CoinDesk extends Component {
    state = { bpi: {} };

    componentDidMount() {
        console.log('componentDidMount');
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(resp => resp.json())
            .then(data => {
                const { bpi } = data;
                this.setState({ bpi });
            })
            .catch(error => console.log(error));
    }

    _renderCurrencies() {
        const { bpi } = this.state;
        const currencies = Object.keys(bpi);
        return currencies // ['EURO','COL']
            .map(currency => (
                <div kye={currency}>
                    1 BTC es {bpi[currency].rate}
                    <span>{currency}</span>
                </div>
                )
            )
    }

    render() {
        return (
            <div>
                <h2>fetch api</h2>
                {this._renderCurrencies()}
            </div>
        );
    }
}