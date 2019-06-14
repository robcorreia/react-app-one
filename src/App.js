import React,  {Component } from 'react';
import './App.css';
import Header from './components/header';
import ProdutoCompatonent from './components/produto-component';
import ProdutoComponent from './components/produto-component';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      texto: "texto do State",
      textoDigitado: "",
      textoDIgitado2: "",
      produtos: [
        {
          nome: "Produto 1",
          valor: "RS 1000.00",
          quantidade: 5
        },
        {
          nome: "Produto 2",
          valor: "RS 40.00",
          quantidade: 70
        },
        {
          nome: "Produto 3",
          valor: "RS 452.50",
          quantidade: 2
        }
      ],
      /*visibled: false,*/
    }

    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

    onClick() {
      this.setState({
        texto: 'Texto alterado'
      })
    }
   /* toggleButton = () =>{
      this.setState({
        ...this.state,
        visibled: !this.state.visibled 
      })
    }
*/
    onChange(e) {
      this.setState({
        textoDigitado: e.target.value
      })
    }

  render() {
    return (
      <div>
        <Header/>
        <p>{this.state.texto}</p>

        <button onClick={this.onClick}>Alterar texto</button><br></br>
        <input type="text" onChange={this.onChange}></input><br></br>
        <button onClick={this.toggleButton}>Listar produtos</button>


        <p> {this.state.textoDigitado}</p>
            
        {/*
          this.state.visibled ? this.state.produtos.map(produto =>{
           return <tr>
                    <td>{produto.nome}</td>
                    <td>{produto.valor}</td>
                    <td>{produto.quantidade}</td>
                </tr>
          }) : null*/


          this.state.produtos.map((produto) => 
                 <ProdutoComponent
                   nome={produto.nome}
                   quantidade = {produto.quantidade}
                   valor = {produto.valor}>
                </ProdutoComponent>

                 
          )
        }
        </div>
            
    );
  }
}
  

export default App;
