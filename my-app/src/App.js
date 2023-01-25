import { HeaderContent } from './componentsHtml/HeaderContent/headerContent';
import { SectionContent } from './componentsHtml/SectionContent/SectionContent';
import { CardsComponents } from './componentsHtml/CardsContent/CardsContent';
import { FooterContent } from './componentsHtml/FooterSection/FooterContent';
import './App.css';

function App() {
  return (
   <main class='mainContent'>
    <>
    <HeaderContent/>
    <SectionContent/>
    <CardsComponents/>
    <FooterContent/>
    </>
   </main>
  );
}

export default App;
