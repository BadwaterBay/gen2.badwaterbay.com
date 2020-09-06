import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from './components/common/Navigation';
import Footer from './components/common/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import Labelcopier from './components/labelcopier/Labelcopier';
import Error from './components/error/Error';

const basics = {
  name: 'Badwater Bay',
  picture: '',
  email: 'badwaterbay@gmail.com',
  website: 'https://badwaterbay.com',
  summary: 'We code open-source apps.',
  profiles: [
    {
      network: 'Email',
      username: 'badwaterbay@gmail.com',
      url: 'mailto:badwaterbay@gmail.com',
      icon: {
        iconPrefix: 'far',
        iconName: 'envelope',
      },
    },
    {
      network: 'GitHub',
      username: 'BadwaterBay',
      url: 'https://github.com/BadwaterBay/',
      icon: {
        iconPrefix: 'fab',
        iconName: 'github',
      },
    },
  ],
};

function App() {
  return (
    <div id="App" className="main-content">
      <Navigation basics={basics} />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/labelcopier" component={Labelcopier} exact />
        <Route component={Error} />
      </Switch>
      <Footer basics={basics} />
    </div>
  );
}

export default App;
