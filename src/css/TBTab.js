import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "TBTab": {
        "display": "inline-block",
        "position": "relative",
        "height": "100%",
        "maxHeight": 5,
        "minWidth": "33.3%",
        "cursor": "pointer"
    },
    "TBTab-background": {
        "top": 0,
        "width": "100%",
        "height": 5,
        "filter": "blur(5px)",
        "backgroundSize": "cover",
        "display": "block",
        "position": "absolute",
        "transition": "all 0.2s ease-out"
    },
    "TBTab-background:hover": {
        "filter": "blur(1.5px)"
    },
    "selected-tab": {
        "filter": "blur(0px)"
    },
    "selected-tab:hover": {
        "filter": "blur(0px)"
    },
    "TBTab p": {
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none",
        "width": "70%",
        "marginLeft": "auto",
        "marginRight": "auto",
        "textAlign": "center",
        "fontSize": 2,
        "backgroundColor": "rgba(246, 245, 245, 0.4)",
        "wordBreak": "keep-all",
        "zIndex": 10000,
        "opacity": 0.9,
        "pointerEvents": "none"
    }
});