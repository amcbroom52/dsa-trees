import { BNodeNum } from "../common/bintree";

/** Get minimum depth from node.
 *
 * Minimum depth: length of shortest path from node to a leaf.
 **/

function minDepth(node: BNodeNum): number {
  const rightMin = node.rnode ? minDepth(node.rnode) : 0;
  const leftMin = node.lnode ? minDepth(node.lnode) : 0;

  const mins = [rightMin, leftMin].filter(el => el !== 0);

  if (mins.length === 0) return 1;
  return 1 + Math.min(...mins);
}

export { minDepth };