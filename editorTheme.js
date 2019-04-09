let error = ({fg, border}) => ({
  "errorForeground": fg,
  "editorError.foreground": fg,
  "editorError.border": border,
})

let warning = ({fg, border}) => ({
  "editorWarning.foreground": fg,
  "editorWarning.border": border,
})

let info = ({fg, border}) => ({
  "editorInfo.border": fg,
  "editorInfo.foreground": border,
})

let basicEditor = ({
  fg,
  bg,
  border,
  selection,
  wordHighlight,
  writeableWordHighlight,
  inactiveWordHighlight,
  lineHighlight,
  cursor,
  lineNumber,
  activeLineNumber,
  ruler,
  whitespace,
  foundItem,
  otherFoundItems,
  foundItemBorder
}) => ({
  "editor.background": bg,
  "editor.foreground": fg,
  "editor.selectionBackground": selection,
  "editor.selectionForeground": fg,
  "editor.selectionHighlightBackground": wordHighlight,
  "editor.selectionHighlightBorder": border,
  "editor.inactiveSelectionBackground": inactiveWordHighlight,
  "editor.hoverHighlightBackground": selection,
  "editor.lineHighlightBackground": lineHighlight,
  "editor.lineHighlightBorder": border,
  "editor.wordHighlightBackground": wordHighlight,
  "editor.wordHighlightBorder": border,
  "editor.wordHighlightStrongBackground": writeableWordHighlight,
  "editor.wordHighlightStrongBorder": border,
  "editor.rangeHighlightBackground": otherFoundItems,
  "editor.rangeHighlightBorder": border,
  "editor.findMatchBackground": foundItem,
  "editor.findMatchBorder": foundItemBorder,
  "editor.findMatchHighlightBackground": otherFoundItems,
  "editor.findMatchHighlightBorder": border,
  "editor.findRangeHighlightBackground": otherFoundItems,
  "editor.findRangeHighlightBorder": border,
  "editorCursor.background": cursor,
  "editorCursor.foreground": cursor,
  "editorLineNumber.activeForeground": activeLineNumber,
  "editorLineNumber.foreground": lineNumber,
  "editorRuler.foreground": ruler,
  "editorPane.background": bg,
  "editorWhitespace.foreground": whitespace
})

let overviewRuler = ({
  border,
  foundItems,
  matchedBracket,
  deletedLines,
  addedLines,
  wordHighlights,
  writeableWordHighlights,
  modifiedLines,
  selection,
  warnings,
  errors,
  info,
  currentContent,
  incomingContent,
  commonContent
}) => ({
  "editorOverviewRuler.addedForeground": addedLines,
  "editorOverviewRuler.border": border,
  "editorOverviewRuler.bracketMatchForeground": matchedBracket,
  "editorOverviewRuler.deletedForeground": deletedLines,
  "editorOverviewRuler.findMatchForeground": foundItems,
  "editorOverviewRuler.modifiedForeground": modifiedLines,
  "editorOverviewRuler.selectionHighlightForeground": selection,
  "editorOverviewRuler.wordHighlightForeground": wordHighlights,
  "editorOverviewRuler.wordHighlightStrongForeground": writeableWordHighlights,
  "editorOverviewRuler.warningForeground": warnings,
  "editorOverviewRuler.errorForeground": errors,
  "editorOverviewRuler.infoForeground": info,
  "editorOverviewRuler.rangeHighlightForeground": foundItems,
  "editorOverviewRuler.commonContentForeground": commonContent,
  "editorOverviewRuler.currentContentForeground": currentContent,
  "editorOverviewRuler.incomingContentForeground": incomingContent
})

let editorMarker = ({bg, info, error, warning}) => ({
  "editorMarkerNavigation.background": bg,
  "editorMarkerNavigationInfo.background": info,
  "editorMarkerNavigationError.background": error,
  "editorMarkerNavigationWarning.background": warning,
})

let editorIndent = ({activeBg, bg}) => ({
  "editorIndentGuide.activeBackground": activeBg,
  "editorIndentGuide.background": bg,
})

let scrollbar = ({shadow, activeBg, hoverBg, bg}) => ({
  "scrollbar.shadow": shadow,
  "scrollbarSlider.activeBackground": activeBg,
  "scrollbarSlider.hoverBackground": hoverBg,
  "scrollbarSlider.background": bg,
})

let gutter = ({bg, addedLine, modifiedLine, deletedLine, comment}) => ({
  "editorGutter.background": bg,
  "editorGutter.addedBackground": addedLine,
  "editorGutter.modifiedBackground": modifiedLine,
  "editorGutter.deletedBackground": deletedLine,
  "editorGutter.commentRangeForeground": comment,
})

let sidebar = ({bg, border, fg, dropBg}) => ({
  "sideBar.background": bg,
  "sideBar.border": border,
  "sideBar.foreground": fg,
  "sideBarSectionHeader.background": bg,
  "sideBarSectionHeader.foreground": fg,
  "sideBarSectionHeader.border": bg,
  "sideBarTitle.foreground": fg,
  "sideBar.dropBackground": dropBg,
})

let listFilterWidget = ({bg, noMatches}) => ({
  "listFilterWidget.background": bg,
  "listFilterWidget.noMatchesOutline": noMatches,
  "listFilterWidget.outline": bg,
})

let statusBar = ({bg, border, fg, debugBg, active, hover, hostBg}) => ({
  "statusBar.background": bg,
  "statusBar.border": border,
  "statusBar.foreground": fg,
  "statusBar.debuggingBackground": debugBg,
  "statusBar.debuggingBorder": border,
  "statusBar.debuggingForeground": fg,
  "statusBar.noFolderBackground": bg,
  "statusBar.noFolderBorder": border,
  "statusBar.noFolderForeground": fg,
  "statusBarItem.activeBackground": active,
  "statusBarItem.hoverBackground": hover,
  "statusBarItem.prominentBackground": bg,
  "statusBarItem.prominentHoverBackground": hover,
  "statusBarItem.hostBackground": hostBg,
})

let activityBar = ({fg, bg, border, dropBg, badge, inactiveFg}) => ({
  "activityBar.foreground": fg,
  "activityBar.background": bg,
  "activityBar.border": border,
  "activityBar.dropBackground": dropBg,
  "activityBarBadge.background": badge,
  "activityBarBadge.foreground": bg,
  "activityBar.inactiveForeground": inactiveFg,
})

let panel = ({bg, border, activeFg, inactiveFg, activeBorder}) => ({
  "panel.background": bg,
  "panel.border": border,
  "panel.dropBackground": dropBg,
  "panelTitle.activeForeground": activeFg,
  "panelTitle.activeBorder": activeBorder,
  "panelTitle.inactiveForeground": inactiveFg,
})

let tab = ({
  bg,
  fg,
  activeBg,
  border,
  activeFg,
  border,
  hoverBg,
  hoverBorder,
  modifiedBorder,
  dropBg
}) => ({
  "tab.activeBackground": activeBg,
  "tab.activeBorder": border,
  "tab.activeBorderTop": border,
  "tab.activeForeground": activeFg,
  "tab.border": border,
  "tab.hoverBackground": hoverBg,
  "tab.hoverBorder": hoverBorder,
  "tab.inactiveBackground": bg,
  "tab.inactiveForeground": fg,
  "tab.unfocusedActiveBorder": border,
  "tab.unfocusedActiveBorderTop": border,
  "tab.unfocusedActiveForeground": fg,
  "tab.unfocusedHoverBackground": hoverBg,
  "tab.unfocusedHoverBorder": hoverBorder,
  "tab.unfocusedInactiveForeground": fg,
  "tab.activeModifiedBorder": modifiedBorder,
  "tab.inactiveModifiedBorder": modifiedBorder,
  "tab.unfocusedActiveModifiedBorder": modifiedBorder,
  "tab.unfocusedInactiveModifiedBorder": modifiedBorder,
  "editorGroup.border": bg,
  "editorGroup.dropBackground": dropBg,
  "editorGroup.emptyBackground": bg,
  "editorGroupHeader.tabsBackground": bg,
  "editorGroup.focusedEmptyBorder": border,
  "editorGroupHeader.noTabsBackground": bg,
  "editorGroupHeader.tabsBorder": border
})

let editorWidget = ({bg, border}) => ({
  "editorWidget.background": bg,
  "editorWidget.border": border,
  "editorWidget.resizeBorder": border,
})

let hoverWidget = ({bg, border}) => ({
  "editorHoverWidget.background": bg,
  "editorHoverWidget.border": border,
})

let listWidget = ({
  bg,
  border,
  fg,
  selection,
  highlightFg,
  dropBg,
  warning,
  error
}) => ({
  "editorSuggestWidget.background": bg,
  "editorSuggestWidget.border": border,
  "editorSuggestWidget.foreground": fg,
  "editorSuggestWidget.selectedBackground": selection,
  "editorSuggestWidget.highlightForeground": highlightFg,
  "list.focusBackground": selection,
  "list.focusForeground": fg,
  "list.activeSelectionBackground": selection,
  "list.activeSelectionForeground": fg,
  "list.hoverBackground": selection,
  "list.hoverForeground": fg,
  "list.highlightForeground": highlightFg,
  "list.inactiveFocusBackground": bg,
  "list.inactiveSelectionBackground": bg,
  "list.inactiveSelectionForeground": fg,
  "list.warningForeground": warning,
  "list.errorForeground": error,
  "list.invalidItemForeground": error,
  "list.dropBackground": dropBg,
})

let peekView = ({border, bg, foundItems, fg, selection, transparent}) => ({
  "peekView.border": border,
  "peekViewEditor.background": bg,
  "peekViewEditorGutter.background": bg,
  "peekViewEditor.matchHighlightBackground": foundItems,
  "peekViewEditor.matchHighlightBorder": transparent,
  "peekViewTitle.background": bg,
  "peekViewTitleLabel.foreground": fg,
  "peekViewTitleDescription.foreground": fg,
  "peekViewResult.background": bg,
  "peekViewResult.fileForeground": fg,
  "peekViewResult.lineForeground": fg,
  "peekViewResult.matchHighlightBackground": foundItems,
  "peekViewResult.selectionBackground": selection,
  "peekViewResult.selectionForeground": fg,
})

let formItems = ({
  bg,
  border,
  fg,
  placeholder,
  activeBorder,
  errorBg,
  errorFg,
  errorBorder,
  infoBg,
  infoFg,
  infoBorder,
  warningBg,
  warningFg,
  warningBorder
}) => ({
  "dropdown.background": bg,
  "dropdown.border": border,
  "dropdown.foreground": fg,
  "dropdown.listBackground": bg,
  "input.background": bg,
  "input.border": border,
  "input.foreground": fg,
  "input.placeholderForeground": placeholder,
  "inputOption.activeBorder": activeBorder,
  "inputValidation.errorBackground": errorBg,
  "inputValidation.errorForeground": errorFg,
  "inputValidation.errorBorder": errorBorder,
  "inputValidation.infoBackground": infoBg,
  "inputValidation.infoForeground": infoFg,
  "inputValidation.infoBorder": infoBorder,
  "inputValidation.warningBackground": warningBg,
  "inputValidation.warningForeground": warningFg,
  "inputValidation.warningBorder": warningBorder,
})

let matchedBracket = ({bg, border}) => ({
  "editorBracketMatch.background": bg,
  "editorBracketMatch.border": border,
})

let terminal = ({
  bg,
  fg,
  border,
  selection,
  cursor,
  black,
  blue,
  cyan,
  green,
  red,
  magenta,
  white,
  yellow
}) => ({
  "terminal.background": bg,
  "terminal.foreground": fg,
  "terminal.border": border,
  "terminal.selectionBackground": selection,
  "terminalCursor.foreground": cursor,
  "terminalCursor.background": bg,
  "terminal.ansiBlack": black,
  "terminal.ansiBrightBlack": white,
  "terminal.ansiBlue": black,
  "terminal.ansiBrightBlue": blue,
  "terminal.ansiCyan": cyan,
  "terminal.ansiBrightCyan": cyan,
  "terminal.ansiGreen": green,
  "terminal.ansiBrightGreen": green,
  "terminal.ansiMagenta": magenta,
  "terminal.ansiBrightMagenta": magenta,
  "terminal.ansiRed": red,
  "terminal.ansiBrightRed": red,
  "terminal.ansiWhite": black,
  "terminal.ansiBrightWhite": white,
  "terminal.ansiYellow": yellow,
  "terminal.ansiBrightYellow": yellow,
})

let badge = ({fg, bg}) => ({
  "badge.background": bg,
  "badge.foreground": fg,
})

let button = ({bg, fg, hover}) => ({
  "button.background": bg,
  "button.foreground": fg,
  "button.hoverBackground": hover,
  "extensionButton.prominentBackground": bg,
  "extensionButton.prominentForeground": fg,
  "extensionButton.prominentHoverBackground": hover,
  "welcomePage.buttonBackground": bg,
  "welcomePage.buttonHoverBackground": hover,
})

let debugWidget = ({bg, border}) => ({
  "debugExceptionWidget.background": bg,
  "debugExceptionWidget.border": border,
  "debugToolBar.background": bg,
  "debugToolBar.border": border,
})

let breadcrumb = ({active, focus, bg, fg, listBg}) => ({
  "breadcrumb.activeSelectionForeground": active,
  "breadcrumb.focusForeground": focus,
  "breadcrumb.background": bg,
  "breadcrumb.foreground": fg,
  "breadcrumbPicker.background": listBg,
})

let editor = ({bg, fg, selection, border, inactiveFg, modifiedItem}) => ({
  "menu.background": bg,
  "menu.foreground": fg,
  "menu.selectionBackground": selection,
  "menu.selectionBorder": border,
  "menu.selectionForeground": fg,
  "menubar.selectionBackground": selection,
  "menubar.selectionBorder": border,
  "menubar.selectionForeground": fg,
  "menu.separatorBackground": border,
  // [text]
  "textBlockQuote.background": border,
  "textBlockQuote.border": border,
  "textCodeBlock.background": bg,
  "textPreformat.foreground": fg,
  "textSeparator.foreground": inactiveFg,
  // [titlebar]
  "titleBar.activeBackground": bg,
  "titleBar.border": border,
  "titleBar.activeForeground": fg,
  "titleBar.inactiveBackground": bg,
  "titleBar.inactiveForeground": inactiveFg,
  // [settings]
  "settings.checkboxBackground": bg,
  "settings.checkboxBorder": border,
  "settings.checkboxForeground": fg,
  "settings.dropdownBackground": bg,
  "settings.dropdownBorder": border,
  "settings.dropdownForeground": fg,
  "settings.dropdownListBorder": border,
  "settings.headerForeground": fg,
  "settings.modifiedItemIndicator": modifiedItem,
  "settings.numberInputBackground": bg,
  "settings.numberInputBorder": border,
  "settings.numberInputForeground": fg,
  "settings.textInputBackground": bg,
  "settings.textInputBorder": border,
  "settings.textInputForeground": fg
})

let notification = ({fg, bg, border, link}) => ({
  "notificationCenter.border": border,
  "notificationCenterHeader.background": bg,
  "notificationCenterHeader.foreground": fg,
  "notifications.background": bg,
  "notifications.border": border,
  "notifications.foreground": fg,
  "notificationLink.foreground": link,
  "notificationToast.border": border,
})

let diffWidget = ({border, insertedText, removedText}) => ({
  "diffEditor.border": border,
  "diffEditor.insertedTextBackground": insertedText,
  "diffEditor.insertedTextBorder": border,
  "diffEditor.removedTextBackground": removedText,
  "diffEditor.removedTextBorder": border,
})

let gitWidget = ({
  fg,
  added,
  conflicted,
  deleted,
  ignored,
  modified,
  untracked,
  border,
  common,
  commonHeader,
  current,
  currentHeader,
  incoming,
  incomingHeader
}) => ({
  "gitDecoration.addedResourceForeground": added,
  "gitDecoration.conflictingResourceForeground": conflicted,
  "gitDecoration.deletedResourceForeground": deleted,
  "gitDecoration.ignoredResourceForeground": ignored,
  "gitDecoration.modifiedResourceForeground": modified,
  "gitDecoration.submoduleResourceForeground": fg,
  "gitDecoration.untrackedResourceForeground": untracked,
  "merge.border": border,
  "merge.commonContentBackground": common,
  "merge.commonHeaderBackground": commonHeader,
  "merge.currentContentBackground": current,
  "merge.currentHeaderBackground": currentHeader,
  "merge.incomingContentBackground": incoming,
  "merge.incomingHeaderBackground": incomingHeader,
})

let uncategorized = ({
  fg,
  bg,
  border,
  focusBorder,
  link,
  progressBar,
  selection
}) => ({
  "foreground": fg,
  "descriptionForeground": fg,
  "widget.shadow": border,
  "walkThrough.embeddedEditorBackground": bg,
  "focusBorder": focusBorder,
  "editorLink.activeForeground": link,
  "textLink.activeForeground": link,
  "textLink.foreground": link,
  "progressBar.background": progressBar,
  "selection.background": selection,
  "pickerGroup.border": border,
  "pickerGroup.foreground": fg,
  "editorUnnecessaryCode.opacity": fg,
  "editorUnnecessaryCode.border": border,
  "editorCodeLens.foreground": border,
  "editorHint.foreground": border,
  "editorHint.border": bg,
  "welcomePage.background": bg
})