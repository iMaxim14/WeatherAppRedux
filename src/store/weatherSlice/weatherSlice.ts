import axios from "axios"
import { createAppSlice } from "../createAppSlice"
import type { WeatherSliceState, weatherValue } from "./types"
import { v4 } from "uuid"

// const apiKey: string = '178522c09148b7f17dd659f51d241ff4'

const weatherInititalState: WeatherSliceState = {
  data: undefined,
  history: [],
  error: undefined,
  status: "default",
}

export const weatherSlice = createAppSlice({
  name: "WEATHER",

  initialState: weatherInititalState,
  reducers: create => ({
    getData: create.asyncThunk(
      async (arg: string, thunkApi) => {
        try {
          const result = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${arg}&appid=178522c09148b7f17dd659f51d241ff4`,
          )
          console.log(`Result ${result.data}`)

          return result.data
        } catch (error) {
          return thunkApi.rejectWithValue(error)
        }
      },
      {
        pending: (state: WeatherSliceState) => {
          state.status = "loading"
          state.error = undefined
        },
        fulfilled: (state: WeatherSliceState, action: any) => {
          state.status = "success"
          state.data = {
            city: action.payload.name,
            degrees: action.payload.main.temp,
            infoImageURL: `https://openweathermap.org/img/w/${action.payload.weather[0].icon}.png`,
          }
        },
        rejected: (state: WeatherSliceState, action: any) => {
          state.status = "error"
          state.error = action.payload
        },
      },
    ),

    saveCard: create.reducer(state => {
      state.history.push(state.data as weatherValue)
    }),

    deleteCard: create.reducer(state => {
      state.data = undefined
    }),
    deleteAllCards: create.reducer(state => {
      state.history = []
    }),
  }),
  selectors: {
    weatherData: (state: WeatherSliceState) => state,
    weatherHistory: (state: WeatherSliceState) => state.history,
  },
})

export const weatherSliceActions = weatherSlice.actions
export const weatherSliceSelectors = weatherSlice.selectors
