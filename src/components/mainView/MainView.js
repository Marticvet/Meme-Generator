import "./MainView.css";
import { createRef, useState } from "react";
import memeDogo from "../../images/meme-dogo.png";
import { IoIosAddCircle } from "react-icons/io";

function MainView({ setAddMemeView, setSrc }) {
    const [selectedFile, setSelectedFile] = useState();
    const ref = createRef(null);

    return (
        <div className="mainView">
            <div className="mainView__memeMaker">
                <div className="mainView__memeMaker--container">
                    <h1>Meme Maker</h1>
                    <p>Make a meme online from images</p>
                </div>

                <div className="mainView__memeMaker--imgBox">
                    <img
                        className="mainView__memeMaker--imgBox-img"
                        src={selectedFile ? selectedFile : memeDogo}
                        alt=""
                    />
                    <div className="mainView__memeMaker--imgBox-add">
                        <h3>Upload your image</h3>
                        <input
                            type="file"
                            onChange={(event) => {
                                setSelectedFile(
                                    URL.createObjectURL(event.target.files[0])
                                );
                                setSrc(
                                    URL.createObjectURL(event.target.files[0])
                                );

                                if (event.target.files.length > 0) {
                                    setAddMemeView(true);
                                }
                            }}
                            ref={ref}
                        />
                        <button
                            onClick={() => {
                                ref.current.click();
                            }}
                        >
                            <IoIosAddCircle /> Choose File
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainView;
// {/* <img src={selectedFile} alt="" /> */}

// {/* <h1>Meme Maker</h1>
// <p>Make a meme online from images</p>
// <input type="file" onChange={fileSelectedHandler} /> */}
