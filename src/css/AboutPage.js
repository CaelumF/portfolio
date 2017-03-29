import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "a": {
        "width": "100%",
        "height": "100%",
        "color": "red"
    },
    "gh-widget-container": {
        "opacity": 0.9
    },
    "hubby": {}
});