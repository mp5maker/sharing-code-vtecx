import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "@learning/components/app"
import { ThemeProvider } from '@learning/components/contexts/theme-context'
import '@learning/styles/index.css'

ReactDOM.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
, document.getElementById("container"));
