function LinkedList() {

    var Node =function (element) {
        this.element = element;
        this.next = null;
    }

    var length = 0;
    var head = null;
    this.append = function(element){
        var node = new Node(element),
            current;
        if(head === null){
            head = node;
        }else{
            current = head;
            while(current.next){
                current=current.next;
            }
            current.next = node;
        }
        length++;
    };
    this.insert = function(position, element){};
    this.removeAt = function(position){};
    this.remove = function(element){};
    this.indexOf = function(element){};
    this.isEmpty = function(){
        return length === 0;
    };
    this.size = function(){
        return length;
    };
    this.getHead = function(){
        return head;
    };
    this.toString = function(){
        var current = head,
            string = '';
        while (current) {
            string += ',' + current.element;
            current = current.next;
        }
        return string.slice(1)
    };
    this.print = function(){};
}

var _node = new LinkedList()
_node.append(1)
_node.append(2)
console.log('_node', _node)