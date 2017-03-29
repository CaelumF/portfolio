import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "Topbar": {
        "width": "100%",
        "top": 0,
        "height": 5,
        "maxHeight": 5,
        "backgroundColor": "#0e2239",
        "zIndex": -700000
    },
    "tabs": {
        "width": "80%",
        "textAlign": "center",
        "overflowX": "auto",
        "overflowY": "hidden",
        "backgroundColor": "#002f55",
        "marginLeft": "20.0%",
        "borderLeft": "2px solid #000000",
        "position": "absolute",
        "maxHeight": 5,
        "zIndex": 90000
    },
    "tabs div": {
        "display": "inline-block",
        "textAlign": "left"
    },
    "Topbar img": {
        "left": 0,
        "top": "auto",
        "bottom": "auto",
        "backgroundImage": "image(\"images/caelumF.png\")"
    }
});