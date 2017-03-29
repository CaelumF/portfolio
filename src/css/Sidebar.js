import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "Sidebar": {
        "width": "20%",
        "height": "100%",
        "left": 0,
        "top": 5,
        "position": "absolute",
        "borderColor": "#222259",
        "borderRightWidth": 3,
        "borderRightStyle": "groove",
        "backgroundColor": "#161622",
        "overflow": "auto",
        "WebkitPerspective": 800,
        "perspective": 800
    },
    "flippable": {
        "width": "100%",
        "height": "0%",
        "backgroundColor": "red",
        "position": "absolute",
        "WebkitTransformStyle": "preserve-3d",
        "transformStyle": "preserve-3d",
        "WebkitTransition": "-webkit-transform 1s",
        "transition": "transform 1s, -webkit-transform 1s"
    },
    "flippable figure": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "display": "block",
        "position": "absolute",
        "width": "100%",
        "height": "100%",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden"
    },
    "Sidebarflipped flippable": {
        "WebkitAnimationName": "flipper-thing",
        "animationName": "flipper-thing",
        "WebkitAnimationDuration": "0.3s",
        "animationDuration": "0.3s"
    }
});