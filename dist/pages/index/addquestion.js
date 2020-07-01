"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddQuestion = (_temp2 = _class = function (_BaseComponent) {
  _inherits(AddQuestion, _BaseComponent);

  function AddQuestion() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AddQuestion);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AddQuestion.__proto__ || Object.getPrototypeOf(AddQuestion)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = [], _this.customComponents = ["Dialog"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AddQuestion, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(AddQuestion.prototype.__proto__ || Object.getPrototypeOf(AddQuestion.prototype), "_constructor", this).call(this, props);

      this.$$refs = [];
    }
  }, {
    key: "btnCancel",
    value: function btnCancel() {
      //需要调用上层组件方法
      this.props.onCloseQuestion && this.props.onCloseQuestion();
    }
  }, {
    key: "btnOK",
    value: function btnOK() {
      //点击确认时,采集数据,关闭窗体传递数据
      if (this.state.title && this.state.des) {
        //调用父层组件 传递数据
        this.props.onReveiveQuestion && this.props.onReveiveQuestion(this.state);
      } else {
        _index2.default.showToast({ title: '请输入标题或描述', icon: 'none' });
      }
    }
  }, {
    key: "changeTitle",
    value: function changeTitle(event) {
      this.setState({ title: event.target.value });
    }
  }, {
    key: "changeDes",
    value: function changeDes(event) {
      this.setState({ des: event.target.value });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return AddQuestion;
}(_index.Component), _class.$$events = ["changeTitle", "changeDes", "btnOK", "btnCancel"], _class.$$componentPath = "pages/index/addquestion", _temp2);
exports.default = AddQuestion;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(AddQuestion));