## OstLoading 示例

  ### 默认选中示例

```jsx
:::$demo

    render() {
       return( 
        <OstList.card>
        <OstList title='默认选中'>
            <div className="alignCenter">
                <OstSwitch defaultChecked onClick={ck => console.log(ck)} />
            </div>
        </OstList>
        </OstList.card>
       )
    }
:::$
```

### 默认未选示例
  
```jsx
:::$demo

    render() {
       return( 
        <OstList.card>
        <OstList title='默认未选'>
            <div className="alignCenter">
                <OstSwitch defaultChecked={false} onClick={ck => console.log(ck)} />
            </div>
        </OstList>
        </OstList.card>
       )
    }
:::$
```

### 禁止点击示例

```jsx
:::$demo

    render() {
       return( 
        <OstList.card>
        <OstList title='不可选择'>
            <div className="alignCenter">
                <OstSwitch defaultChecked disabled onClick={ck => console.log(ck)} />
            </div>
        </OstList>
        </OstList.card>
       )
    }
:::$
```

```css
<style>
.alignCenter {
    height: 100%;
    display: flex;
    align-items: center;
}
</style>

```