import "./MemeView.css";
import { BsPaletteFill } from "react-icons/bs";
import { useState } from "react";
import html2canvas from 'html2canvas';

const availableFontSizes = [
    12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48,
];

const availableFamilies = ["Arial", "Comic Sans", "Pacifico"];

function MemeView({ src, setAddMemeView }) {
    const [upperText, setUpperText] = useState("");
    const [bottomText, setBottomText] = useState("");
    const [pickFontFamily, setPichFontFamily] = useState("");
    const [colorCode, setColorCode] = useState("#fff");
    const [fontSize, setFontSize] = useState("");

    function selectFontFamilyhandler(event) {
        setPichFontFamily(event.target.value);
    }

    function colorPickerHandler(event) {
        setColorCode(event.target.value);
    }

    function selectFontSizeHandler(event) {
        setFontSize(event.target.value);
    }

    function downloadMemeHandler() {
        html2canvas(document.getElementById('imageRef')).then((canvas) => {
            const link = document.createElement('a');
            link.download = 'image.png';
            link.href = canvas.toDataURL();
            link.click();
          });
    }

    return (
        <div className="memeView">
            <div className="memeView__wrapper">
                <div className="memeView__wrapper--leftside">
                    <button onClick={() => setAddMemeView(false)}>{"X"}</button>
                    <div id="imageRef">
                        <img
                            src={src}
                            alt="This is your meme"
                        />
                        <h1
                            style={{
                                fontFamily: pickFontFamily,
                                color: colorCode,
                                fontSize: `${fontSize}px`,
                            }}
                            className="upperText"
                        >
                            {upperText}
                        </h1>
                        <h1
                            style={{
                                fontFamily: pickFontFamily,
                                color: colorCode,
                                fontSize: `${fontSize}px`,
                            }}
                            className="bottomText"
                        >
                            {bottomText}
                        </h1>
                    </div>
                </div>
                <div className="memeView__wrapper--rightside">
                    <div className="template">
                        <span>
                            <BsPaletteFill /> Choose meme template
                        </span>
                    </div>
                    <div className="text">
                        <h6>Enter your text or emojis</h6>
                        <div className="text__top">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Top text"
                                onChange={(event) =>
                                    setUpperText(event.target.value)
                                }
                            />
                        </div>
                        <div className="text__middle">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Bottom text"
                                onChange={(event) =>
                                    setBottomText(event.target.value)
                                }
                            />
                        </div>

                        <div className="text__bottom">
                            <div className="text__bottom--wrapper">
                                <select
                                    onChange={selectFontFamilyhandler}
                                    className="text__bottom--wrapper-fontSelector"
                                    name="Font Families"
                                >
                                    {availableFamilies.map((family) => {
                                        return (
                                            <option key={family} value={family}>
                                                {family}
                                            </option>
                                        );
                                    })}
                                </select>

                                <input
                                    type="color"
                                    onChange={colorPickerHandler}
                                    defaultValue={'#FFFFFF'}
                                />

                                <select
                                    onChange={selectFontSizeHandler}
                                    className="text__bottom--wrapper-sizeSelector"
                                    name="Pick a font-size"
                                    defaultValue={'16'}
                                >
                                    {availableFontSizes.map((s) => {
                                        return <option key={s} value={s}>{s}</option>;
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="memeView__footer">
                <button onClick={downloadMemeHandler}>Download</button>
            </div>
        </div>
    );
}

export default MemeView;
