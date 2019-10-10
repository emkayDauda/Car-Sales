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
                features: remainingFeatures,
                price: state.price - action.payload.feature.price,
            }
        }

        default: return state
    }
}

const store = [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
export const storeReducer = (state =  store, action) => {
    switch (action.type) {
        case types.ADD_FEATURE:{
            const nonAddedFeatures = state.filter(feature => feature.id !== action.payload.feature.id)
            return nonAddedFeatures;
        }
        case types.REMOVE_FEATURE:{
            // const removeFeature = state.filter(feature => feature.id !== action.payload.feature)
            // console.log(state, removeFeature);           
            return [...state, action.payload.feature];
        }
    
        default: return state;
    }
}