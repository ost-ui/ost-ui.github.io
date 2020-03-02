## OstButton 示例

  
```jsx
:::$demo

    render() {
       return( 
            <div style={{
                    padding: '10px',
                    height: '100%',
                    backgroundColor: '#fff'
            }}>
                <OstButton>知道了</OstButton>
                <OstWhiteSpace></OstWhiteSpace>
                <div>
                  <OstButton inline={true} size="small">自费支付</OstButton>
                  <OstWhiteBlank size="lg" />
                  <OstButton inline={true} size="small" type="primary">医保支付</OstButton>
                </div>
                <OstWhiteSpace></OstWhiteSpace>
                <div style={{textAlign: 'center'}}>
                  <OstButton inline={true} size="small">自费支付</OstButton>
                  <OstWhiteBlank />
                  <OstButton inline={true} size="small" type="primary">医保支付</OstButton>
                </div>
                <OstWhiteSpace></OstWhiteSpace>
                <div style={{textAlign: 'right'}}>
                  <OstButton inline={true} size="small" >自费支付</OstButton>
                  <OstWhiteBlank size="sm" />
                  <OstButton inline={true} size="small">合疗支付</OstButton>
                  <OstWhiteBlank size="sm" />
                  <OstButton inline={true} size="small" type="primary">医保支付</OstButton>
                </div>
                <OstWhiteSpace></OstWhiteSpace>
                <div>
                  <OstButton inline={true}>医保支付</OstButton>
                  <OstWhiteBlank />
                  <OstButton inline={true} type="primary">自费支付</OstButton>
                </div>
                <OstWhiteSpace></OstWhiteSpace>
            </div>
       )
    }
:::$
```

### 组件 props 说明
| 事件名称 | 说明 | 类型 | 默认值 |
|---------|--------|---------|---------|
| size | <p>按钮大小，可选值 <code>small</code>或者不设</p> | string | <p>默认按钮高度40px</p> |
| type | <p>文本字体类型，可选值 <code>primary</code></p> | string | - |
| fixedCls | class前缀 | String | <p><code>ost-text</code></p> |
| className | 样式类名 | String | 无 |
