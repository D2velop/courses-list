export class Object {
    weight; 
    label;
    next;
    constructor(label, weight, next = null){
        this.label =label;        
        this.weight = weight;
        this.next = next;
    }
    
}