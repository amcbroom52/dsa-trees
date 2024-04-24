import { BNodeNum } from "../common/bintree";

/** Minimum depth from node to an "incomplete node".
 *
 * An incomplete node is a node with 0 or 1 children (not 2).
 */

function minDepthToIncomplete(node: BNodeNum): number {
  if (!node.rnode || !node.lnode) return 1;

  const rightMin = minDepthToIncomplete(node.rnode);
  const leftMin = minDepthToIncomplete(node.lnode);

  return 1 + Math.min(rightMin, leftMin);
}

export { minDepthToIncomplete };
