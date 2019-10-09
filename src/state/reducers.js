import * as types from './actionTypes'

const initialCar = {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  };
export const carReducer = (state = initialCar, action) => {
    switch(action.type){
        case types.ADD_FEATURE: {
            return {
                ...state,
                price: state.price + action.payload.feature.price,
                features: [...state.features, action.payload.feature]
            }
        };

        case types.REMOVE_FEATURE: {
            const remainingFeatures = state.features.filter(feature => feature.id !== action.payload.feature.id)
            return {
                ...state,
                features: remainingFeatures
            }
        }

        default: return state
    }
}