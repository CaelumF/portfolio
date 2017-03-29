import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "MainPane": {
        "left": "20%",
        "width": "80%",
        "height": "100%",
        "position": "absolute",
        "borderColor": "#111133",
        "borderTopStyle": "groove",
        "overflowY": "scroll"
    },
    "content": {
        "marginBottom": 10,
        "maxWidth": 55,
        "marginLeft": "auto",
        "marginRight": "auto",
        "overflow": "visible",
        "display": "block",
        "textAlign": "left"
    },
    "content pre": {
        "fontFamily": "sans-serif",
        "fontSize": 1.3,
        "wordWrap": "break-word",
        "whiteSpace": "pre-wrap"
    },
    "content *": {
        "marginLeft": 3
    },
    "content li": {
        "marginBottom": 1
    },
    "content h1": {
        "textAlign": "center",
        "marginLeft": "auto",
        "marginRight": "auto"
    },
    "h2": {
        "textAlign": "center",
        "marginLeft": "auto",
        "marginRight": "auto"
    },
    "h3": {
        "textAlign": "center",
        "marginLeft": "auto",
        "marginRight": "auto"
    },
    "content img": {
        "display": "inline"
    },
    "content hr": {
        "marginTop": 2.5
    },
    "content iframe": {
        "float": "right"
    },
    "img": {
        "float": "right"
    },
    "cMedia": {
        "float": "right"
    },
    "newContentSlide *": {
        "WebkitAnimationName": "slideFadeDown",
        "animationName": "slideFadeDown",
        "WebkitAnimationDuration": "0.3s",
        "animationDuration": "0.3s",
        "zIndex": -1000
    },
    "contentSlideIn *": {
        "WebkitAnimationName": "slideFadeIn",
        "animationName": "slideFadeIn",
        "WebkitAnimationDuration": "0.3s",
        "animationDuration": "0.3s",
        "zIndex": -1000
    }
});