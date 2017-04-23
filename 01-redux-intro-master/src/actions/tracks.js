var mockApiData = [
  {
    id: 1,
    name: 'Первый Трек'
  },
  {
    id: 2,
    name: 'Второй трек'
  },
  {
    id: 3,
    name: '3 трек'
  },
  {
    id: 4,
    name: '4 трек'
  }
]

export  const getTracks = () => dispatch => {
  setTimeout(() => {
    console.log('I got Tracks')
    dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: mockApiData })
  }, 2000 )
}
