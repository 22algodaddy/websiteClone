import Header from "./Components/header/header.jsx"
import {Videobottom} from "./Components/backgroundVideo/video.jsx"
import Video from "./Components/backgroundVideo/video.jsx"
import Middlecarousel from "./Components/middleCarousel/middleCarousel.jsx"
import Footer from "./Components/footer/footer.jsx"
import Newsletter from "./Components/newsLetter/newsletter.jsx"
import Carousel from "./Components/Carousel/carousel.jsx"
import Inforow from "./Components/infoRow/infoRow.jsx"

function App() {
  return (
    <div className="App">
        <Header/>
        <Video/>
        <Middlecarousel/>
        <Videobottom></Videobottom>
        <Carousel></Carousel>
        <Inforow></Inforow>
        <Newsletter></Newsletter>
        <Footer></Footer>

    </div>
  );
}

export default App;
