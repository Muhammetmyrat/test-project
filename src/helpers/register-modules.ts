import router from '../router'

const registerModule = (module: any) => {
  if (module.router) {
    module.router(router)
  }
}

export const registerModules = (modules: any) => {
  Object.keys(modules).forEach((moduleKey) => {
    const module = modules[moduleKey]
    registerModule(module)
  })
}
