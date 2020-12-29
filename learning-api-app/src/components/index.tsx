import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "@learning/components/app"
import { ThemeProvider } from '@learning/components/contexts/theme-context'
import { I18nextProvider } from 'react-i18next'
import i18n from '@learning/locales'
import '@learning/styles/index.css'

ReactDOM.render(
    <I18nextProvider
        i18n={i18n}>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </I18nextProvider>
, document.getElementById("container"));
