/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_HYGRAPH_PROJECT_API: string
  readonly VITE_HYGRAPH_AUTH_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
