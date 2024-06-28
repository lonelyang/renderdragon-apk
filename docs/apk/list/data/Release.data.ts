import { base } from '../../../.vitepress/meta.ts'
import { Shader, createShaderPageLoader } from '../../../.vitepress/theme/shader.ts'

declare const data: Shader[]
export { data }

export default createShaderPageLoader('apk/list/Release/*.md', base)
