export class nodeDouble {
    element; 
    prev;
    next;
    constructor(element, prev = null, next = null){
        
        this.value = element;
        this.prev = prev;
        this.next = next;

    }
    
}