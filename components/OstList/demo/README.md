## OstDemo 示例

  
```jsx
:::$demo
    constructor(props) {
        super(props);
        this.state = { turnOn: false };
    }

    render() {
        const { turnOn } = this.state;

       return([
            <OstList.card title="卡片-1" key='0'>
                <OstList title='列表标题1'>
                    <OstList.item arrowTo='right' onClick={()=>console.log('事件')} text="内容" />
                </OstList>
                <OstList title='列表标题2'>
                    <OstList.item arrowTo='top' onClick={()=>console.log('事件')} text="内容" />
                </OstList>
            </OstList.card>,

            <OstList.card title="卡片-2" key='1'>
                <OstList title='列表标题1'>
                    <OstList.item arrowTo={turnOn ? 'bottom' : 'top'} onClick={()=>this.setState({turnOn: !turnOn})} text="点击切换" />
                </OstList>
                <OstList title='列表标题2'  tips={()=> {console.log('tips!!!')}}>
                    <OstList.item arrowTo={'right'} text="提示" onClick={() => console.log('tips')}/>
                </OstList>
            </OstList.card>,

            <OstList.card title="卡片-3" key='2'>
                <OstList title='列表标题1'  style={{padding: '20px 0'}} desc='添加desc属性添加副标题'>
                </OstList>
                <OstList title='列表标题2'  style={{padding: '20px 0'}} desc='添加desc属性添加副标题'>
                </OstList>
            </OstList.card>
       ])
    }
:::$
```
