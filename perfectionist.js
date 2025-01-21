export default {
  "perfectionist/sort-array-includes": [
    "error",
    {
      order: "asc",
      type: "alphabetical",
    },
  ],
  "perfectionist/sort-interfaces": [
    "error",
    {
      groups: ["unknown", "method", "multiline"],
      order: "asc",
      type: "alphabetical",
      partitionByNewLine: true,
    },
  ],
  "perfectionist/sort-imports": [
    "error",
    {
      internalPattern: ["^~/.*", "^@/.*"],
      newlinesBetween: "always",
      type: "natural",
      order: "asc",

      groups: [
        "react",
        "type",
        ["builtin", "external"],
        "internal-type",
        ["internal"],
        ["parent-type", "sibling-type", "index-type"],
        ["parent", "sibling", "index"],
        "object",
        "style",
        "side-effect-style",
        "unknown",
      ],
      customGroups: {
        value: {
          react: ["^react$", "^react-.+"],
        },
        type: {
          react: ["^react$", "^react-.+"],
        },
      },
    },
  ],
  "perfectionist/sort-jsx-props": [
    "error",
    {
      customGroups: {
        callback: "on*",
        reserved: ["key", "ref"],
      },
      groups: ["shorthand", "reserved", "multiline", "unknown", "callback"],
      order: "asc",
      type: "alphabetical",
    },
  ],
  "perfectionist/sort-union-types": [
    "error",
    {
      groups: [
        "conditional",
        "function",
        "import",
        "intersection",
        "keyword",
        "literal",
        "named",
        "object",
        "operator",
        "tuple",
        "union",
        "nullish",
      ],
      order: "asc",
      specialCharacters: "keep",
      type: "alphabetical",
    },
  ],
};
