const USE_CASES = {
  character__search_characters: () =>
    import(
      /* webpackChunkName: "character__search_characters" */ `./character/application/search/characterSearcher`
    )
}

type EntryPointFunction = {
  execute: (...params) => Promise<any>
}

type EntryPoint = {
  get: (nameOfUseCase: string) => EntryPointFunction
}

const entryPoint: EntryPoint = {
  get: nameOfUseCase => ({
    async execute(...params) {
      const {default: useCaseFactory} = await USE_CASES[nameOfUseCase]()
      return useCaseFactory().execute(...params)
    }
  })
}

export default entryPoint
