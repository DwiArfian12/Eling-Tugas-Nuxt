import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "iam-authenticated" | "iam-can-access-admin"
declare module "C:/Users/dwiar/OneDrive/Documents/2. Kuliah UNY Semester 2/Infinite 2023/Learning Path Web Dev/Project Akhir Serdadu Jawir/app/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}