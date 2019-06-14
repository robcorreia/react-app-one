import React, {Component } from 'react';

class ProdutoComponent extends Component {
    render() {
        return <div>
            <table>
                <tr>
                    <th>Produto</th>
                    <th>Preço</th> 
                    <th>Qtd</th>
                </tr>
                <tbody>
                    <tr>
                    <td>{this.props.nome}</td>
                    <td>{this.props.valor}</td>
                    <td>{this.props.quantidade}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    }
}

export default ProdutoComponent;