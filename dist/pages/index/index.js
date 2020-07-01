"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getStore(key) {
  var str = _index2.default.getStorageSync(key);
  if (!str) {
    return [];
  }
  return JSON.parse(str);
}
function setStore(key, obj) {
  var str = obj;
  if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) == 'object') {
    str = JSON.stringify(obj);
  }
  _index2.default.setStorageSync(key, str);
}

var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__102", "questionList", "showQuestionModal"], _this.config = {
      navigationBarTitleText: '首页'
    }, _this.state = {
      showQuestionModal: false, //显示问题浮层
      questionList: getStore('questions')
    }, _this.refPieChart = function (node) {
      return _this.pieChart = node;
    }, _this.customComponents = ["PieChart", "AddQuestion"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).call(this, props);

      this.$$refs = [{
        type: "component",
        id: "orDWO",
        refName: "",
        fn: this.refPieChart
      }];
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var chartData = [{ value: 335, name: '直接访问' }, { value: 310, name: '邮件营销' }, { value: 234, name: '联盟广告' }, { value: 135, name: '视频广告' }, { value: 1548, name: '搜索引擎' }];
      this.pieChart.refresh(chartData);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "addQuestion",
    value: function addQuestion() {
      this.setState({ showQuestionModal: true });
    }
  }, {
    key: "closeQuestion",
    value: function closeQuestion() {
      this.setState({ showQuestionModal: false });
    }
  }, {
    key: "reveiveQuestion",
    value: function reveiveQuestion(options) {
      var _this2 = this;

      var questionList = this.state.questionList;

      questionList.push(options);
      this.setState({ questionList: questionList }, function () {
        console.log(_this2.state.questionList);
        setState('questions', _this2.state.questionList);
      });
      this.closeQuestion();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var $compid__102 = (0, _index.genCompid)(__prefix + "$compid__102");

      var questionList = this.__state.questionList;

      this.__state.showQuestionModal && _index.propsManager.set({
        "onReveiveQuestion": this.reveiveQuestion.bind(this),
        "onCloseQuestion": this.closeQuestion.bind(this)
      }, $compid__102);
      Object.assign(this.__state, {
        $compid__102: $compid__102
      });
      return this.__state;
    }
  }]);

  return Index;
}(_index.Component), _class.$$events = ["addQuestion"], _class.$$componentPath = "pages/index/index", _temp2);
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));