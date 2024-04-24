import { TreeNodeNum } from "../common/tree";

/** numGreater(lowerBound): starting from the invoking node and moving
 * through its children, return a count of the number of nodes whose value
 * is greater than lowerBound. */

function numGreater(node: TreeNodeNum, lowerBound: number): number {
  let total = node.val > lowerBound ? 1 : 0;
  for (const childNode of node.children) {
    total += numGreater(childNode, lowerBound);
  }
  return total;
}

export { numGreater };