"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _echarts = require("./ec-canvas/echarts.js");

var echarts = _interopRequireWildcard(_echarts);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function setChartData(chart, data) {
  var option = {
    series: [{
      name: '访问来源',
      type: 'pie',
      center: ['50%', '50%'],
      radius: [0, '60%'],
      data: data,
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };
  chart.setOption(option);
}

var PieChart = (_temp2 = _class = function (_BaseComponent) {
  _inherits(PieChart, _BaseComponent);

  function PieChart() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PieChart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PieChart.__proto__ || Object.getPrototypeOf(PieChart)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["ec"], _this.config = {
      usingComponents: {
        "ec-canvas": "./ec-canvas/ec-canvas"
      }
    }, _this.state = {
      ec: {
        lazyLoad: true
      }
    }, _this.refChart = function (node) {
      return _this.Chart = node;
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PieChart, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(PieChart.prototype.__proto__ || Object.getPrototypeOf(PieChart.prototype), "_constructor", this).call(this, props);
      this.$$refs = [{
        type: "component",
        id: "dMiGa",
        refName: "",
        fn: this.refChart
      }];
    }
  }, {
    key: "refresh",
    value: function refresh(data) {
      this.Chart.init(function (canvas, width, height) {
        var chart = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        setChartData(chart, data);
        return chart;
      });
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

  return PieChart;
}(_index.Component), _class.$$events = [], _class.$$componentPath = "components/PieChart", _temp2);
exports.default = PieChart;

Component(require('../npm/@tarojs/taro-weapp/index.js').default.createComponent(PieChart));