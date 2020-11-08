class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//example for creating node
myNode = new Node(10);
console.log(myNode);


class SLL {
    constructor() {
        this.head = null;
    }
   
    // a method for adding nodes to the front of our list
    addFront(value) {
        // Write a method that accepts a value and create a new node, 
        // assign it to the list head, and return a pointer to the new head node.

        // create a new node
        var newNode = new Node(value);

        // attach new node to existing list
        newNode.next = this.head;

        // reassign list's head
        this.head = newNode;

        // return the head
        return this.head;
    }
    

    removeFront() {
        //Write a method to remove the head node and return the new list head node. 
        //If the list is empty, return null.
        if(this.head) {
            this.head = this.head.next;
        }
        return this.head;
    }

    front() {
        // Write a method to return the value (not the node) at the head of the list. 
        // If the list is empty, return null.
        if(this.head) {
            return this.head.value;
        }
        return null;
    }


    // a method for viewing our list

    view() {
        //will have to see all of the nodes....
        //starting from the beginning of our list
        var currentNode = this.head;
        // as long as currentNode exists, or is NOT null
        while(currentNode) {
            console.log(`current nodes value is ${currentNode.value}`)
            // movding on the next node
            currentNode = currentNode.next
        }
    }

    //same as above "view". just different display
    display() {
        var output = "";
        var runner = this.head;
        while(runner) {
            output += runner.value + " "
            runner = runner.next;
        }
        return output;

    }

    contains(value) {
        var runner = this.head;
        while(runner) {
            if(runner.value === value) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    length() {
        var runner = this.head;
        var numNodes = 0;
        while(runner) {
            numNodes++;
            runner = runner.next;
        }
        return numNodes;
    }

    maxMinAvg() {
        var sum = 0;
        var max = this.head.value;
        var min = this.head.value;
        var runner = this.head;
        while(runner) {
            sum += runner.value;
            if(runner.value > max) {
                max = runner.value;
            }
            else if(runner.value < min) {
                min = runner.value;
            }
            runner = runner.next
        }
        return `max: ${max}, min: ${min}, avg: ${sum/this.length()}`
    }

}

//Creating Singly list objects from above SLL class and running methods

// let list = new SLL(myNode)
// console.log(list)

let list = new SLL()
console.log(list)

list.addFront(20)
console.log(list)


list.addFront(30)
console.log(list)

// list.removeFront()
// console.log(list)

list.view()
console.log(list.display())
console.log(list.front())
console.log(list.contains(30));
console.log(list.length())
console.log(list.maxMinAvg())

