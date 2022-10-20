import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Layout from "./components/layout/Layout";
import Theme from "./styles/theme";
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <Theme>
            <Layout>
                <App />
            </Layout>
        </Theme>
    </React.StrictMode>
);
