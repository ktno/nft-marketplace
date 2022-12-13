import {
  Cart,
  Category,
  Hero,
  Personalization,
  Products,
  Promo,
  Specs,
} from 'components'
import { useState } from 'react'

export const Home = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Hero />
      <Promo />
      <Category />
      <Products />
      <Specs />
      <Personalization setOpen={setOpen} />
      <Cart open={open} setOpen={setOpen} />
    </>
  )
}
