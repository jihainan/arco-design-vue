```yaml
meta:
  type: Component
  category: Data Entry
title: InputNumber
description: Only input boxes in numeric format are allowed.
```

*Auto translate by google.*

@import ./__demo__/basic.md

@import ./__demo__/mode.md

@import ./__demo__/size.md

@import ./__demo__/precision.md

@import ./__demo__/format.md


### `<input-number>` Props

|Attribute|Description|Type|Default|
|---|---|---|:---:|
|model-value **(v-model)**|Value|`number`|`-`|
|default-value|Default value (uncontrolled mode)|`number`|`-`|
|mode|Mode (`embed`: button embedded mode, `button`: left and right button mode)|`'embed' \| 'button'`|`'embed'`|
|precision|Precision|`number`|`-`|
|step|Number change step|`number`|`1`|
|disabled|Whether to disable|`boolean`|`false`|
|max|Max|`number`|`Infinity`|
|min|Min|`number`|`-Infinity`|
|formatter|Define the display value of the input|`func`|`-`|
|parser|Convert from `formatter` to number, and use with `formatter`|`func`|`-`|
|placeholder|Input prompt text|`string`|`-`|
|hide-button|Whether to hide the button (only available in `embed` mode)|`boolean`|`false`|
|size|Input size|`'mini' \| 'small' \| 'medium' \| 'large'`|`'medium'`|
### `<input-number>` Events

|Event Name|Description|Parameters|
|---|---|---|
|change|Triggered when the value changes|value: `union`|
|focus|Triggered when the input gets focus|-|
|blur|Triggered when the input box loses focus|-|
### `<input-number>` Methods

|Method|Description|Parameters|Return|
|---|---|---|:---:|
|focus|Make the input box focus|-|-|
|blur|Make the input box lose focus|-|-|


