import "./Instructions.css";

function Instructions() {
    return (
        <div className="instructions">
            <h1 className="instructions__heading">How to make a meme</h1>
            <div className="instructions__wrapper">
                <div className="instructions__wrapper--steps">
                    <span className="instructions__wrapper--steps-span">
                        Step 1
                    </span>{" "}
                    <h4 className="instructions__wrapper--steps-heading">
                        Open a file
                    </h4>{" "}
                    <p className="instructions__wrapper--steps-paragraph">
                        Pick one of 9 available meme templates. Then choose an
                        image or video from your device, Dropbox or Google Drive
                        storage account.
                    </p>
                </div>

                <div className="instructions__wrapper--steps">
                    <span className="instructions__wrapper--steps-span">
                        Step 2
                    </span>{" "}
                    <h4 className="instructions__wrapper--steps-heading">
                        Create a meme
                    </h4>{" "}
                    <p className="instructions__wrapper--steps-paragraph">
                        When the file is uploaded, you can change the meme
                        template if you like. Then enter text, adjust font and
                        crop the frame.
                    </p>
                </div>

                <div className="instructions__wrapper--steps">
                    <span className="instructions__wrapper--steps-span">
                        Step 3
                    </span>{" "}
                    <h4 className="instructions__wrapper--steps-heading">
                        Download your own meme
                    </h4>{" "}
                    <p className="instructions__wrapper--steps-paragraph">
                        Playback the video meme or take a close look at the
                        image to make sure you did great. Now save the result by
                        clicking the appropriate button.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Instructions;
