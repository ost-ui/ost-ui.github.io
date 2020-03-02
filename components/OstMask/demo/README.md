## OstMask 示例

淡入淡出效果蒙层，同时可以防止移动端滚动穿透；

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
            <div className="ost-mask-demo">
                <button
                    className="ost-mask-demo-btn"
                    onClick={()=>this.setState({show: true})} > 
                    显示蒙层
                </button>

                <OstMask 
                    show={this.state.show} 
                    onClick={e=> this.setState({show: false})} >
                    <span className="ost-mask-demo-text" > 点击蒙层关闭 </span>
                </OstMask>
            </div>
        )
    }
:::$
```

```css
<style>
.ost-mask-demo {
    width: auto;
    padding: 10px;
}
.ost-mask-demo-btn {
    width: 100%;
    height: 44px;
    font-size: 14px;
    background: #FF6D00;
    color: #fff;
    border-radius: 100px;
}
.ost-mask-demo-text {
    color: #fff;
    font-size: 18px;
}
</style>

```

### 组件 props 说明
| 事件名称 | 说明 | 类型 |
|---------|--------|---------|
| show | 用于控制蒙层显示 | bool |
| onClick | 蒙层的点击事件 | func |

  