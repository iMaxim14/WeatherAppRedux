import { v4 } from "uuid"
import InfoCard from "../../components/InfoCard/InfoCard"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import {
  weatherSliceActions,
  weatherSliceSelectors,
} from "../../store/weatherSlice/weatherSlice"
import { ButtonHistoryWrapper, HistoryWrapper, InfoCardWrapper } from "./styles"
import MainButtonCopmponent from "../../components/MainButtonComponent/MainButtonComponent"
import type { weatherValue } from "../../store/weatherSlice/types"
import { ButtonContext } from "pages/Home/Home"

function History() {
  const weatherHistoryData = useAppSelector(
    weatherSliceSelectors.weatherHistory,
  )
  const dispatch = useAppDispatch()

  const deleteAllCards = () => {
    dispatch(weatherSliceActions.deleteAllCards())
  }

  const infoCards = weatherHistoryData.map((data: any) => {
    const degreesCelsius = data.degrees - 273.15
    const deleteCard = () => {
      dispatch(weatherSliceActions.deleteCard())
    }

    return (
      <InfoCardWrapper key={v4()}>
        <ButtonContext.Provider value={{ onDelete: deleteCard }}>
          <InfoCard
            degrees={degreesCelsius.toFixed(0)}
            city={data.city}
            img={data.infoImageURL}
            showSaveButton={false}
          />
        </ButtonContext.Provider>
      </InfoCardWrapper>
    )
  })

  return (
    <HistoryWrapper>
      {infoCards}
      <ButtonHistoryWrapper>
        {weatherHistoryData.length > 0 && (
          <MainButtonCopmponent
            buttonName="Delete all cards"
            buttonType="button"
            onClick={deleteAllCards}
          />
        )}
      </ButtonHistoryWrapper>
    </HistoryWrapper>
  )
}

export default History
