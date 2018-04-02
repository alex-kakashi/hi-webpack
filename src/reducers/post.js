export default function (state = {}, action) {
  const { type, payload } = action
  switch (type) {
    case "list-post": {
      return {
        ...state,
        ...payload
      }
    }

    default: {
      return state
    }
  }
}