import React from 'react';

class Cavalo extends React.Component {
  render() {
    return (
      <section className='Cavalo'>
        <div className='row'>
          <div className='columns title'>
            <h2>Txai Grão Pará</h2>
            <h6>REGISTRO 123456789</h6>
          </div>

          <div class="media-object">
            <div className="media-object-section large-7 columns">

              <img src="images/7.png"/>
            </div>
            <div className="media-object-section large-5 columns">
              <h4>Dreams feel real while we're in them.</h4>
              <p>I'm going to improvise. Listen, there's something you should know about me... about inception. An idea is like a virus, resilient, highly contagious. The smallest seed of an idea can grow. It can grow to define or destroy you.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Cavalo;
