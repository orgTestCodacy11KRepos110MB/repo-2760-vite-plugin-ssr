export { assertViteManifest }
export type { ViteManifest }
export type { ViteManifestEntry }

import { assert, isPlainObject } from '../utils'

type ViteManifestEntry = {
  src?: string
  file: string
  css?: string[]
  assets?: string[]
  isEntry?: boolean
  isDynamicEntry?: boolean
  imports?: string[]
  dynamicImports?: string[]
}
type ViteManifest = Record<string, ViteManifestEntry>

function assertViteManifest(manifest: unknown): asserts manifest is ViteManifest {
  assert(isPlainObject(manifest))
  Object.entries(manifest)
    // circumvent esbuild bug: esbuild adds a `default` key to JSON upon `require('./some.json')`.
    .filter(([key]) => key !== 'default')
    .forEach(([_, entry]) => {
      assert(isPlainObject(entry))
      assert(typeof entry.file === 'string')
    })
}
