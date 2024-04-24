import { TreeNodeNum } from "../common/tree";

/** sumValues(): add up all values of node and its descendants.
 * Returns sum as an integer. */
function sumValues(node: TreeNodeNum): number {
  let total = node.val;
  for (const childNode of node.children) {
    total += sumValues(childNode);
  }
  return total;
}

export { sumValues };
