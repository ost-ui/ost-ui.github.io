## OstPicker 示例

  
```jsx
import {OstPicker} from 'ost-ui';

:::$demo
    mockData = [{
            "value": "340000",
            "label": "安徽省",
            "children": [{
                "value": "341500",
                "label": "六安市",
                "children": [{
                    "value": "341522",
                    "label": "霍邱县",
                    "children": []
                }, {
                    "value": "341521",
                    "label": "寿县",
                    "children": []
                }, {
                    "value": "341523",
                    "label": "舒城县",
                    "children": []
                }, {
                    "value": "341503",
                    "label": "裕安区",
                    "children": []
                }]
            }, {
                "value": "340500",
                "label": "马鞍山市",
                "children": [{
                    "value": "340506",
                    "label": "博望区",
                    "children": []
                }]
            }, {
                "value": "341800",
                "label": "宣城市",
                "children": [{
                    "value": "341822",
                    "label": "广德县",
                    "children": []
                }, {
                    "value": "341824",
                    "label": "绩溪县",
                    "children": []
                }, {
                    "value": "341825",
                    "label": "旌德县",
                    "children": []
                }]
            }]
        },
        {
            "value": "820000",
            "label": "澳门特别行政区",
            "children": [{
                "value": "820100",
                "label": "澳门半岛",
                "children": []
            }, {
                "value": "820200",
                "label": "离岛",
                "children": []
            }]
        },
        {
            "value": "110000",
            "label": "北京",
            "children": [{
                "value": "110100",
                "label": "北京市",
                "children": [{
                    "value": "110114",
                    "label": "昌平区",
                    "children": []
                }, {
                    "value": "110105",
                    "label": "朝阳区",
                    "children": []
                }, {
                    "value": "110103",
                    "label": "崇文区",
                    "children": []
                }, {
                    "value": "110115",
                    "label": "大兴区",
                    "children": []
                }, {
                    "value": "110229",
                    "label": "延庆县",
                    "children": []
                }]
            }]
    }]

    state = {
        value: null
    };

    onOk = (value) => {
        console.log('onOk', value);
        this.setState({value});
    }

    onCancel = () => {
        console.log('onCancel');
    }

    onHide = () => {
        console.log('onHide');
    }

    onChange = (value) => {
        console.log('onChange', value);
    }

    onScrollChange = (value) => {
        console.log('onScrollChange', value);
    }


    render() {
       return (
            <div className='ost-picker-demo'>
                <h2>Ost-Picker</h2>
                <OstPicker
                    data={this.mockData}
                    value={this.state.value}
                    onOk={this.onOk}
                    okText='确定'
                    onCancel={this.onCancel}
                    onChange={this.onChange}
                    onHide={this.onHide}
                    onScrollChange={this.onScrollChange}
                    cancelText='取消'
                    title="OstPicker">
                    <button>打开</button>
                </OstPicker>
            </div>
       )
    }
:::$
```

```css
<style>
.ost-picker-demo {
    margin: '10px 30px';
}
</style>

```
