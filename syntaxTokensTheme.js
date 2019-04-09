let prepareTokensColors = ({
  errorColor,
  textColor,
  commentColor,
  functionColor,
  keywordColor,
  typeColor,
  stringColor
}) => [
  {
    "scope": "invalid",
    "settings": {
      "foreground": errorColor
    }
  },
  {
    "scope": [
      "comment",
      "comment punctuation",
      "comment entity",
      "comment string",
      "comment meta.link string",
      "comment keyword",
      "comment storage",
      "comment support",
      "comment constant",
      "comment constant.language",
      "comment variable",
      "comment markup storage",
      "comment meta.tag entity",
      "comment meta.tag entity.other"
    ],
    "settings": {
      "foreground": commentColor
    }
  },
  {
    "scope": [
      "text",
      "constant",
      "entity",
      "variable",
      "punctuation",
      "support",
      "support.constant",
      "meta.class support.class",
      "meta.var support.class",
      "meta.var support.constant",
      "meta.import constant.language",
      "meta.tag entity.other",
      "meta.selector entity.other"
    ],
    "settings": {
      "foreground": textColor
    }
  },
  {
    "scope": [
      "entity.name.function",
      "meta.function support",
      "meta.tag entity support.class",
      "meta.function-call support",
      "meta.method.declaration storage",
      "markup meta.link",
      "source.shell support.function"
    ],
    "settings": {
      "foreground": functionColor
    }
  },
  {
    "scope": [
      "keyword",
      "storage",
      "constant.language",
      "markup.raw",
      "markup.inline.raw",
      "string meta.template punctuation",
      "keyword punctuation",
      "meta.tag entity",
      "meta.property-value support.constant",
      "source.shell string.interpolated punctuation"
    ],
    "settings": {
      "foreground": keywordColor
    }
  },
  {
    "scope": [
      "meta.type support",
      "meta.type entity",
      "meta.type string",
      "meta.type meta.brace",
      "meta.return.type entity",
      "meta.return.type support",
      "meta.other.type keyword",
      "meta.other.type support",
      "meta.other.type support.class",
      "meta.function storage.type.php",
      "comment entity.name.type"
    ],
    "settings": {
      "foreground": typeColor
    }
  },
  {
    "scope": [
      "string",
      "string.regexp constant",
      "meta.property-value constant.other.color",
      "markup.quote"
    ],
    "settings": {
      "foreground": stringColor
    }
  },
  {
    "scope": [
      "markup.italic",
      "string.regexp",
      "variable.other.property",
      "support.variable.property",
      "variable.other.object.property",
      "meta.selector entity.other"
    ],
    "settings": {
      "fontStyle": "italic"
    }
  },
  {
    "scope": [
      "comment storage",
      "comment keyword",
      "constant.character",
      "markup.heading",
      "markup.bold",
      "meta.selector entity",
      "meta.property-value keyword.other.important"
    ],
    "settings": {
      "fontStyle": "bold"
    }
  },
  {
    "scope": [
      "markup meta.link"
    ],
    "settings": {
      "fontStyle": "italic underline"
    }
  },
  {
    "scope": [
      "comment markup storage"
    ],
    "settings": {
      "fontStyle": ""
    }
  }
];

module.exports = prepareTokensColors;