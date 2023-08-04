import { Theme } from "rehype-pretty-code";

export default {
  name: "Moonlight II",
  type: "dark",
  colors: {
    foreground: "#c8d3f5",
    focusBorder: "#82aaff",
    contrastBorder: "#15151b",
    "editorCursor.foreground": "#82aaff",
    "editorRuler.foreground": "#444a73bb",
    "scrollbar.shadow": "#00000022",
    "tree.indentGuidesStroke": "#828bb866",
    "editorLink.activeForeground": "#c8d3f5",
    "selection.background": "#c8d3f5",
    "progressBar.background": "#82aaff",
    "textLink.foreground": "#65bcff",
    "textLink.activeForeground": "#b2dfff",
    "editorLineNumber.foreground": "#444a73",
    "editorLineNumber.activeForeground": "#828bb8",
    "editorBracketMatch.border": "#82aaffbb",
    "editorBracketMatch.background": "#1F2028",
    "editorWhitespace.foreground": "#c8d3f540",
    "editor.background": "#1F2028",
    "editor.foreground": "#c8d3f5",
    "editor.lineHighlightBackground": "#2f334d",
    "editor.selectionBackground": "#828bb850",
    "editor.selectionHighlightBackground": "#444a73",
    "editor.findMatchBackground": "#444a73",
    "editor.findMatchBorder": "#86e1fc",
    "editor.findMatchHighlightBackground": "#444a73",
    "editorOverviewRuler.findMatchForeground": "#86e1fcbb",
    "editorOverviewRuler.errorForeground": "#ff757fcc",
    "editorOverviewRuler.infoForeground": "#65bcff66",
    "editorOverviewRuler.warningForeground": "#ffc777cc",
    "editorOverviewRuler.modifiedForeground": "#82aaff66",
    "editorOverviewRuler.addedForeground": "#c3e88d66",
    "editorOverviewRuler.deletedForeground": "#ff98a466",
    "editorOverviewRuler.bracketMatchForeground": "#3e68d7bb",
    "editorOverviewRuler.border": "#1F2028",
    "editorHoverWidget.background": "#15151b",
    "editorHoverWidget.border": "#000000aa",
    "editorIndentGuide.background": "#444a73bb",
    "editorIndentGuide.activeBackground": "#828bb8aa",
    "editorGroupHeader.tabsBackground": "#1c1d24",
    "editorGroup.border": "#15151b",
    "editorGutter.modifiedBackground": "#82aaff66",
    "editorGutter.addedBackground": "#c3e88d66",
    "editorGutter.deletedBackground": "#ff5370aa",
    "tab.activeBorder": "#82aaff",
    "tab.activeModifiedBorder": "#828bb8",
    "tab.unfocusedActiveBorder": "#828bb8",
    "tab.activeForeground": "#c8d3f5",
    "tab.activeBackground": "#1F2028",
    "tab.inactiveForeground": "#828bb8",
    "tab.inactiveBackground": "#1c1d24",
    "tab.unfocusedActiveForeground": "#c8d3f5",
    "tab.border": "#15151b",
    "statusBar.noFolderBackground": "#1F2028",
    "statusBar.border": "#15151b",
    "statusBar.background": "#1c1d24",
    "statusBar.foreground": "#828bb8",
    "statusBar.debuggingBackground": "#baacff",
    "statusBar.debuggingForeground": "#c8d3f5",
    "statusBarItem.hoverBackground": "#828bb820",
    "activityBar.background": "#1c1d24",
    "activityBar.border": "#1F202860",
    "activityBar.foreground": "#b4c2f0",
    "activityBarBadge.background": "#3e68d7",
    "activityBarBadge.foreground": "#ffffff",
    "titleBar.activeBackground": "#1c1d24",
    "titleBar.activeForeground": "#c8d3f5",
    "titleBar.inactiveBackground": "#1c1d24",
    "titleBar.inactiveForeground": "#828bb8",
    "sideBar.background": "#1c1d24",
    "sideBar.foreground": "#828bb8",
    "sideBar.border": "#15151b",
    "titleBar.border": "#15151b",
    "sideBarTitle.foreground": "#c8d3f5",
    "sideBarSectionHeader.background": "#1c1d24",
    "sideBarSectionHeader.border": "#2f334d",
    "input.background": "#15151b",
    "input.foreground": "#c8d3f5",
    "input.placeholderForeground": "#c8d3f5aa",
    "input.border": "#00000066",
    "inputValidation.errorBackground": "#c53b53",
    "inputValidation.errorForeground": "#ffffff",
    "inputValidation.errorBorder": "#ff537050",
    "inputValidation.infoBackground": "#446bbb",
    "inputValidation.infoForeground": "#ffffff",
    "inputValidation.infoBorder": "#82aaff50",
    "inputValidation.warningBackground": "#ad7c43",
    "inputValidation.warningForeground": "#ffffff",
    "inputValidation.warningBorder": "#ffc77750",
    "dropdown.foreground": "#c8d3f5",
    "dropdown.background": "#2f334d",
    "dropdown.border": "#00000066",
    "list.hoverForeground": "#c8d3f5",
    "list.hoverBackground": "#1c1d24",
    "list.activeSelectionBackground": "#383e5c",
    "list.activeSelectionForeground": "#ffffff",
    "list.inactiveSelectionForeground": "#c8d3f5",
    "list.inactiveSelectionBackground": "#292e46",
    "list.focusBackground": "#131421",
    "list.focusForeground": "#c8d3f5",
    "list.highlightForeground": "#86e1fc",
    "list.warningForeground": "#ffc777cc",
    "terminal.foreground": "#bcc4d6",
    "terminal.selectionBackground": "#c8d3f544",
    "terminal.ansiWhite": "#c8d3f5",
    "terminal.ansiBlack": "#000000",
    "terminal.ansiBlue": "#82aaff",
    "terminal.ansiCyan": "#86e1fc",
    "terminal.ansiGreen": "#c3e88d",
    "terminal.ansiMagenta": "#fca7ea",
    "terminal.ansiRed": "#ff757f",
    "terminal.ansiYellow": "#ffc777",
    "terminal.ansiBrightWhite": "#c8d3f5",
    "terminal.ansiBrightBlack": "#828bb8",
    "terminal.ansiBrightBlue": "#82aaff",
    "terminal.ansiBrightCyan": "#86e1fc",
    "terminal.ansiBrightGreen": "#c3e88d",
    "terminal.ansiBrightMagenta": "#fca7ea",
    "terminal.ansiBrightRed": "#ff757f",
    "terminal.ansiBrightYellow": "#ffc777",
    "terminal.border": "#2f334d",
    "scrollbarSlider.background": "#828bb830",
    "scrollbarSlider.hoverBackground": "#a9b8e830",
    "scrollbarSlider.activeBackground": "#82aaff",
    "minimap.findMatchHighlight": "#86e1fccc",
    "minimap.selectionHighlight": "#86e1fc33",
    "minimapGutter.addedBackground": "#c3e88d66",
    "minimapGutter.modifiedBackground": "#82aaff66",
    "editorSuggestWidget.background": "#15151b",
    "editorSuggestWidget.foreground": "#a9b8e8",
    "editorSuggestWidget.highlightForeground": "#86e1fc",
    "editorSuggestWidget.selectedBackground": "#2f334d",
    "editorSuggestWidget.border": "#00000033",
    "editorError.foreground": "#ff5370",
    "editorWarning.foreground": "#ffc777cc",
    "editorWidget.background": "#1c1d24",
    "editorWidget.resizeBorder": "#82aaff",
    "editorMarkerNavigation.background": "#c8d3f505",
    "widget.shadow": "#00000033",
    "panel.border": "#00000033",
    "panel.background": "#1c1d24",
    "panel.dropBackground": "#c8d3f5",
    "panelTitle.inactiveForeground": "#828bb8",
    "panelTitle.activeForeground": "#c8d3f5",
    "panelTitle.activeBorder": "#82aaff",
    "terminalCursor.foreground": "#82aaff",
    "diffEditor.insertedTextBackground": "#c3e88d15",
    "diffEditor.removedTextBackground": "#ff537020",
    "notifications.background": "#15151b",
    "notifications.foreground": "#c8d3f5",
    "notificationLink.foreground": "#82aaff",
    "badge.background": "#3e68d7",
    "badge.foreground": "#ffffff",
    "button.background": "#3e68d7",
    "button.hoverBackground": "#65bcffcc",
    "extensionButton.prominentBackground": "#3e68d7",
    "extensionButton.prominentHoverBackground": "#65bcffcc",
    "peekView.border": "#00000030",
    "peekViewEditor.background": "#c8d3f505",
    "peekViewTitle.background": "#c8d3f505",
    "peekViewResult.background": "#c8d3f505",
    "peekViewEditorGutter.background": "#c8d3f505",
    "peekViewTitleDescription.foreground": "#c8d3f560",
    "peekViewResult.matchHighlightBackground": "#828bb850",
    "peekViewEditor.matchHighlightBackground": "#828bb850",
    "debugToolBar.background": "#1c1d24",
    "pickerGroup.foreground": "#82aaff",
    "gitDecoration.deletedResourceForeground": "#ff5370dd",
    "gitDecoration.conflictingResourceForeground": "#ffc777cc",
    "gitDecoration.modifiedResourceForeground": "#82aaffee",
    "gitDecoration.untrackedResourceForeground": "#77e0c6dd",
    "gitDecoration.ignoredResourceForeground": "#777fabaa",
    "gitlens.trailingLineForegroundColor": "#828bb8aa",
    "editorCodeLens.foreground": "#828bb8",
    "peekViewResult.selectionBackground": "#828bb870",
    "breadcrumb.background": "#1F2028",
    "breadcrumb.foreground": "#828bb8",
    "breadcrumb.focusForeground": "#c8d3f5",
    "breadcrumb.activeSelectionForeground": "#82aaff",
    "breadcrumbPicker.background": "#1c1d24",
    "menu.background": "#1c1d24",
    "menu.foreground": "#c8d3f5",
    "menu.selectionBackground": "#00000050",
    "menu.selectionForeground": "#82aaff",
    "menu.selectionBorder": "#00000030",
    "menu.separatorBackground": "#c8d3f5",
    "menubar.selectionBackground": "#00000030",
    "menubar.selectionForeground": "#82aaff",
    "menubar.selectionBorder": "#00000030",
    "settings.dropdownForeground": "#c8d3f5",
    "settings.dropdownBackground": "#2f334d",
    "settings.dropdownBorder": "#15151b",
    "settings.numberInputForeground": "#c8d3f5",
    "settings.numberInputBackground": "#15151b",
    "settings.numberInputBorder": "#00000066",
    "settings.textInputForeground": "#c8d3f5",
    "settings.textInputBackground": "#15151b",
    "settings.textInputBorder": "#00000066",
    "settings.headerForeground": "#82aaff",
    "settings.modifiedItemIndicator": "#82aaff",
    "settings.checkboxBackground": "#131421",
    "settings.checkboxForeground": "#c8d3f5",
    "settings.checkboxBorder": "#00000066",
  },
  tokenColors: [
    {
      name: "Comment",
      scope: [
        "comment",
        "punctuation.definition.comment",
        "string.quoted.docstring",
      ],
      settings: {
        foreground: "#858aa6",
      },
    },
    {
      name: "Variables and Plain Text",
      scope: [
        "variable",
        "support.variable",
        "string constant.other.placeholder",
        "text.html",
      ],
      settings: {
        foreground: "#c8d3f5",
      },
    },
    {
      name: "DOM Variables",
      scope: [
        "support.variable.dom",
        "support.constant.math",
        "support.type.object.module",
        "support.variable.object.process",
        "support.constant.json",
      ],
      settings: {
        foreground: "#ffc777",
      },
    },
    {
      name: "Nil",
      scope: ["constant.language.undefined", "constant.language.null"],
      settings: {
        foreground: "#7f85a3",
      },
    },
    {
      name: "PHP Constants",
      scope: ["constant.other.php"],
      settings: {
        foreground: "#ffc777",
      },
    },
    {
      name: "Colors",
      scope: ["constant.other.color"],
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Invalid",
      scope: ["invalid", "invalid.illegal"],
      settings: {
        foreground: "#ff5370",
      },
    },
    {
      name: "Invalid deprecated",
      scope: ["invalid.deprecated"],
      settings: {
        foreground: "#c099ff",
      },
    },
    {
      name: "Keyword, Storage",
      scope: [
        "keyword",
        "storage.type",
        "storage.modifier",
        "keyword.other.important",
      ],
      settings: {
        foreground: "#c099ff",
      },
    },
    {
      name: "Keyword, Storage",
      scope: ["keyword.control", "storage"],
      settings: {},
    },
    {
      name: "Interpolation",
      scope: [
        "punctuation.definition.template-expression",
        "punctuation.section.embedded",
      ],
      settings: {
        foreground: "#86e1fc",
      },
    },
    {
      name: "Spread",
      scope: ["keyword.operator.spread", "keyword.operator.rest"],
      settings: {
        foreground: "#ff757f",
        fontStyle: "bold",
      },
    },
    {
      name: "Operator, Misc",
      scope: [
        "keyword.operator",
        "keyword.control",
        "punctuation",
        "punctuation.definition.string",
        "punctuation.support.type.property-name",
        "text.html.vue-html meta.tag",
        "punctuation.definition.keyword",
        "punctuation.terminator.rule",
        "punctuation.definition.entity",
        "constant.other.color",
        "meta.tag",
        "punctuation.definition.tag",
        "punctuation.separator.inheritance.php",
        "punctuation.definition.block.tag",
        "punctuation.definition.tag.html",
        "punctuation.definition.tag.begin.html",
        "punctuation.definition.tag.end.html",
        "meta.property-list",
        "meta.brace.square",
        "keyword.other.template",
        "keyword.other.substitution",
      ],
      settings: {
        foreground: "#86e1fc",
      },
    },
    {
      name: "Keyword Control",
      scope: ["keyword.control"],
      settings: {},
    },
    {
      name: "Tag",
      scope: ["entity.name.tag", "meta.tag", "markup.deleted.git_gutter"],
      settings: {
        foreground: "#ff757f",
      },
    },
    {
      name: "Function, Special Method",
      scope: [
        "entity.name.function",
        "variable.function",
        "keyword.other.special-method",
      ],
      settings: {
        foreground: "#82aaff",
      },
    },
    {
      name: "Support Function",
      scope: ["support.function", "meta.function-call entity.name.function"],
      settings: {
        foreground: "#65bcff",
      },
    },
    {
      name: "C-related Block Level Variables",
      scope: ["source.cpp meta.block variable.other"],
      settings: {
        foreground: "#ff757f",
      },
    },
    {
      name: "Other Variable, String Link",
      scope: ["support.other.variable", "string.other.link"],
      settings: {
        foreground: "#ff757f",
      },
    },
    {
      name: "Constant, Function Argument, Tag Attribute, Embedded",
      scope: [
        "variable.other.constant",
        "constant.language",
        "keyword.other.type.php",
        "storage.type.php",
        "support.constant",
        "constant.character",
        "constant.escape",
        "keyword.other.unit",
      ],
      settings: {
        foreground: "#ff98a4",
      },
    },
    {
      name: "Number, Boolean",
      scope: [
        "constant.numeric",
        "constant.language.boolean",
        "constant.language.json",
        "constant.language.infinity",
        "constant.language.nan",
      ],
      settings: {
        foreground: "#ff966c",
      },
    },
    {
      name: "Function Argument",
      scope: [
        "variable.parameter.function.language.special",
        "variable.parameter",
        "meta.function.parameter variable",
      ],
      settings: {
        foreground: "#fca7ea",
      },
    },
    {
      name: "String, Symbols, Inherited Class, Markup Heading",
      scope: [
        "string",
        "constant.other.symbol",
        "constant.other.key",
        "entity.other.inherited-class",
        "markup.heading",
        "markup.inserted.git_gutter",
        "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js",
        "meta.attribute-selector",
      ],
      settings: {
        fontStyle: "",
        foreground: "#c3e88d",
      },
    },
    {
      name: "Object",
      scope: ["variable.other.object"],
      settings: {
        foreground: "#ffc777",
      },
    },
    {
      name: "Object Key",
      scope: [
        "meta.object-literal.key",
        "string.alias.graphql",
        "string.unquoted.graphql",
        "string.unquoted.alias.graphql",
        "meta.field.declaration.ts variable.object.property",
        "variable.object.property",
      ],
      settings: {
        foreground: "#4fd6be",
      },
    },
    {
      name: "Nested Object Property",
      scope: ["meta.object.member", "variable.other.object.property"],
      settings: {
        foreground: "#a9b8e8",
      },
    },
    {
      name: "Object Property",
      scope: [
        "variable.other.property",
        "support.variable.property",
        "support.variable.property.dom",
      ],
      settings: {
        foreground: "#a9b8e8",
      },
    },
    {
      name: "Haskell Constants",
      scope: ["source.haskell constant.other.haskell"],
      settings: {
        foreground: "#ff98a4",
      },
    },
    {
      name: "Haskell Imports",
      scope: ["source.haskell meta.import.haskell entity.name.namespace"],
      settings: {
        foreground: "#c8d3f5",
      },
    },
    {
      name: "Types Fixes",
      scope: [
        "source.haskell storage.type",
        "source.c storage.type",
        "source.java storage.type",
      ],
      settings: {
        foreground: "#ffc777",
      },
    },
    {
      name: "Lambda Arrow",
      scope: ["storage.type.function"],
      settings: {
        foreground: "#c099ff",
      },
    },
    {
      name: "Class, Support",
      scope: [
        "entity.name",
        "support.type",
        "support.class",
        "support.orther.namespace.use.php",
        "meta.use.php",
        "support.other.namespace.php",
        "markup.changed.git_gutter",
        "support.type.sys-types",
      ],
      settings: {
        foreground: "#ffc777",
      },
    },
    {
      name: "Entity types",
      scope: ["support.type"],
      settings: {
        foreground: "#ff966c",
      },
    },
    {
      name: "CSS Class and Support",
      scope: [
        "source.css support.type.property-name",
        "source.sass support.type.property-name",
        "source.scss support.type.property-name",
        "source.less support.type.property-name",
        "source.stylus support.type.property-name",
        "source.postcss support.type.property-name",
        "support.type.property-name.css",
        "support.type.vendored.property-name",
      ],
      settings: {
        foreground: "#82aaff",
      },
    },
    {
      name: "Sub-methods",
      scope: [
        "entity.name.module.js",
        "variable.import.parameter.js",
        "variable.other.class.js",
      ],
      settings: {
        foreground: "#ff757f",
      },
    },
    {
      name: "Language methods",
      scope: ["variable.language"],
      settings: {
        foreground: "#ff757f",
      },
    },
    {
      name: "entity.name.method.js",
      scope: ["entity.name.method.js"],
      settings: {
        foreground: "#82aaff",
      },
    },
    {
      name: "meta.method.js",
      scope: [
        "meta.class-method.js entity.name.function.js",
        "variable.function.constructor",
      ],
      settings: {
        foreground: "#82aaff",
      },
    },
    {
      name: "Attributes",
      scope: ["entity.other.attribute-name"],
      settings: {
        foreground: "#c099ff",
      },
    },
    {
      name: "HTML Attributes",
      scope: [
        "text.html.basic entity.other.attribute-name.html",
        "text.html.basic entity.other.attribute-name",
      ],
      settings: {
        foreground: "#ffc777",
      },
    },
    {
      name: "HTML Doctype",
      scope: [
        "meta.tag.metadata.doctype entity.name.tag",
        "meta.tag.metadata.doctype entity.other.attribute-name",
      ],
      settings: {
        foreground: "#c099ff",
      },
    },
    {
      name: "CSS Classes",
      scope: ["entity.other.attribute-name.class"],
      settings: {
        foreground: "#ffc777",
      },
    },
    {
      name: "CSS ID's",
      scope: ["source.sass keyword.control"],
      settings: {
        foreground: "#82aaff",
      },
    },
    {
      name: "CSS psuedo selectors",
      scope: [
        "entity.other.attribute-name.pseudo-class",
        "entity.other.attribute-name.pseudo-element",
      ],
      settings: {
        foreground: "#4fd6be",
      },
    },
    {
      name: "CSS Property value",
      scope: ["support.constant.property-value"],
      settings: {
        foreground: "#fca7ea",
      },
    },
    {
      name: "Inserted",
      scope: ["markup.inserted"],
      settings: {
        foreground: "#c3e88d",
      },
    },
    {
      name: "Deleted",
      scope: ["markup.deleted"],
      settings: {
        foreground: "#ff757f",
      },
    },
    {
      name: "Changed",
      scope: ["markup.changed"],
      settings: {
        foreground: "#c099ff",
      },
    },
    {
      name: "Regular Expressions",
      scope: ["string.regexp"],
      settings: {
        foreground: "#b4f9f8",
      },
    },
    {
      name: "Regular Expressions - Punctuation",
      scope: ["punctuation.definition.group"],
      settings: {
        foreground: "#ff757f",
      },
    },
    {
      name: "Regular Expressions - Character Class",
      scope: [
        "constant.other.character-class.regexp",
        "keyword.control.anchor.regexp",
      ],
      settings: {
        foreground: "#c099ff",
      },
    },
    {
      name: "Regular Expressions - Character Class Set",
      scope: ["constant.other.character-class.set.regexp"],
      settings: {
        foreground: "#ffc777",
      },
    },
    {
      name: "Regular Expressions - Quantifier",
      scope: ["keyword.operator.quantifier.regexp"],
      settings: {
        foreground: "#fca7ea",
      },
    },
    {
      name: "Escape Characters",
      scope: ["constant.character.escape"],
      settings: {
        foreground: "#86e1fc",
      },
    },
    {
      name: "URL",
      scope: ["*url*", "*link*", "*uri*"],
      settings: {
        fontStyle: "underline",
      },
    },
    {
      name: "Decorators",
      scope: [
        "tag.decorator.js entity.name.tag.js",
        "tag.decorator.js punctuation.definition.tag.js",
      ],
      settings: {
        foreground: "#82aaff",
      },
    },
    {
      name: "CSS Units",
      scope: ["keyword.other.unit"],
      settings: {
        foreground: "#fc7b7b",
      },
    },
    {
      name: "ES7 Bind Operator",
      scope: [
        "source.js constant.other.object.key.js string.unquoted.label.js",
      ],
      settings: {
        foreground: "#ff757f",
      },
    },
    {
      name: "JSON Key - Level 0",
      scope: [
        "source.json meta.structure.dictionary.json support.type.property-name.json",
      ],
      settings: {
        foreground: "#82aaff",
      },
    },
    {
      name: "JSON Key - Level 1",
      scope: [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      ],
      settings: {
        foreground: "#65bcff",
      },
    },
    {
      name: "JSON Key - Level 2",
      scope: [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      ],
      settings: {
        foreground: "#ff757f",
      },
    },
    {
      name: "JSON Key - Level 3",
      scope: [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      ],
      settings: {
        foreground: "#fca7ea",
      },
    },
    {
      name: "JSON Key - Level 4",
      scope: [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      ],
      settings: {
        foreground: "#ffc777",
      },
    },
    {
      name: "JSON Key - Level 5",
      scope: [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      ],
      settings: {
        foreground: "#4fd6be",
      },
    },
    {
      name: "JSON Key - Level 6",
      scope: [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      ],
      settings: {
        foreground: "#82aaff",
      },
    },
    {
      name: "Plain Punctuation",
      scope: ["punctuation.definition.list_item.markdown"],
      settings: {
        foreground: "#828bb8",
      },
    },
    {
      name: "Block Punctuation",
      scope: [
        "meta.block",
        "meta.brace",
        "punctuation.definition.block",
        "punctuation.definition.parameters",
        "punctuation.section.function",
      ],
      settings: {
        foreground: "#b4c2f0",
      },
    },
    {
      name: "Markdown - Plain",
      scope: ["meta.jsx.children", "meta.embedded.block"],
      settings: {
        foreground: "#b4c2f0",
      },
    },
    {
      name: "Markdown - Markup Raw Inline",
      scope: ["text.html.markdown markup.inline.raw.markdown"],
      settings: {
        foreground: "#c099ff",
      },
    },
    {
      name: "Markdown - Markup Raw Inline Punctuation",
      scope: [
        "text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown",
      ],
      settings: {
        foreground: "#86e1fc",
      },
    },
    {
      name: "Markdown - Heading punctuation",
      scope: [
        "markdown.heading",
        "markup.heading | markup.heading entity.name",
        "markup.heading.markdown punctuation.definition.heading.markdown",
      ],
      settings: {
        foreground: "#86e1fc",
      },
    },
    {
      name: "Markup - Italic",
      scope: ["markup.italic"],
      settings: {
        fontStyle: "italic",
        foreground: "#ff757f",
      },
    },
    {
      name: "Markup - Bold",
      scope: ["markup.bold", "markup.bold string"],
      settings: {
        fontStyle: "bold",
        foreground: "#ff757f",
      },
    },
    {
      name: "Markup - Bold-Italic",
      scope: [
        "markup.bold markup.italic",
        "markup.italic markup.bold",
        "markup.quote markup.bold",
        "markup.bold markup.italic string",
        "markup.italic markup.bold string",
        "markup.quote markup.bold string",
      ],
      settings: {
        fontStyle: "bold",
        foreground: "#ff757f",
      },
    },
    {
      name: "Markup - Underline",
      scope: ["markup.underline"],
      settings: {
        fontStyle: "underline",
        foreground: "#ff966c",
      },
    },
    {
      name: "Markdown - Blockquote",
      scope: ["markup.quote punctuation.definition.blockquote.markdown"],
      settings: {
        foreground: "#86e1fc",
      },
    },
    {
      name: "Markup - Quote",
      scope: ["markup.quote"],
      settings: {
        fontStyle: "italic",
      },
    },
    {
      name: "Markdown - Link",
      scope: ["string.other.link.title.markdown"],
      settings: {
        foreground: "#82aaff",
      },
    },
    {
      name: "Markdown - Link Description",
      scope: ["string.other.link.description.title.markdown"],
      settings: {
        foreground: "#c099ff",
      },
    },
    {
      name: "Markdown - Link Anchor",
      scope: ["constant.other.reference.link.markdown"],
      settings: {
        foreground: "#ffc777",
      },
    },
    {
      name: "Markup - Raw Block",
      scope: ["markup.raw.block"],
      settings: {
        foreground: "#c099ff",
      },
    },
    {
      name: "Markdown - Fenced Bode Block Variable",
      scope: [
        "markup.fenced_code.block.markdown",
        "markup.inline.raw.string.markdown",
      ],
      settings: {
        foreground: "#86e1fc",
      },
    },
    {
      name: "Markdown - Fenced Language",
      scope: ["variable.language.fenced.markdown"],
      settings: {
        foreground: "#86e1fc",
      },
    },
    {
      name: "Markdown - Separator",
      scope: ["meta.separator"],
      settings: {
        fontStyle: "bold",
        foreground: "#86e1fc",
      },
    },
    {
      name: "Markup - Table",
      scope: ["markup.table"],
      settings: {
        foreground: "#828bb8",
      },
    },
    {
      scope: "token.info-token",
      settings: {
        foreground: "#65bcff",
      },
    },
    {
      scope: "token.warn-token",
      settings: {
        foreground: "#ffc777",
      },
    },
    {
      scope: "token.error-token",
      settings: {
        foreground: "#ff757f",
      },
    },
    {
      scope: "token.debug-token",
      settings: {
        foreground: "#c099ff",
      },
    },
  ],
} as unknown as Theme;
