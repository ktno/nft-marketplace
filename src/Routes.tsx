import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from 'views'

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
