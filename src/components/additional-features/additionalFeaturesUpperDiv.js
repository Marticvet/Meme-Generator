import { SiSpeedtest } from "react-icons/si";
import { MdOutlineFilterFrames } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";

function UpperDiv() {
    return (
        <div className="additionalFeatures__container additionalFeatures__container--first">
            <div className="additionalFeatures__container--first-wrapper">
                <p className="additionalFeatures__container--first-icon">
                    <SiSpeedtest />
                </p>

                <h3 className="additionalFeatures__container--first-title">
                    "Fast Meme Video Maker"
                </h3>
                <p className="additionalFeatures__container--first-description">
                    The interface allows you to select a template with
                    black/white borders or without them, add meme text and
                    adjust its parameters — all in one screen.
                </p>
            </div>
            <div className="additionalFeatures__container--first-wrapper">
                <p className="additionalFeatures__container--first-icon">
                    <MdOutlineFilterFrames />
                </p>

                <h3 className="additionalFeatures__container--first-title">
                    Use Any File Type
                </h3>
                <p className="additionalFeatures__container--first-description">
                    The meme generator lets you choose any image, GIF or video
                    to transform into your own custom meme.
                </p>
            </div>
            <div className="additionalFeatures__container--first-wrapper">
                <p className="additionalFeatures__container--first-icon">
                    <HiOutlineLightBulb />
                </p>

                <h3 className="additionalFeatures__container--first-title">
                    Additional Features
                </h3>
                <p className="additionalFeatures__container--first-description">
                    Select one of the 12 fonts available, crop the file and mute
                    the video if necessary.
                </p>
            </div>
        </div>
    );
}

export default UpperDiv;
