import { TreeNodeNum } from "../common/tree";

/** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
 * Returns an array of values of visited nodes. */

function preOrder(node: TreeNodeNum | null): number[] {
  const valArr = [];

  valArr.push(node!.val);

  for (const child of node!.children) {
    valArr.push(...preOrder(child));
  }

  return valArr;
}


/** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
 * Returns an array of values of visited nodes. */

function postOrder(node: TreeNodeNum | null): number[] {
  const valArr = [];

  for (const child of node!.children) {
    valArr.push(...postOrder(child));
  }

  valArr.push(node!.val);

  return valArr;
}

export { preOrder, postOrder };
