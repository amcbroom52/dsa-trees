import { TreeNodeNum } from "../common/tree";

/** Get maximum depth from node.
 *
 * Maximum depth: length of longest path from node to a leaf.
 **/

function maxDepth(node: TreeNodeNum | null): number {
  let depth = 0;
  for (const child of node!.children) {
    depth = Math.max(maxDepth(child), depth);
  }
  return depth + 1;
}

export { maxDepth };
