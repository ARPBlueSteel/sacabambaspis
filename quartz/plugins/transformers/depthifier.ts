import { QuartzTransformerPlugin } from "../types";
import { Root } from "mdast";
import { visit } from "unist-util-visit";

interface Options {
  selectors: string[];
}

export const Depthifier: QuartzTransformerPlugin<Options> = (opts?: Options) => {
  const selectors = opts?.selectors || [];

  return {
    name: "Depthifier",
    markdownPlugins() {
      return [
        () => {
          return (tree: Root) => {
            let currentDepth = 0;

            visit(tree, (node, _, parent) => {
              if (node.type === 'heading') {
                currentDepth = node.depth;
              }

              if (selectors.includes(node.type) && currentDepth > 0) {
                node.data = node.data || {};
                if (typeof node.data.hProperties === 'object' && node.data.hProperties !== null) {
                  (node.data.hProperties as any).depth = currentDepth;
                } else {
                  node.data.hProperties = { depth: currentDepth };
                }
              }
            });
          };
        },
      ];
    },
  };
};