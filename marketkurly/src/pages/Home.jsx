import Header from '../components/Header';
import Nav from '../components/Nav';
import Mainevent from '../components/Mainevent';
import Side from '../components/Side';
import Cardlist from '../components/Cardlist';
import Eventproduct from '../components/Eventproduct';
import Subevent from '../components/Subevent';
import Lankinglist from '../components/Lankinglist';


const Home  = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Mainevent />
      <Side />
      <Cardlist />
      <Eventproduct />
      <Subevent />
      <Lankinglist />
    </div>
  );
}