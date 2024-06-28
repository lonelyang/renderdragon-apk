# 补充内容

这个页面将包含一些可能对一小部分用户有用的技巧.


## 使用 material.bin 解包数据 {#unpack-data}

::: code-group
```sh [Windows]
.\MaterialBinTool.exe --data-only -u "material.bin files to unpack"
```
```sh [Linux]
java -jar ./MaterialBinTool.jar --data-only -u "material.bin files to unpack"
```
:::

你可以在游戏文件内部找到 material.bin 文件. `<minecraft data path>/assets/renderer/materials`


## 合并material数据 {#merged-data}

来自多个平台的material.json可以合并到一个数据文件中, 然后用于编译material.bin, 这些material.bin可以在合并后的多个平台上使用.
请注意, 最终的 material.bin 文件将相当大. 

要使用 MBT 合并material.json, 请运行:
::: code-group
```sh [Windows]
.\MaterialBinTool.exe --data-only -o "output dir" -m "material.json files of each platform"
```
```sh [Linux]
java -jar ./MaterialBinTool-all.jar --data-only -o "output dir" -m "material.json files of each platform"
```
:::

只有当要合并所有的 material.json 文件都来自不同平台的同一版本的 MC 时, 该功能才会起作用.

下面是一个 bash 脚本, 可按以下文件结构处理多个文件:
```
Android
└─ RenderChunk
   └─ RenderChunk.json
Windows
└─ RenderChunk
   └─ RenderChunk.json
iOS
└─ RenderChunk
   └─ RenderChunk.json
```
```sh
#!/bin/bash
MBT="java -jar ./MaterialBinTool-0.8.2-all.jar"
MATERIALS="Android/*"
for s in $MATERIALS; do 
  MAT=$(basename ${s})
  echo "Merging $MAT"
  $MBT --data-only -o merged/$MAT/ -m Android/$MAT/$MAT.json Windows/$MAT/$MAT.json iOS/$MAT/$MAT.json 
done
```

要使用它们, 请将 `Merged/` 目录复制到 `data/`, 并在构建时添加参数 `-p Merged`.
