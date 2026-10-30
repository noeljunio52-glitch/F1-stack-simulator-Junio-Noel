
class Stack {
    constructor() {
        this.items = []
        this.count = 0
         
    }

    
    push(element) {
        this.items[this.count] = element
        let push_res=`${element}`; //console.log(`added to ${this.count}`);
        this.count += 1;
        let count=this.count -1;
        //return [push_res,count];
        return [push_res, count];
    }

    
    pop() {
        if(this.count == 0) return undefined
        let deleteItem = this.items[this.count - 1]
        this.count -= 1
        console.log(`${deleteItem} removed`)
        return deleteItem
    }

    
    peek() {
        console.log(`Top element is ${this.items[this.count - 1]}`)
        return this.items[this.count - 1]
    }

   
    isEmpty() {
        console.log(this.count == 0 ? 'Stack is empty' : 'Stack is NOT empty')
        return this.count == 0
    }

   
    size() {
        console.log(`${this.count} elements in stack`)
        return this.count
    }

    print() {
        let str = ''
        for(let i = 0; i < this.count; i++) {
            str += this.items[i] + ' '
        }
        return str
    }

    
    clear() {
        this.items = []
        this.count = 0
        console.log('Stack cleared..')
        return this.items
    }
}

const stack = new Stack()

$(document).ready(function(){
    $("#stack").prepend(`<div class="row bg-primary push">${stack.push(100)[0]}</div>`);
    $("#stack").prepend(`<div class="row bg-success push">${stack.push(200)[0]}</div>`);
    $("#stack").prepend(`<div class="row bg-primary push">${stack.push(300)[0]}</div>`);
    $("#stack").prepend(`<div class="row bg-success push">${stack.push(400)[0]}</div>`);
});
