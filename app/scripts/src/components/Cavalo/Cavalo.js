import React from 'react';

class Cavalo extends React.Component {
  render() {
    return (
      <section className='Cavalo'>
        <div className='row'>
          <Title/>
          <div class="media-object">
            <Image/>
            <Informacao/>
          </div>
        </div>
      </section>
    );
  }
}

class Informacao extends React.Component {
  render() {
    return (
      <div className="media-object-section large-5 columns">

        <div className='Descricao'>
          <h6>DESCRIÇÃO</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel repellendus error fuga rem quae. Repellendus unde dolores explicabo quisquam, debitis praesentium id illo aspernatur eius.
          </p>
        </div>
        <div className='Raca inline'>
          <h6>RAÇA</h6>
          <p>Mangalarga Machador</p>
        </div>
        <div className='Sexo inline'>
          <h6>SEXO</h6>
          <p>Macho</p>
        </div>
        <div className='Nascimento inline'>
          <h6>NASCIMENTO</h6>
          <p>27/03/2001</p>
        </div>
        <div className='Pelagem inline'>
          <h6>PELAGEM</h6>
          <p>Castanha</p>
        </div>

        <div className='Genealogia'>
          <h6>GENEALOGIA</h6>
          <Caixa/>
          <Caixa/>
        </div>

        <div className='Valor'>
          <h6>VALOR</h6>
          <p>Este animal não se não está disponível para venda</p>
        </div>

      </div>
    );
  }
}

class Caixa extends React.Component {
  render() {
    return (
      <div className='Caixa'>
        <div className='origem'>
          <p>Lorem ipsum</p>
        </div>
        <div className='ramificacao'>
          <img src='images/bracket.png' className='bracket' />
          <div className='content'>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor</p>
          </div>
        </div>
      </div>
    );
  }
}


class Title extends React.Component {
  render() {
    return (
      <div className='columns title'>
        <h2>Txai Grão Pará</h2>
        <h6>REGISTRO 123456789</h6>
      </div>
    );
  }
}

class Image extends React.Component {
  render() {
    return (
      <div className="media-object-section large-7 columns">
        <img src="images/7.png"/>
      </div>
    );
  }
}

export default Cavalo;
