## OstMask 示例

```jsx
:::$demo
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    render() {
        return (
            <div style={{width: 'auto', padding: '10px'}}>
                <button
                    style={{
                        width: '100%',
                        height: '44px',
                        fontSize: '14px',
                        background: '#fff'
                    }}
                    onClick={()=>this.setState({show: true})} > 
                    显示蒙层
                </button>

                <OstMask show={this.state.show} onClick={e=> this.setState({show: false})} >
                    <span style={{color: '#fff'}} > 点击蒙层关闭 </span>
                </OstMask>
            </div>
        )
    }
:::$
```


### 组件 props 说明
| 事件名称 | 说明 | 类型 |
|---------|--------|---------|
| show | 用于控制蒙层显示 | bool |
| onClick | 蒙层的点击事件 | func |

  