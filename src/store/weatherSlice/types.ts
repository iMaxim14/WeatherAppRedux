export interface weatherValue {
    city: string,
    degrees: number
    infoImageURL: string
}

export interface WeatherSliceState {
    data?: weatherValue
    error: any,
    history: weatherValue[]
    status: "default" | "loading" | "success" | "error"
}

