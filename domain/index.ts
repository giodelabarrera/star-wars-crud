const USE_CASES = {
  character__search_characters_use_case: () =>
    import(
      /* webpackChunkName: "character__search_characters_use_case" */ `./character/application/search/characterSearcher`
    ),
  character__retrieve_character_use_case: () =>
    import(
      /* webpackChunkName: "character__retrieve_character_use_case" */ `./character/application/retrieve/characterRetriever`
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
