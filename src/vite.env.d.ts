/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_HYGRAPH_PROJECT_API: string
  readonly VITE_HYGRAPH_AUTH_TOKEN: string

  readonly VITE_FETCH_TIMEOUT: string
  readonly VITE_FETCH_COURSES_PERSIST: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
