import { BNodeNum } from "../common/bintree";

/** Returns smallest value from node that is larger than lowerBound.
 *
 * Returns null if no such value exists.
 **/

function nextLarger(node: BNodeNum, lowerBound: number): number | null {
  const rNextLarger = node.rnode ? nextLarger(node.rnode, lowerBound) : null;
  const lNextLarger = node.lnode ? nextLarger(node.lnode, lowerBound) : null;
  const selfNextLarger = node.val > lowerBound ? node.val : null;

  const nextLargers = [rNextLarger, lNextLarger, selfNextLarger].filter(
    el => el !== null) as number[];

  console.log(nextLargers);

  if (nextLargers.length === 0) return null;
  return Math.min(...nextLargers);
}

export { nextLarger };