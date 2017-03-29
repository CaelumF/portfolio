import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "smolIMG": {
        "width": "80%",
        "float": "none",
        "height": "auto",
        "display": "block !important",
        "marginLeft": "auto",
        "marginRight": "auto",
        "clear": "both"
    },
    "spookText": {
        "textAlign": "center"
    }
});