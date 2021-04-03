export function isEqual(list, label, weight){
    return list.label===label && list.weight===weight;
}

export function isEqualWeight(element, weight){
    return element.weight === weight;
}
export function isEqualLabel(element, label){
    return element.label === label;
}
export function removeEach(list, actualindex, weight){
    for(let i=actualindex; i<list.length; i++){
        if(isEqualWeight(list[i], weight)){
           list.splice(i,1);
           if(i!=list.length){
               removeEach(list,i,weight);
           }        
        }
    }
}
export function createNode(enterLabel = null, enterWeight = null){
    return { 
        value: { label: enterLabel, weight: enterWeight, },
        next: null,
    }
}