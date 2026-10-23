import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "@fontsource-variable/source-sans-3/wght.css"
import "@fontsource-variable/source-sans-3/wght-italic.css"
import "./handout.css"
import Handout from "./Handout.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Handout />
  </StrictMode>
)
