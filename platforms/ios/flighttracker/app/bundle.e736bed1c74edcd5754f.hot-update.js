webpackHotUpdate("bundle",{

/***/ "./app/detail/detail.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Kayak\" backgroundColor=\"#221F20\" color=\"white\" class=\"action-bar\">\r\n    <NavigationButton visibility=\"collapsed\"></NavigationButton>\r\n    <GridLayout columns=\"auto,*,auto\" ios:padding=\"0 10\" height=\"100%\" width=\"100%\">\r\n        <ActionButton #actionButton></ActionButton>\r\n        <Image #search width=\"150\" src=\"~/assets/download.png\"></Image>\r\n    </GridLayout>\r\n</ActionBar>\r\n<StackLayout class=\"page p-10\">\r\n    <Button row=\"0\" class=\"m-b-20\" color=\"#f49000\" text=\"Back to List\" [nsRouterLink]=\"['/home']\" pageTransition=\"slide\"\r\n        clearHistory=\"true\"></Button>\r\n    <GridLayout columns=\"1/2*, 1/2*\">\r\n        <StackLayout col=\"0\">\r\n            <Label class=\"m-b-10\" [text]=\"selected.name\"></Label>\r\n            <Label [text]=\"selected.phone\"></Label>\r\n            <Label color=\"#f49000\" [text]=\"selected.site\" (itemTap)=\"launch(selected.site)\"></Label>\r\n        </StackLayout>\r\n        <StackLayout col=\"1\">\r\n            <Image height=\"80\" [src]=\"selected.logoURL\"></Image>\r\n        </StackLayout>\r\n        <Label text=\"Check Flight Status\"></Label>\r\n        <TextField hint=\"Enter text\" class=\"input input-border\"></TextField>\r\n    </GridLayout>\r\n</StackLayout>"

/***/ })

})