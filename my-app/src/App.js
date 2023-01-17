import { HeaderContent } from './componentsHtml/HeaderContent/headerContent';
import { SectionContent } from './componentsHtml/SectionContent/SectionContent';
import { CardsComponents } from './componentsHtml/CardsContent/CardsContent';
import './App.css';

function App() {
  return (
   <main class='mainContent'>
    <>
    <HeaderContent/>
    <SectionContent/>
    <CardsComponents/>
    </>
   </main>
  );
}

export default App;
