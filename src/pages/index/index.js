import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'
import AddQuestion from './addquestion'
import PieChart from '../../components/PieChart'


function getStore(key){
  let str = Taro.getStorageSync(key);
  if(!str){
    return []
  }
  return JSON.parse(str)
}
function setStore(key, obj){
  let str = obj;
  if(typeof obj=='object'){
    str=JSON.stringify(obj)
  }
  Taro.setStorageSync(key, str);
}

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  state = {
    showQuestionModal:false,   //显示问题浮层
    questionList:getStore('questions')
  }

  componentWillMount () { }

  componentDidMount() {
    const chartData = [
      {value:335, name:'直接访问'},
      {value:310, name:'邮件营销'},
      {value:234, name:'联盟广告'},
      {value:135, name:'视频广告'},
      {value:1548, name:'搜索引擎'}
    ];
    this.pieChart.refresh(chartData);
  }
  refPieChart = (node) => this.pieChart = node

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  addQuestion() {
    this.setState({showQuestionModal:true})
  }

  closeQuestion() {
    this.setState({showQuestionModal:false})
  }
  reveiveQuestion(options) {
    let {questionList}=this.state;
    questionList.push(options);
    this.setState({questionList:questionList},()=>{
      console.log(this.state.questionList);
      setState('questions',this.state.questionList)
    });
    this.closeQuestion();
  }
  render () {
    let {questionList}=this.state;
    return (
      <View className='index'>
        <View className='title'>问卷调查</View>
        <PieChart ref={this.refPieChart} />
        <View className='question-list'>
          {
            questionList.map((item, index)=>{
              return (<View className = 'question'>
                        <View className = 'question-title'>{item.title}</View>
                        <View className = 'question-des'>{item.des}</View>
                      </View>)
            })
          }
        </View>
        {this.state.showQuestionModal?<AddQuestion onReveiveQuestion={this.reveiveQuestion.bind(this)} onCloseQuestion={this.closeQuestion.bind(this)} />:null}
        <Button onClick={this.addQuestion.bind(this)} className='btn-question'>提问</Button>
      </View>
    )
  }
}