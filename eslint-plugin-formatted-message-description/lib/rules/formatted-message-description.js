const ERROR_DESCRIPTION_MISSING =
  "FormattedMessage component should have a `description` prop";

module.exports = {
  meta: {
    type: "problem",
    schema: [],
  },
  create: (context) => {
    return {
      JSXOpeningElement: function (node) {
        const nodeType = node.name.name;
        if (nodeType !== "FormattedMessage") {
          return;
        }
        console.log(node);
        if (!node.attributes.find((attr) => attr.name.name === "description")) {
          context.report({
            node: node,
            message: ERROR_DESCRIPTION_MISSING,
          });
        }
      },
    };
  },
};
