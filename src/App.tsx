import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SearchPage from './components/search/SearchPage';
import PostingPage from './components/post/PostingPage';
import BottomNav from './components/shared/BottomNav';
import ListingPage from './components/listing/ListingPage';
import ListingInfo from './components/listing/listing-info/ListingInfo';
import SignInPage from './components/login/SignInPage';
import SignUpPage from './components/login/SignUpPage';
import SignUpAdditional from './components/login/SignUpAdditional';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={SearchPage} />
          <Route path="/listings" exact component={ListingPage} />
          <Route path="/listing-info" exact component={ListingInfo} />
          <Route path="/new-ad" exact component={PostingPage} />
          <Route path="/account" exact component={SignInPage} />
          <Route path="/sign-up" exact component={SignUpPage} />
          <Route path="/sign-up-additional" exact component={SignUpAdditional} />
        </Switch>
        <BottomNav />
      </Router>
    </div>
  );
}

export default App;
