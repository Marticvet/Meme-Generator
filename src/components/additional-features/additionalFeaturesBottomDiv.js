import { HiOutlineDesktopComputer } from "react-icons/hi";
import { MdOutlineSecurity } from "react-icons/md";
import { SlSettings } from "react-icons/sl";
function BottomDiv() {
    return (
        <div className="additionalFeatures__container additionalFeatures__container--second">
            <div className="additionalFeatures__container--second-wrapper">
                <p className="additionalFeatures__container--second-icon">
                    <HiOutlineDesktopComputer />
                </p>
                <h3 className="additionalFeatures__container--second-title">
                    For All Devices
                </h3>
                <p className="additionalFeatures__container--second-description">
                    The meme builder is designed to work seamlessly on iPhone
                    and Android, as well as on Windows and Mac computers.
                </p>
            </div>{" "}
            <div className="additionalFeatures__container--second-wrapper">
                <p className="additionalFeatures__container--second-icon">
                    <MdOutlineSecurity />
                </p>
                <h3 className="additionalFeatures__container--second-title">
                    Secure Encryption
                </h3>
                <p className="additionalFeatures__container--second-description">
                    The website connection offers the highest level of
                    encryption, ensuring that you're the only one who can access
                    your files.
                </p>
            </div>{" "}
            <div className="additionalFeatures__container--second-wrapper">
                <p className="additionalFeatures__container--second-icon">
                    <SlSettings />
                </p>
                <h3 className="additionalFeatures__container--second-title">
                    Works with Any Format
                </h3>
                <p className="additionalFeatures__container--second-description">
                    The tool works with such formats as JPEG, TIFF, BMP, PNG,
                    GIF, MP4, WMV, MOV, VOB, AVI and more.
                </p>
            </div>
        </div>
    );
}

export default BottomDiv;
