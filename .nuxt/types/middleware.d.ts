import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "iam-authenticated" | "iam-can-access-admin"
declare module "D:/Project Web/Eling-Tugas-Nuxt/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}