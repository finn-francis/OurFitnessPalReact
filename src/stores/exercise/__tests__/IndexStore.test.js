import IndexStore from '../IndexStore'

const exerciseList = [
  {"id": 1, "name": "Squat", "description": "Go Low!"},
  {"id": 2, "name": "Bench press", "description": "Push it up!"},
  {"id": 3, "name": "Deadlift", "description": "Pull it higher!"}
]

beforeEach(() => {
  IndexStore.exercises = []
})

describe('getAll', () => {
  it('should return a list of exercises', () => {
    expect(IndexStore.getAll()).toEqual([])

    IndexStore.exercises = exerciseList
    expect(IndexStore.getAll()).toEqual(exerciseList)
  })
})

describe('setExercises', () => {
  it('should set the exercises property to the given value', () => {
    expect(IndexStore.getAll()).toEqual([])

    IndexStore.setExercises(exerciseList)
    expect(IndexStore.exercises).toEqual(exerciseList)
  })
})

describe('appendExercise', () => {
  it('should append an exercise to the end of the list', () => {
    IndexStore.exercises = exerciseList.slice(0, 2)
    IndexStore.appendExercise(exerciseList[2])

    expect(IndexStore.exercises).toEqual(exerciseList)
  })
})

describe('updateEditedExercise', () => {
  const updatedExercise = {'id': 2, name: 'Chest press', 'description': 'Do a press'}

  it('should update a selected exercise in the list', () => {
    expect(IndexStore.exercises[1]).toNotEqual(updatedExercise)
    IndexStore.updateEditedExercise(updatedExercise)
    expect(IndexStore.exercises[1]).toEqual(updatedExercise)
  })
})
