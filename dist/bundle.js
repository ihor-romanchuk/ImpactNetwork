/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/communitiesImpacted/socialReturn/socialReturn.js":
/*!*********************************************************************!*\
  !*** ./components/communitiesImpacted/socialReturn/socialReturn.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _socialReturn_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./socialReturn.scss */ \"./components/communitiesImpacted/socialReturn/socialReturn.scss\");\n/* harmony import */ var _socialReturn_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_socialReturn_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _stakeholders_stakeholders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stakeholders/stakeholders */ \"./components/communitiesImpacted/stakeholders/stakeholders.js\");\n\r\n\r\n\r\nclass SocialReturnController {\r\n    constructor() {\r\n        let StakeholdersController = _stakeholders_stakeholders__WEBPACK_IMPORTED_MODULE_1__[\"default\"].controller;\r\n        this.stakeholdersController = new StakeholdersController();\r\n    }\r\n\r\n    init() {\r\n        if (!this.yearsData) return;\r\n\r\n        this.changeYear(this.yearsData[0])\r\n    }\r\n\r\n    changeYear(year) {\r\n        if (!year) return;\r\n\r\n        this.selectedYear = year;\r\n        this.changeDataset(this.selectedYear.dataset[0]);\r\n    }\r\n\r\n    changeDataset(dataset) {\r\n        if (!dataset || this.selectedDataset === dataset) return;\r\n\r\n        this.selectedDataset = dataset;\r\n        this.stakeholdersController.stakeholders = this.selectedDataset.stakeholders;\r\n\r\n        this.stakeholdersColors = this.selectedDataset.stakeholders.data.map((stakeholder) => this.getRandomColor());\r\n        this.investmentsColors = this.selectedDataset.investments.map((investment) => this.getRandomColor());\r\n    }\r\n\r\n    updateSocialReturnsChart() {\r\n        let socialReturnContainer = this.selectedDataset.stakeholders.data.map((stakeholder, index) => {\r\n            return {\r\n                label: stakeholder.name,\r\n                value: this.stakeholdersController.calculateTotalDollarValue(stakeholder),\r\n                color: this.stakeholdersColors[index]\r\n            }\r\n        });\r\n\r\n        InitSocialReturnFusionChart(this.totalIncome, socialReturnContainer);\r\n    }\r\n\r\n    updateInvestmentChart() {\r\n        let investments = this.selectedDataset.investments.map((investment, index) => {\r\n            return {\r\n                Label: investment.name,\r\n                Value: investment.value,\r\n                color: this.investmentsColors[index]\r\n            }\r\n        });\r\n\r\n        initInvestmentFusionChart(this.totalInvestment, investments);\r\n    }\r\n\r\n    calculateSroiMultiplier(dataset) {\r\n        dataset = dataset || this.selectedDataset;\r\n        if (!dataset) return;\r\n\r\n        this.totalIncome = this.calculateTotalIncome(dataset);\r\n        this.totalInvestment = this.calculateTotalInvestment(dataset);\r\n\r\n        this.updateSocialReturnsChart();\r\n        this.updateInvestmentChart();\r\n\r\n        return Math.round(this.totalIncome * 100 / this.totalInvestment);\r\n    }\r\n\r\n    calculateTotalIncome(dataset) {\r\n        dataset = dataset || this.selectedDataset;\r\n        return dataset.stakeholders.data.reduce((accumulator, stakeholder) => {\r\n            return accumulator + this.stakeholdersController.calculateTotalDollarValue(stakeholder);\r\n        }, 0);\r\n    }\r\n\r\n    calculateTotalInvestment(dataset) {\r\n        dataset = dataset || this.selectedDataset;\r\n        return dataset.investments.reduce((accumulator, investment) => {\r\n            return accumulator + parseInt(investment.value);\r\n        }, 0);\r\n    }\r\n\r\n    calculateStakeholderValuePercent(stakeholder) {\r\n        return Math.round((this.stakeholdersController.calculateTotalDollarValue(stakeholder) * 100 / this.totalIncome))\r\n    }\r\n\r\n    calculateInvestmentValuePercent(investment) {\r\n        return Math.round((investment.value * 100 / this.totalInvestment))\r\n    }\r\n\r\n    getRandomColor() {\r\n        let letters = \"0123456789ABCDEF\";\r\n        let color = \"#\";\r\n        for (let i = 0; i < 6; i++) {\r\n            color += letters[Math.floor(Math.random() * 16)];\r\n        }\r\n\r\n        return color;\r\n    }\r\n\r\n    showInvestmentModal() {\r\n        this.newInvestment = {\r\n            name: '',\r\n            value: 0\r\n        };\r\n        this.investmentModal = $(\"#investmentModal\");\r\n        this.investmentModal.modal(\"show\");\r\n    }\r\n\r\n    addInvestment(newInvestment) {\r\n        this.selectedDataset.investments.push(newInvestment);\r\n        this.investmentModal.modal(\"toggle\");\r\n        this.newInvestment = {};\r\n    }\r\n\r\n    $onChanges(changesObj) {\r\n        this.init();\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    templateUrl: \"components/communitiesImpacted/socialReturn/socialReturn.html\",\r\n    controller: SocialReturnController,\r\n    bindings: {\r\n        yearsData: \"<\",\r\n        staticResources: \"<\"\r\n    }\r\n});\n\n//# sourceURL=webpack:///./components/communitiesImpacted/socialReturn/socialReturn.js?");

/***/ }),

/***/ "./components/communitiesImpacted/socialReturn/socialReturn.scss":
/*!***********************************************************************!*\
  !*** ./components/communitiesImpacted/socialReturn/socialReturn.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./components/communitiesImpacted/socialReturn/socialReturn.scss?");

/***/ }),

/***/ "./components/communitiesImpacted/stakeholders/stakeholders.js":
/*!*********************************************************************!*\
  !*** ./components/communitiesImpacted/stakeholders/stakeholders.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stakeholders_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stakeholders.scss */ \"./components/communitiesImpacted/stakeholders/stakeholders.scss\");\n/* harmony import */ var _stakeholders_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stakeholders_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nclass StakeholdersController {\r\n    init() {\r\n        if(!this.stakeholders) return;\r\n        \r\n        this.setCurrentStakeholder(0);\r\n    }\r\n\r\n    slideStakeholder(isNext) {\r\n        let newIndex =\r\n            (this.stakeholders.data.length +\r\n                this.currentStakeholderIndex +\r\n                (isNext ? 1 : -1)) %\r\n            this.stakeholders.data.length;\r\n        this.setCurrentStakeholder(newIndex);\r\n    }\r\n\r\n    setCurrentStakeholder(index) {\r\n        this.currentStakeholderIndex = index;\r\n        this.currentStakeholder = this.stakeholders.data[index];\r\n        this.totalDollarValue = this.calculateTotalDollarValue(\r\n            this.currentStakeholder\r\n        );\r\n    }\r\n\r\n    calculateDollarValue(quantifiable, stakeholder) {\r\n        stakeholder = stakeholder || this.currentStakeholder;\r\n        if(!stakeholder || !this.stakeholders) return;\r\n\r\n        return (\r\n            quantifiable.dollarValue *\r\n            this.stakeholders.multiplier *\r\n            stakeholder.number\r\n        );\r\n    }\r\n\r\n    calculateTotalDollarValue(stakeholder) {\r\n        stakeholder = stakeholder || this.currentStakeholder;\r\n        if(!stakeholder) return;\r\n\r\n        return stakeholder.dollarQuantifiables.reduce(\r\n            (accumulator, currentValue) =>\r\n                accumulator +\r\n                (currentValue.isPositive\r\n                    ? this.calculateDollarValue(currentValue, stakeholder)\r\n                    : -this.calculateDollarValue(currentValue, stakeholder)),\r\n            0\r\n        );\r\n    }\r\n\r\n    $onChanges(changesObj) {\r\n        this.init();\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    templateUrl: \"components/communitiesImpacted/stakeholders/stakeholders.html\",\r\n    controller: StakeholdersController,\r\n    bindings: {\r\n        stakeholders: \"<\",\r\n        staticResources: \"<\"\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack:///./components/communitiesImpacted/stakeholders/stakeholders.js?");

/***/ }),

/***/ "./components/communitiesImpacted/stakeholders/stakeholders.scss":
/*!***********************************************************************!*\
  !*** ./components/communitiesImpacted/stakeholders/stakeholders.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./components/communitiesImpacted/stakeholders/stakeholders.scss?");

/***/ }),

/***/ "./components/overview/socialImpact/socialImpact.js":
/*!**********************************************************!*\
  !*** ./components/overview/socialImpact/socialImpact.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _socialImpact_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./socialImpact.scss */ \"./components/overview/socialImpact/socialImpact.scss\");\n/* harmony import */ var _socialImpact_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_socialImpact_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _communitiesImpacted_stakeholders_stakeholders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../communitiesImpacted/stakeholders/stakeholders */ \"./components/communitiesImpacted/stakeholders/stakeholders.js\");\n\r\n\r\n\r\nclass SocialImpactController {\r\n  constructor() {\r\n    let StakeholdersController = _communitiesImpacted_stakeholders_stakeholders__WEBPACK_IMPORTED_MODULE_1__[\"default\"].controller;\r\n    this.stakeholdersController = new StakeholdersController();\r\n  }\r\n\r\n  init() {\r\n    if (!this.yearsData) return;\r\n\r\n    this.selectedYear = this.yearsData[0];\r\n    this.changeDataset(this.selectedYear.dataset[0]);\r\n  }\r\n\r\n  changeYear(year) {\r\n    if (!year) return;\r\n\r\n    this.selectedYear = year;\r\n    this.changeDataset(this.selectedYear.dataset[0]);\r\n  }\r\n\r\n  changeDataset(dataset) {\r\n    if (!dataset) return;\r\n\r\n    this.selectedDataset = dataset;\r\n    this.stakeholdersController.stakeholders = this.selectedDataset.stakeholders;\r\n\r\n    this.sroiMultiplier = this.calculateSroiMultiplier(this.selectedDataset);\r\n\r\n    this.positiveQuantifiablesNumber = this.selectedDataset.stakeholders.data.reduce(\r\n      (accumulator, stakeholder) => {\r\n        return (\r\n          accumulator +\r\n          stakeholder.quantifiables.filter(p => p.isPositive).length\r\n        );\r\n      },\r\n      0\r\n    );\r\n\r\n    this.negativeQuantifiablesNumber = this.selectedDataset.stakeholders.data.reduce(\r\n      (accumulator, stakeholder) => {\r\n        return (\r\n          accumulator +\r\n          stakeholder.quantifiables.filter(p => !p.isPositive).length\r\n        );\r\n      },\r\n      0\r\n    );\r\n\r\n    this.positiveNonQuantifiablesNumber = this.selectedDataset.stakeholders.data.reduce(\r\n      (accumulator, stakeholder) => {\r\n        return (\r\n          accumulator +\r\n          stakeholder.nonQuantifiables.filter(p => p.isPositive).length\r\n        );\r\n      },\r\n      0\r\n    );\r\n\r\n    this.negativeNonQuantifiablesNumber = this.selectedDataset.stakeholders.data.reduce(\r\n      (accumulator, stakeholder) => {\r\n        return (\r\n          accumulator +\r\n          stakeholder.nonQuantifiables.filter(p => !p.isPositive).length\r\n        );\r\n      },\r\n      0\r\n    );\r\n  }\r\n\r\n  calculateSroiMultiplier(dataset) {\r\n    this.totalIncome = dataset.stakeholders.data.reduce((accumulator, stakeholder) => {\r\n      return accumulator + this.stakeholdersController.calculateTotalDollarValue(stakeholder);\r\n    }, 0);\r\n\r\n    this.totalInvestment = dataset.investments.reduce((accumulator, investment) => {\r\n      return accumulator + parseInt(investment.value);\r\n    }, 0);\r\n\r\n    return Math.round((this.totalIncome / this.totalInvestment) * 10) / 10;\r\n  }\r\n\r\n  onViewImpactClick() {\r\n    document.querySelector('a[href=\"#communitiesImctd\"]').click();\r\n  }\r\n\r\n  $onChanges(changesObj) {\r\n    this.init();\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  templateUrl: \"components/overview/socialImpact/socialImpact.html\",\r\n  controller: SocialImpactController,\r\n  bindings: {\r\n    yearsData: \"<\",\r\n    staticResources: \"<\"\r\n  }\r\n});\n\n//# sourceURL=webpack:///./components/overview/socialImpact/socialImpact.js?");

/***/ }),

/***/ "./components/overview/socialImpact/socialImpact.scss":
/*!************************************************************!*\
  !*** ./components/overview/socialImpact/socialImpact.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./components/overview/socialImpact/socialImpact.scss?");

/***/ }),

/***/ "./css/styles.scss":
/*!*************************!*\
  !*** ./css/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./css/styles.scss?");

/***/ }),

/***/ "./js/App.js":
/*!*******************!*\
  !*** ./js/App.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/styles.scss */ \"./css/styles.scss\");\n/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_overview_socialImpact_socialImpact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/overview/socialImpact/socialImpact */ \"./components/overview/socialImpact/socialImpact.js\");\n/* harmony import */ var _components_communitiesImpacted_stakeholders_stakeholders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/communitiesImpacted/stakeholders/stakeholders */ \"./components/communitiesImpacted/stakeholders/stakeholders.js\");\n/* harmony import */ var _components_communitiesImpacted_socialReturn_socialReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/communitiesImpacted/socialReturn/socialReturn */ \"./components/communitiesImpacted/socialReturn/socialReturn.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nlet app = angular\r\n  .module(\"MainApp\", [\"ng-fusioncharts\"])\r\n  .component(\"socialImpact\", _components_overview_socialImpact_socialImpact__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\r\n  .component(\"stakeholders\", _components_communitiesImpacted_stakeholders_stakeholders__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\r\n  .component(\"socialReturn\", _components_communitiesImpacted_socialReturn_socialReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\n\r\napp.filter(\"range\", function () {\r\n  return function (input, total) {\r\n    total = parseInt(total);\r\n\r\n    for (var i = 0; i < total; i++) {\r\n      input.push(i);\r\n    }\r\n\r\n    return input;\r\n  };\r\n});\r\n\r\napp.controller(\"MainCtrl\", [\r\n  \"$scope\",\r\n  \"$http\",\r\n  function ($scope, $http) {\r\n    $scope.mapclickfun = mapclickfun;\r\n    $scope.output = [];\r\n    $scope.social_chart_arr = [];\r\n    $scope.selcountry = {};\r\n    $scope.search_org = search_org;\r\n    $scope.search_milestone = search_milestone;\r\n    $scope.changeCountry = changeCountry;\r\n    $scope.dopopover = dopopover;\r\n    $scope.outcome = [];\r\n    $scope.obj1 = {};\r\n    $scope.obj2 = {};\r\n    $scope.outcomehighlight = outcomehighlight;\r\n    $scope.Funding_rasing_GraphPlotting1 = [];\r\n    $scope.impact_fg = {};\r\n    $scope.MeasurableOutcomes1 = [];\r\n    $scope.investmentChart = [];\r\n    $scope.socialReturnContainer = [];\r\n    $scope.countrylist = [];\r\n    $scope.countrylist_new = [];\r\n    $scope.CountryName = [];\r\n    $scope.countryItemsList = [];\r\n    $scope.ttlinvestment = 0;\r\n    $scope.multiplycm = 1;\r\n    $scope.ttlsocialinvestment = 0;\r\n\r\n    $http\r\n      .get(\"inpact-network-ui-json.json\")\r\n      .then(function (response) {\r\n        $scope.projectData = response.data;\r\n\r\n        $scope.ProjSec = response.data.ProjectSection;\r\n\r\n        $scope.overview = response.data.Overview;\r\n\r\n        $scope.gallery = response.data.Overview.Gallery;\r\n\r\n        $scope.time_line = response.data.Overview.TimelineInfo;\r\n        $scope.TimelineInsight = response.data.Overview.TimelineInsight;\r\n\r\n        $scope.fundInfo = response.data.Overview.Funding_Information;\r\n\r\n        $scope.partners = response.data.Overview.Partnership_Organizations;\r\n        $scope.partnerInsgt =\r\n          response.data.Overview.Partnership_Organizations_Insight;\r\n\r\n        $scope.outcomeInfo =\r\n          response.data.Overview.Outputs_Outcomes_Info.Listing;\r\n        $scope.goalTitle =\r\n          response.data.Overview.Outputs_Outcomes_Info.GoalTitle;\r\n        $scope.outcomeInfoSupportedProjects = $scope.outcomeInfo.filter(\r\n          function (element) {\r\n            return element.isSupported;\r\n          }\r\n        );\r\n        $scope.leftpr =\r\n          $scope.outcomeInfo.length -\r\n          $scope.outcomeInfoSupportedProjects.length;\r\n\r\n        $scope.comments = response.data.Overview.Insight;\r\n\r\n        ///Second Page\r\n\r\n        $scope.secpage = response.data.Theory_of_Change;\r\n\r\n        $scope.th_summary = $scope.secpage.Summary_Section.Summary;\r\n\r\n        $scope.th_insight = $scope.secpage.Summary_Section.Insight;\r\n\r\n        $scope.blockIns = $scope.secpage.Summary_Section_Block.Insight;\r\n\r\n        $scope.inputs = $scope.secpage.Summary_Section_Block.Input.Points;\r\n\r\n        $scope.activites =\r\n          $scope.secpage.Summary_Section_Block.Activities.Points;\r\n\r\n        $scope.Intoutputs =\r\n          $scope.secpage.Summary_Section_Block.IntendentOutput.Points;\r\n\r\n        $scope.Intoutcomes =\r\n          $scope.secpage.Summary_Section_Block.IntendentOutcomes.Points;\r\n        $scope.follow = \"Follow\";\r\n        $scope.is_following = false;\r\n\r\n        $scope.keyAss = $scope.secpage.Key_Assumptions;\r\n        $scope.solutions = $scope.secpage.Solutions;\r\n\r\n        $scope.problms = $scope.secpage.Problem_Statements;\r\n        selectProject(0);\r\n\r\n        ///New Code For project detail circle section\r\n\r\n        $scope.outputs =\r\n          response.data.Overview.Outputs_Outcomes_Info.Project_Output_Section;\r\n        $scope.outputs_tag_ = {};\r\n        $scope.outcomes_tag_ = {};\r\n        $.each($scope.outputs, function (kry, dt) {\r\n          $scope.outputs_tag_[kry] = {};\r\n          $.each(dt.Tags, function (ky, t) {\r\n            $scope.outputs_tag_[kry][ky] = false;\r\n          });\r\n        });\r\n        $scope.outcomes =\r\n          response.data.Overview.Outputs_Outcomes_Info.Project_Outcomes_Section;\r\n        $.each($scope.outcomes, function (kry, dt) {\r\n          $scope.outcomes_tag_[kry] = {};\r\n          $.each(dt.Tags, function (ky, t) {\r\n            $scope.outcomes_tag_[kry][ky] = false;\r\n          });\r\n        });\r\n        $scope.intotal = 0;\r\n        selectProj($scope.outcomeInfoSupportedProjects[0]);\r\n        //End\r\n\r\n        //Mile Stone page\r\n\r\n        $scope.milestone = $scope.projectData.Milestones.Listing;\r\n        $scope.milestone_insite = $scope.projectData.Milestones.Insight;\r\n        $scope.milestone1 = $scope.projectData.Milestones.Listing;\r\n\r\n        $scope.teams = $scope.projectData.People_Partnership.TeamMember;\r\n        $scope.teams_insight =\r\n          $scope.projectData.People_Partnership.TeamMember_Insight;\r\n\r\n        $scope.list_org = $scope.projectData.People_Partnership.Listing;\r\n        $scope.part_insight =\r\n          $scope.projectData.People_Partnership.People_Partnership_Insight;\r\n\r\n        $scope.orgSlider = orgSlidersplit($scope.list_org, 3);\r\n\r\n        showDesc($scope.list_org[0], 0);\r\n\r\n        $.each($scope.outputs, function (key, dt) {\r\n          $scope.obj2[dt.Project_Output_Primary_Key] = false;\r\n        });\r\n\r\n        //Funding and Risk\r\n        $scope.fundSec = $scope.projectData.Fund_and_Risk.Funding_Round_Section;\r\n        $scope.fund_ins =\r\n          $scope.projectData.Fund_and_Risk.Fund_and_Risk_Insight;\r\n\r\n        $scope.fundSecAmnt =\r\n          $scope.projectData.Fund_and_Risk.Funding_Amount_Section;\r\n\r\n        $scope.fundSourc =\r\n          $scope.projectData.Fund_and_Risk.Source_of_Funding.Listing;\r\n        $scope.notesInv = $scope.projectData.Fund_and_Risk.Notes_for_Investor;\r\n        $scope.notes_ins =\r\n          $scope.projectData.Fund_and_Risk.Notes_for_Investor_Insight;\r\n\r\n        $scope.fundgraph =\r\n          $scope.projectData.Fund_and_Risk.Funding_rasing_over_the_period_of_time;\r\n\r\n        $scope.sustain = $scope.projectData.Fund_and_Risk.Sustainability;\r\n        $scope.social_color = [];\r\n        $scope.financialxls =\r\n          $scope.projectData.Fund_and_Risk.Financial_Management.Listing;\r\n        $scope.financialInsght =\r\n          $scope.projectData.Fund_and_Risk.Financial_Management.Financial_Insight;\r\n        $scope.circle_title =\r\n          $scope.projectData.Fund_and_Risk.Financial_Management_Chart.CenterCircle;\r\n        $scope.circle_tIcon =\r\n          $scope.projectData.Fund_and_Risk.Financial_Management_Chart.CenterCircleIcon;\r\n        $scope.circle_tDesc =\r\n          $scope.projectData.Fund_and_Risk.Financial_Management_Chart.CenterCirclePopoverText;\r\n        $scope.FinancialChartInsight =\r\n          $scope.projectData.Fund_and_Risk.Financial_Management_Chart.FinancialChartInsight;\r\n\r\n        $scope.circle_Listing =\r\n          $scope.projectData.Fund_and_Risk.Financial_Management_Chart.Listing;\r\n        dopopover(\r\n          $scope.circle_Listing[0].CirclePopoverText,\r\n          $scope.circle_Listing[0].CircleIcon,\r\n          $scope.circle_Listing[0].CircleText\r\n        );\r\n\r\n        ///Chart code\r\n        $scope.countryChart =\r\n          response.data.CommunitiesImpactedPage.Communities[0].ListofItems;\r\n        $scope.community = response.data.CommunitiesImpactedPage.Communities[0];\r\n        $scope.selectedYear = $scope.community.years[0];\r\n        $scope.selectedDataset = $scope.selectedYear.dataset[0];\r\n        $scope.CountryName =\r\n          response.data.CommunitiesImpactedPage.Communities[0].CountryName;\r\n        $scope.CommunityName =\r\n          response.data.CommunitiesImpactedPage.Communities[0].CommunityName;\r\n\r\n        $.each(response.data.CommunitiesImpactedPage.Communities, function (\r\n          ky,\r\n          dty\r\n        ) {\r\n          $scope.selcountry[dty.CountryName] = \"\";\r\n          $scope.selcountry[dty.CountryName] = false;\r\n        });\r\n\r\n        $scope.CommunityInsights =\r\n          response.data.CommunitiesImpactedPage.CommunityInsights;\r\n\r\n        $scope.Impact_Reports =\r\n          response.data.CommunitiesImpactedPage.Impact_Reports.Listing;\r\n\r\n        $scope.Communities = response.data.CommunitiesImpactedPage.Communities;\r\n        $.each($scope.Communities, function (key, dty) {\r\n          $scope.Country_name = $scope.Communities[key].CountryName;\r\n          $scope.Latitude = $scope.Communities[key].Latitude;\r\n          $scope.Longitude = $scope.Communities[key].Longitude;\r\n          $scope.Country_value = $scope.Communities[key].Countryvalue;\r\n          $scope.countrylist.push({\r\n            id: $scope.Country_name,\r\n            value: $scope.Country_value\r\n          });\r\n          $scope.countrylist_new.push({\r\n            latLng: [$scope.Latitude, $scope.Longitude],\r\n            name: $scope.Country_name\r\n          });\r\n        });\r\n        mapclickfun(0);\r\n\r\n        $scope.Funding_rasing_GraphPlotting =\r\n          $scope.projectData.Fund_and_Risk.Funding_rasing_over_the_period_of_time.GraphPlotting;\r\n        $.each($scope.Funding_rasing_GraphPlotting, function (ky, dty) {\r\n          $scope.Funding_rasing_GraphPlotting1.push({\r\n            label: dty.Year,\r\n            value: dty.Amount\r\n          });\r\n        });\r\n      })\r\n      .then(function () {\r\n        communitiesImpacted();\r\n      });\r\n\r\n    $scope.following = following;\r\n    $scope.timeDiffInMinutes = timeDiffInMinutes;\r\n    $scope.dateMonth = dateMonth;\r\n    $scope.selectProject = selectProject;\r\n    $scope.hight_outcome = hight_outcome;\r\n    $scope.showDesc = showDesc;\r\n    $scope.mileStCmnt = mileStCmnt;\r\n    $scope.testGal = testGal;\r\n    $scope.selectProj = selectProj;\r\n    $scope.impact_fg = {};\r\n\r\n    $scope.myDataSource = {\r\n      chart: {\r\n        caption: \"Funding Over Time(in millions)\",\r\n        numberprefix: \"$\",\r\n        rotatelabels: \"0\",\r\n        theme: \"fusion\"\r\n      },\r\n\r\n      data: $scope.Funding_rasing_GraphPlotting1\r\n    };\r\n\r\n    function following() {\r\n      $scope.follow = \"Following\";\r\n\r\n      $scope.ProjSec.TotalFollower = $scope.ProjSec.TotalFollower + \"\";\r\n      if ($scope.ProjSec.TotalFollower.indexOf(\",\") != -1) {\r\n        var t = parseInt($scope.ProjSec.TotalFollower.replace(\",\", \"\"));\r\n      } else {\r\n        var t = $scope.ProjSec.TotalFollower;\r\n      }\r\n      t = parseInt(t);\r\n      if (!$scope.is_following) {\r\n        $scope.is_following = true;\r\n        t = t + 1 + \"\";\r\n\r\n        $scope.ProjSec.TotalFollower = t.replace(\r\n          /(\\d)(?=(\\d\\d\\d)+(?!\\d))/g,\r\n          \"$1,\"\r\n        );\r\n      } else {\r\n        t = t - 1 + \"\";\r\n        $scope.follow = \"Follow\";\r\n        $scope.is_following = false;\r\n        $scope.ProjSec.TotalFollower = t.replace(\r\n          /(\\d)(?=(\\d\\d\\d)+(?!\\d))/g,\r\n          \"$1,\"\r\n        );\r\n      }\r\n    }\r\n\r\n    function timeDiffInMinutes(date) {\r\n      var today = new Date();\r\n      var dd = today.getDate();\r\n      var mm = today.getMonth() + 1;\r\n      var yyyy = today.getFullYear();\r\n      if (dd < 10) {\r\n        dd = \"0\" + dd;\r\n      }\r\n      if (mm < 10) {\r\n        mm = \"0\" + mm;\r\n      }\r\n      today = yyyy + \"/\" + mm + \"/\" + dd;\r\n      $scope.today = today;\r\n      var date2 = new Date(today);\r\n      var date1 = new Date(date);\r\n      var timeDiff = Math.abs(date2.getTime() - date1.getTime());\r\n      return Math.ceil(timeDiff / (1000 * 3600 * 24));\r\n    }\r\n\r\n    function dateMonth(date) {\r\n      var months = [\r\n        \"Jan\",\r\n        \"Feb\",\r\n        \"Mar\",\r\n        \"Apr\",\r\n        \"May\",\r\n        \"Jun\",\r\n        \"Jul\",\r\n        \"Aug\",\r\n        \"Sep\",\r\n        \"Oct\",\r\n        \"Nov\",\r\n        \"Dec\"\r\n      ];\r\n      const d = new Date(date);\r\n\r\n      return d.getDate() + \" \" + months[d.getMonth()];\r\n    }\r\n\r\n    function dopopover(val, icon, actv) {\r\n      $scope.slect_vl = val;\r\n      $scope.selct_icon = icon;\r\n      $scope.activeCircle = actv;\r\n    }\r\n\r\n    $scope.showtag = showtag;\r\n\r\n    function showtag(idx, index) {\r\n      $.each($scope.outputs_tag_[idx], function (kry, dt) {\r\n        $scope.outputs_tag_[idx][kry] = false;\r\n      });\r\n      $scope.outputs_tag_[idx][index] = true;\r\n    }\r\n    $scope.showoutcomestag = showoutcomestag;\r\n    $scope.closeouttag = closeouttag;\r\n\r\n    function closeouttag(idx, index) {\r\n      $scope.outputs_tag_[idx][index] = false;\r\n    }\r\n\r\n    $scope.closeoutcometag = closeoutcometag;\r\n    function closeoutcometag(idx, index) {\r\n      $scope.outcomes_tag_[idx][index] = false;\r\n    }\r\n\r\n    function showoutcomestag(idx, index) {\r\n      $.each($scope.outcomes_tag_[idx], function (kry, dt) {\r\n        $scope.outcomes_tag_[idx][kry] = false;\r\n      });\r\n      $scope.outcomes_tag_[idx][index] = true;\r\n    }\r\n\r\n    function mapclickfun(index) {\r\n      $scope.countryItemsList = $scope.Communities[index].ListofItems;\r\n      $scope.CountryName = $scope.Communities[index].CountryName;\r\n      $scope.CommunityName = $scope.Communities[index].CommunityName;\r\n      $scope.CountryIcons = $scope.Communities[index].CountryIcons;\r\n      $scope.selcountry[$scope.CountryName] = true;\r\n    }\r\n\r\n    function selectProject(index) {\r\n      $scope.output = $scope.outcomeInfo[index].Project_Output_Section;\r\n      var x = [];\r\n\r\n      $scope.obj = {};\r\n\r\n      $.each($scope.output, function (key, dt) {\r\n        $scope.obj[key] = false;\r\n\r\n        x.push(dt.Outcome);\r\n\r\n        $.each(dt.Outcome, function (ky, t) {\r\n          t[\"id\"] = key;\r\n\r\n          $scope.outcome.push(t);\r\n        });\r\n      });\r\n    }\r\n\r\n    function hight_outcome(index) {\r\n      $.each($scope.obj, function (ky, t) {\r\n        $scope.obj[ky] = false;\r\n      });\r\n\r\n      $scope.obj[index] = true;\r\n    }\r\n\r\n    function orgSlidersplit(arr, size) {\r\n      var newArr = [];\r\n\r\n      for (var i = 0; i < arr.length; i += size) {\r\n        newArr.push(arr.slice(i, i + size));\r\n      }\r\n\r\n      return newArr;\r\n    }\r\n\r\n    function showDesc(item, key1) {\r\n      $scope.desc = item.Description;\r\n      $scope.item_roles = item.RoleInvolved;\r\n\r\n      $scope.tags = item.Tags;\r\n      $(\".box1\").css(\"border\", \"1px solid #07c776\");\r\n      $(\".box1\").removeClass(\"boxselect\");\r\n      $(\"#item_\" + key1).addClass(\"boxselect\");\r\n    }\r\n\r\n    function mileStCmnt(cmnt) {\r\n      $(\".maile_stone_moal\").modal(\"show\");\r\n\r\n      $scope.milst_cmnt = cmnt;\r\n    }\r\n    $scope.mileStTask = mileStTask;\r\n\r\n    function mileStTask(task) {\r\n      $(\".milestone_task\").modal(\"show\");\r\n\r\n      $scope.milst_task = task;\r\n    }\r\n    $scope.mileStAttach = mileStAttach;\r\n\r\n    function mileStAttach(attach) {\r\n      $(\".milestone_attach\").modal(\"show\");\r\n\r\n      $scope.milst_attach = attach;\r\n    }\r\n\r\n    function testGal(url) {\r\n      $(\"#image-gallery\").modal(\"show\");\r\n      $(\"#image-gallery-image\").attr(\"src\", url);\r\n    }\r\n\r\n    function search_org(val) {\r\n      var d = orgSlidersplit($scope.list_org, 3);\r\n      $scope.orgSlider = [];\r\n      var f = [];\r\n      if (val != \"\") {\r\n        $.each(d, function (key, dt) {\r\n          $.each(dt, function (k, d1) {\r\n            if (d1.Title.indexOf(val) != -1) {\r\n              f.push(d1);\r\n            }\r\n          });\r\n        });\r\n        $scope.orgSlider.push(f);\r\n      } else {\r\n        $scope.orgSlider = d;\r\n      }\r\n    }\r\n\r\n    function search_milestone(val) {\r\n      var d = $scope.milestone1;\r\n      $scope.milestone = [];\r\n      var f = [];\r\n      if (val != \"\") {\r\n        $.each(d, function (key, dt) {\r\n          if (dt.MainTitle.indexOf(val) != -1) {\r\n            $scope.milestone.push(dt);\r\n          }\r\n        });\r\n      } else {\r\n        $scope.milestone = d;\r\n      }\r\n    }\r\n\r\n    function selectProj(proj) {\r\n      if (proj) {\r\n        $scope.project = proj.Project_Name;\r\n        $scope.Project_Primary_key = proj.Project_Primary_key;\r\n        $scope.Project_Icon = proj.Project_Icon;\r\n        $scope.Project_Insight = proj.Project_Insight;\r\n        $scope.Proj_ID = proj.Proj_ID;\r\n\r\n        $.each($scope.obj1, function (ky, t) {\r\n          $scope.obj1[ky] = false;\r\n        });\r\n\r\n        $scope.obj1[proj.Project_Primary_key] = true;\r\n\r\n        $scope.goalItems = proj.goalItems;\r\n      }\r\n    }\r\n\r\n    function outcomehighlight(proj, pt) {\r\n      $.each($scope.obj1, function (ky, t) {\r\n        $scope.obj1[ky] = false;\r\n      });\r\n      $scope.obj1[pt] = true;\r\n      $.each($scope.obj2, function (ky, t) {\r\n        $scope.obj2[ky] = false;\r\n      });\r\n\r\n      $scope.obj2[proj] = true;\r\n    }\r\n\r\n    function changeCountry(name) {\r\n      var community = $scope.Communities.find(el => el.CountryName === name);\r\n      if (community) {\r\n        $scope.community = community;\r\n        $scope.selectedYear = community.years[0];\r\n        $scope.selectedDataset = $scope.selectedYear.dataset[0];\r\n        $scope.CountryName = community.CountryName;\r\n        $scope.CommunityName = community.CommunityName;\r\n        $scope.CountryIcons = community.CountryIcons;\r\n      }\r\n    }\r\n  }\r\n]);\r\n\n\n//# sourceURL=webpack:///./js/App.js?");

/***/ })

/******/ });