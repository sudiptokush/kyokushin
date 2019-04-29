import React from "react";
import ImageProcessor from "../components/image-processor";

export default () => (
    <div>
        <div className="ichigeki">
            <ImageProcessor source="logoTop" type="fixed"></ImageProcessor>
        </div>
        <div className="kyokushin">
            <ImageProcessor source="logoMiddle" type="fixed"></ImageProcessor>
            <ImageProcessor source="logoBottom" type="fixed"></ImageProcessor>
        </div>
    </div>
)