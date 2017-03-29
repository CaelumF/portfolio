import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "SidebarListItem": {
        "width": "100%",
        "height": 4,
        "marginTop": 5,
        "marginBottom": 5,
        "border": "solid 5px #191919",
        "borderTopWidth": 2,
        "borderLeftStyle": "none",
        "borderRightStyle": "none",
        "backgroundColor": "#3f3f3f",
        "color": "#340246",
        "cursor": "pointer",
        "textAlign": "center",
        "transition": "all 0.2s ease-out"
    },
    "Highlighted": {
        "width": "100%",
        "height": 4,
        "marginTop": 5,
        "marginBottom": 5,
        "border": "solid 5px #191919",
        "borderTopWidth": 2,
        "borderLeftStyle": "none",
        "borderRightStyle": "none",
        "backgroundColor": "#3f3f3f",
        "color": "#340246",
        "cursor": "pointer",
        "textAlign": "center",
        "transition": "all 0.2s ease-out",
        "borderColor": "#0088ff",
        "borderTopColor": "#40406f",
        "borderBottomStyle": "solid"
    },
    "SidebarListItem:hover": {
        "borderColor": "#3f4499",
        "borderTopColor": "#3f3f3f"
    },
    "SidebarListItem p": {
        "color": "white"
    },
    "Highlighted p": {
        "color": "white"
    }
});