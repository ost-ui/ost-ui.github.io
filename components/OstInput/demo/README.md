## OstInput 示例


```jsx
import {OstList, OstInput} from 'ost-ui';


:::$demo
class Demo extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            value: '',
            phoneNo: '',
        };
    }

    render() {
       const { value, phoneNo } = this.state;

       return([
        
        <OstList.card title="输入框" key='0'>
          <OstList title='标准输入'>
            <OstInput placeholder='请输入' />
          </OstList>
          <OstList title='不可输入'>
            <OstInput defaultValue='禁用' disabled />
          </OstList>
        </OstList.card>,

        <OstList.card title="登陆" key='1'>
          <OstList title='手机号'>
            <OstInput
                maxLength={11}
                value={phoneNo}
                onChange={e => {
                    const _val = e.target.value;
                    this.setState({phoneNo: _val})
                }}
                type='number'
                placeholder='请输入手机号' />
          </OstList>
          <OstList title='验证码'>
            <OstInput
                type='number'
                countdown={5}
                countstart={()=> console.log('倒计时开始')}
                countend={()=> console.log('倒计时结束')}
                onChange={e => console.log(e.target.value)}
                placeholder='请输入验证码' />
          </OstList>
          <OstList title='验证码'>
            <OstInput
                countDisabled
                countdown={60}
                placeholder='验证码按钮已禁' />
          </OstList>
        </OstList.card>,

        <OstList.card title="输入框" key='2'>
          <OstList title='请输入测试内容'>
            <OstInput
                placeholder='请输入' 
                value={value}
                onDel={()=>this.setState({value: ''})}
                onChange={e => this.setState({value: e.currentTarget.value})} />
          </OstList>
        </OstList.card>
       ])
    }
}
:::$
```
  

```jsx
import {OstList, OstInput, OstNumKeyboard} from 'ost-ui';


:::$demo
class Demo extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            sixBitValue: '',
            showKeyBoard: false 
        };
    }

    render() {
       const { sixBitValue } = this.state;

       return([
        <OstList.card title="6位数字输入框" key='2'>
            <OstInput.sixBit
                style={{padding: '10px 0'}}
                autoFocus={false}
                value={sixBitValue}
                onChange={(v) => {
                    console.log('onChange>>>', v)
                }}
                onBlur={(v) => {
                    this.setState({
                        showKeyBoard: false, 
                        sixBitValue: ''
                    });
                    console.log('onBlur callback>>>', v);
                }}
                onFocus={(v) => {
                    this.setState({showKeyBoard: true});
                    console.log('onFocus callback>>>', v);
                }}
             >
             </OstInput.sixBit>
        </OstList.card>,
        
        <OstNumKeyboard
            resetWhenClose
            key='3'
            maxLength='6'
            show={this.state.showKeyBoard} 
            onChange={v => this.setState({sixBitValue: v})} />
       ])
    }
}
:::$
```
