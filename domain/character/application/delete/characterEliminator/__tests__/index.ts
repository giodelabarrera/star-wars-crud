import fetchMock from 'fetch-mock'

import createCharacterEliminator from '..'

const baseUrl = 'http://localhost:3306'

afterEach(() => {
  fetchMock.reset()
})

test('should remove a character by id', async () => {
  const id = 1
  const endpoint = `${baseUrl}/characters/${id}`
  const fakeResponse = {}
  fetchMock.delete(endpoint, fakeResponse)

  const characterEliminator = createCharacterEliminator()
  const isRemoved = await characterEliminator.execute({id})

  expect(isRemoved).toBeTruthy()
})

test('should fail when it happens a not found error', async () => {
  const id = 2
  const endpoint = `${baseUrl}/characters/${id}`
  fetchMock.delete(endpoint, 404)

  const characterEliminator = createCharacterEliminator()

  await expect(characterEliminator.execute({id})).rejects.toHaveProperty(
    'status',
    404
  )
})

test('should fail when it happens a server error', async () => {
  const id = 2
  const endpoint = `${baseUrl}/characters/${id}`
  fetchMock.delete(endpoint, 500)

  const characterEliminator = createCharacterEliminator()

  await expect(characterEliminator.execute({id})).rejects.toHaveProperty(
    'status',
    500
  )
})
