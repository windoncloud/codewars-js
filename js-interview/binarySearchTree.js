// 二叉搜索(查找)树
// BST => binarySearchTree
/*
* parameter: data:本节点的数据；left：做节点；right：右节点
*/
// 二叉搜索树 https://segmentfault.com/a/1190000017798199?utm_source=tag-newest
// 各种二叉树定义 https://www.cnblogs.com/-citywall123/p/11788764.html
// 若任意节点的左子树不空，则左子树上所有节点的值均小于它的根节点的值；
// 若任意节点的右子树不空，则右子树上所有节点的值均大于它的根节点的值；
// 任意节点的左、右子树也需要满足左边小右边大的性质
function Node(data,left,right){
    this.data = data;
    this.left = left;
    this.right = right;
}
function BST(){
    this.root = null;
    this.insert = insert;
}
/*
* parameter: data:本节点的数据；
* 创建节点示例并插入到二叉树的正确位置
*/
function Node(data,left,right){
    this.data = data;
    this.left = left;
    this.right = right;
}
function BST(){
    this.root = null;
    this.insert = insert;
}
/*
* 二叉树增加节点
*/
function insert(data){
    var node = new Node(data,null,null);
    if(this.root == null){
        this.root = node;
    }else{
        var current = this.root;
        while(true){
            if(current.data > data){
                if(current.left === null){
                    current.left = node;
                    break;
                }
                current = current.left;
            }else{
                if(current.right === null){
                    current.right = node;
                    break;
                }
                current = current.right;
            }
        }
    }
}
/*
* 二叉树查节点
*/
function find(data){
    var current = this.root;
    while(true){
        if(data === current.data){
            return current;
        }
        current = data < current.data ? current.left : current.right;
        if(current === null){
            return null;
        }
    }
}
/*
* 二叉树删除节点 (只删除叶子节点、只有一个子节点的Node
*/
function remove(data){
    this.root = removeNode(this.root,data);
}
function removeNode(node,data){
    if(node === null){
        return null;
    }
    if(data === node.data){
        if(node.left === null && node.right === null){
            return null;
        }
        if(node.left === null){
            return node.right;
        }
        if(node.right === null){
            return node.left;
        }
    }else if(data < node.data){
        node.left = removeNode(node.left,data);
        return node;
    }else{
        node.right = removeNode(node.right,data);
        return node;
    }
}
var bst = new BST();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(2);

