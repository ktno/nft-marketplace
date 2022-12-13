import { Home, Layout, Profile } from 'pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
