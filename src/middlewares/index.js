export const logger = (store) => (next) => (action) =>{
    console.log(action);
    next(action);
}

//añadir pokemon
export const featuring = (store) => (next) => (actionInfo) =>{
    const featured = [{ name: 'eddie'}, ...actionInfo.action.payload];
    const updateActionInfo = {
        ...actionInfo,
        action: {...actionInfo.action, payload:featured },
    }
    next(updateActionInfo);
}

export const newFeaturing = (store) => (next) => (actionInfo) =>{
    const featured = [{ name: 'Aida'}, ...actionInfo.action.payload];
    const updateActionInfo = {
        ...actionInfo,
        action: {...actionInfo.action, payload:featured },
    }
    next(updateActionInfo);
}
/*
//// prefijo para cada pokemon
export const prefix = store => next => action => {
    const prefixed = action.action.payload.map( pokemon => ({
        ...pokemon,
        name: 'Poke: ' + pokemon.name
    }) )

    const updatedAction = {
        ...action,
        action: {...action.action, payload: prefixed}
    }
    next(updatedAction);
}*/