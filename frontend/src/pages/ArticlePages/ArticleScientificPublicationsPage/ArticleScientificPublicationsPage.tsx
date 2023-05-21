import React from 'react'
import {Layout} from "../../../components/Layout/Layout";
import {useAppSelector} from "../../../hooks/redux";
import Grid from "@mui/material/Grid";
import scientificPublicationLeftImage from '../../../assets/img/ScientificPublicationsLeft.png'
import {
    ArticleScientificPublicationsHierarchyMenu
} from "../../../components/ToolComponents/Article/ArticleScientificPublicationsHierarchyMenu/ArticleScientificPublicationsHierarchyMenu";
import {pageRedirect} from "../../pageRedirect";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import './ArticleScientificPublicationsPagePage.scss'

// id = 0
export const ArticleScientificPublicationsPage = () => {
    const { time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);

    const navigate = useNavigate()

    return(
        <Layout time={timeState} instrument={instrumentState} footerDisplayStyle={'default'} headerDisplayStyle={'default'}>
            <div className='scientific_publications'>
                <Grid className="scientific_publications__parent" container spacing={0}>
                    <Grid className="scientific_publications__parent--leftContainer" item xs={4}>
                        <img src={scientificPublicationLeftImage} alt='leftImage'/>
                    </Grid>
                    <Grid className="scientific_publications__parent--rightContainer" item xs={8}>
                        <div className='scientific_publications__parent--rightContainer-subTitle'>
                            <h4>Стратиграфическая шкала.</h4>
                        </div>
                        <div className='scientific_publications__parent--rightContainer-title'>
                            <h1>Доступны Публикации по периодам:</h1>
                        </div>
                        <div className='scientific_publications__parent--rightContainer-menu'>
                            <ArticleScientificPublicationsHierarchyMenu />
                        </div>
                        <div className='scientific_publications__parent--rightContainer-goBackButton'>
                            <Button onClick={() => navigate(`/${pageRedirect(timeState, instrumentState)}`)} variant="outlined">
                                НАЗАД
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Layout>
    )
}