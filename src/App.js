import { useState } from "react";
import AdditionalFeatures from "./components/additional-features/additionalFeatures";
import Footer from "./components/footer/Footer";
import Instructions from "./components/instructions/Instructions";
import MainView from "./components/mainView/MainView";
import MemeView from "./components/memeView/MemeView";
import Navbar from "./components/navbar/Navbar";

function App() {
    const [addMemeView, setAddMemeView] = useState(false);
    const [src, setSrc] = useState();

    return (
        <div>
            {addMemeView !== true && (
                <>
                    <Navbar />
                    <MainView setAddMemeView={setAddMemeView} setSrc={setSrc} />
                    <AdditionalFeatures />
                    <Instructions />
                    <Footer />
                </>
            )}

            {addMemeView === true && (
                <MemeView src={src} setAddMemeView={setAddMemeView} />
            )}
        </div>
    );
}

export default App;
