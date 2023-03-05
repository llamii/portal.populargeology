import * as React from 'react'
import { Layout } from '../../components/Layout/Layout'
import { useLocation } from 'react-router-dom'

export const ThreeDEarthPage = () => {
    const location = useLocation()
    const { timeProp } = location.state
    return (
        <div>
            <Layout 
                layoutProps={{time: timeProp, instrument: '3Д ЗЕМЛЯ'}}
            />
        </div>
    )
}