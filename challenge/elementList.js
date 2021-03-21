export class elementList {
    element; 
    next;
    value;
    constructor(element, next = null){
        
        this.next = next;
        this.value = element;
    }
    
}