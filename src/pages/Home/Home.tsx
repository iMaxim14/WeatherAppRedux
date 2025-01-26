import { MainButton } from "../../components/Button/styles"
import InfoCard from "../../components/InfoCard/InfoCard"
import Input from "../../components/Input/Input"
import MainButtonCopmponent from "../../components/MainButtonComponent/MainButtonComponent"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { weatherSlice } from "../../store/weatherSlice/weatherSlice"
import {
  HomeWrapper,
  InfoCardContainer,
  ResultCard,
  SearchContainer,
} from "./styles"
import {
  weatherSliceSelectors,
  weatherSliceActions,
} from "../../store/weatherSlice/weatherSlice"
import type { weatherValue } from "store/weatherSlice/types"
import type { ChangeEvent } from "react"
import { createContext, useState } from "react"
import type { ButtonContextProps } from "./types"
import { ErrorCardWrapper } from "components/ErrorCard/styles"
import ErrorCard from "components/ErrorCard/ErrorCard"

export const ButtonContext = createContext<ButtonContextProps | undefined>(
  undefined,
)

function Home() {
  const [search, setSearch] = useState<string>("")

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const dispatch = useAppDispatch()
  const { data, error, status } = useAppSelector(
    weatherSliceSelectors.weatherData,
  )

  const getData = () => {
    dispatch(weatherSliceActions.getData(search)) // с
  }

  

  const weatherCard = (data: weatherValue) => {
    const deleteCard = () => {
      dispatch(weatherSliceActions.deleteCard())
    }
    const saveCard = () => {
      dispatch(weatherSliceActions.saveCard())
    }

    const degreesCelsius = data.degrees - 273.15
    return (
      <InfoCardContainer>
        <ButtonContext.Provider
          value={{ onDelete: deleteCard, onSave: saveCard }}
        >
          <InfoCard
            degrees={degreesCelsius.toFixed(0)}
            city={data.city}
            img={data.infoImageURL}
            showSaveButton={true}
          />
        </ButtonContext.Provider>
      </InfoCardContainer>
    )
  }

  console.log(data)
  return (
    <HomeWrapper>
      <SearchContainer>
        <Input
          inputName="Search"
          inputPlaceholder="Search"
          inputType="text"
          onChange={handleInputChange}
          value={search}
        />
        <MainButtonCopmponent
          buttonName="Search"
          buttonType="button"
          onClick={getData}
        />
      </SearchContainer>
      <ResultCard>
        {error ? (
          <ErrorCardWrapper>
            <ErrorCard />
          </ErrorCardWrapper>
        ) : (
          data && weatherCard(data)
        )}
      </ResultCard>
    </HomeWrapper>
  )
}

export default Home
