import {elementList} from './elementList';

export class circularChainList {
     head ;
     tail ;
     length ;    
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    build(jsonObj){
        for(let i = jsonObj.length-1; i >= 0; i--){
            this.add(jsonObj[i]);
        }
    }
    
    add(element){
        let node = new elementList(element, null);
        node.next = this.head;
        this.head = node;
        this.length ++;
        if(this.length === 1){
            this.tail = this.head;
        }
        this.tail.next = this.head;

    }
}