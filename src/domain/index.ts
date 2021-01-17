const USE_CASES = {
  character__search_characters_use_case: () =>
    import(
      /* webpackChunkName: "character__search_characters_use_case" */ `./character/application/search/characterSearcher`
    ),
  character__retrieve_character_use_case: () =>
    import(
      /* webpackChunkName: "character__retrieve_character_use_case" */ `./character/application/retrieve/characterReceiver`
    ),
  character__create_character_use_case: () =>
    import(
      /* webpackChunkName: "character__create_character_use_case" */ `./character/application/create/characterCreator`
    ),
  character__update_character_use_case: () =>
    import(
      /* webpackChunkName: "character__update_character_use_case" */ `./character/application/update/characterUpdater`
    ),
  character__delete_character_use_case: () =>
    import(
      /* webpackChunkName: "character__delete_character_use_case" */ `./character/application/delete/characterEliminator`
    )
}

type EntryPointFunction = {
  execute: (...params) => Promise<any>
}

export type EntryPoint = {
  get: (nameOfUseCase: string) => EntryPointFunction
}

const entryPoint: EntryPoint = {
  get: nameOfUseCase => ({
    async execute(...params) {
      const {default: useCaseFactory} = await USE_CASES[nameOfUseCase]()
      // eslint-disable-next-line react-hooks/rules-of-hooks
      return useCaseFactory().execute(...params)
    }
  })
}

export default entryPoint
