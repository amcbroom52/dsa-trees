import { TreeNodeNum } from "../common/tree";

/** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
 * Returns an array of values of visited nodes. */

function preOrder(node: TreeNodeNum | null): number[] {
  if (node === null) return [];

  const valArr = [];
  valArr.push(node!.val);
  valArr.push(...node!.children.flatMap(child => preOrder(child)));

  return valArr;
}


/** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
 * Returns an array of values of visited nodes. */

function postOrder(node: TreeNodeNum | null): number[] {
  if (node === null) return [];

  const valArr = node!.children.flatMap(child => postOrder(child));
  valArr.push(node!.val);

  return valArr;
}

export { preOrder, postOrder };
