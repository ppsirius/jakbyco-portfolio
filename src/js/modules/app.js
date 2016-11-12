import About from '../components/about';

class App {
  constructor() {
    this.domLoaded = false;
    window.addEventListener('DOMContentLoaded', () => this.domLoaded = true );
  }

  render() {
    if(this.domLoaded) {
      let about = new About().render();
      document.body.innerHTML = '' +
          about
    }
  }

  checkDevice() {
    // @todo check device for browser happy or retina display
  }

  async() {
    // @todo async load assets
  }
}

export default App;

