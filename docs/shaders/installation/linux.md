# 在 Linux 上安装

本指南适用于 Linux 上的非官方 Minecraft Bedrock 启动器 [mcpelauncher-manifest](https://github.com/minecraft-linux/mcpelauncher-manifest).您可以在此启动器中使用 Android 版本的着色器.

## 手动方法

**添加着色器:**  

1. 下载 Android 版本的着色器
2. 从着色器mcpack中提取material.bin文件.你可以在`/assets/renderer/materials/`中找到它们.
3. 将这些文件复制到数据根目录下的材料目录:

::: warning 需要备份！
确保先备份以下目录中的所有原始文件.否则您将无法还原为原版着色器.
:::

```
mcpelauncher/versions/1.20.x/assets/renderer/materials/
```
您可以从 "启动器设置">"存储" 找到您的数据根目录.

4. 有些着色器包含额外的资产.在这种情况下, 您还必须导入资源包或将其添加到资源包目录中.

**删除着色器:**  
如果您想恢复到原版着色器, 只需将备份的旧文件复制粘贴到数据根目录下的材质目录即可.