import * as actionTypes from "./actionTypes";

export const addFeature = (feature) => {
    return {
        type: actionTypes.ADD_FEATURE,
        payload: {
            feature: feature
        }
    };
}

export const removeFeature = feature => {
    return {
        type: actionTypes.REMOVE_FEATURE,
        payload: {feature: feature}
    }
}