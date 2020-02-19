## OstHeader 示例

  
```jsx
:::$demo
class Demo extends Component {
    
    render() {

       return(
            <div>

                <OstHeader title='头部' />

                <OstHeader
                    title='头部-自定义返回'
                    leftOpt={{
                        onClick: ()=> alert('自定义返回')
                    }}
                    style={{ boxShadow: '0 0 0 0 rgba(0,0,0,0)', top: '60px' }} />

                <OstHeader
                    title='头部-修改默认样式'
                    titleStyle={{color: '#fff' }}
                    style={{ background: '#3f7ae7', top: '120px'}} />

            </div>
       )
    }
}
:::$
```

### 组件 props 说明
| 事件名称 | 说明 | 类型 | 默认值 |
|---------|--------|---------|---------|
| title | 用于展示头部标题 | string | - |
| leftOpt | 左边按钮选项 | obj | - |
| leftOpt.onClick | 左边按钮-点击事件 | func | - |
| style | 组件容器样式 | obj | - |
| titleStyle | 组件标题样式 | obj | - |
