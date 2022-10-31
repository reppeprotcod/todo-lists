import React from "react";
import { useTranslation } from 'react-i18next';

const Main = () => {

    const { t, i18n } = useTranslation();

    return (
        <div className="container mainPage">
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
            <h5>{t('tasks completed')}</h5>
        </div>
    )
}

export default Main;