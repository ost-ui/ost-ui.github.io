## OstLoading 示例

  
```jsx
:::$demo
class Demo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    render() {
       return( 
            <div>
                <OstList.card>
                    <OstList title='普通弹窗-1'>
                        <OstList.item arrowTo='right' onClick={()=>this.setState({show: true})} text="点击展示" />
                    </OstList>
                </OstList.card>
                <OstModal.basic
                        show={this.state.show}
                            text = {{
                            primary: '主标题',
                            secondary: [
                                <span key='1' style={{display: 'block'}}>1.列表内容一</span>,
                                <span key='2' style={{display: 'block'}}>2.列表内容二</span>,
                                <span key='3' style={{display: 'block'}}>3.列表内容三</span>,
                                <span key='4' style={{display: 'block'}}>4.列表内容四</span>
                            ]
                            }}
                            button={[
                                {
                                    text: '知道了',
                                    onPress: () => this.setState({show: false})
                                }
                            ]} />
            </div>
       )
    }
}
:::$
```
```jsx
:::$demo
class Demo extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    render() {
       return( 
            <div>
            <OstList.card>
                <OstList title='普通弹窗-2'>
                    <OstList.item arrowTo='right' onClick={()=>this.setState({show: true})} text="点击展示" />
                </OstList>
            </OstList.card>
                <OstModal.basic
                        show={this.state.show}
                            text = {{
                                primary: '确定支付这笔吗？'
                            }}
                            button={[
                            {
                                text: '确定',
                                onPress: () => this.setState({show: false})
                            },
                            {
                              text: '取消',
                              onPress: () => this.setState({show: false})
                            }
                            ]} />
            </div>
       )
    }
}
:::$
```
