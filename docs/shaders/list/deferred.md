---
editLink: false
---
# 延迟渲染光影 <Badge type="danger" text="实验性" />

::: warning 非完整列表
必须在视频设置中启用延迟技术预览版才能使用这些着色器!
:::

<script setup>
import { data as shaders } from './data/deferred.data.ts'
</script>

<ShaderList :shaders="shaders"/>