import { BNodeNum } from "../common/bintree";

/** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
 * Returns an array of values of visited nodes. */

function preOrder(node: BNodeNum | null): number[] {
  if (node === null) return [];

  const valArr = [];

  valArr.push(node.val);
  valArr.push(...preOrder(node.lnode));
  valArr.push(...preOrder(node.rnode));

  return valArr;
}


/** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
 * Returns an array of values of visited nodes. */

function postOrder(node: BNodeNum | null): number[] {
  if (!node) return [];

  const valArr = [];

  valArr.push(...postOrder(node!.lnode));
  valArr.push(...postOrder(node!.rnode));
  valArr.push(node!.val);

  return valArr;
}

export { preOrder, postOrder };