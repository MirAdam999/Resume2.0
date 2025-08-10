import { Montserrat, Barlow, Satisfy } from 'next/font/google'

export const wide_font = Montserrat({
    subsets: ['latin'],
    weight: ['400']
})

export const norm_font = Barlow({
    subsets: ['latin'],
    weight: ['400']
})

export const norm_font_fat = Barlow({
    subsets: ['latin'],
    weight: ['700']
})

export const handwriting = Satisfy({
    subsets: ['latin'],
    weight: ['400']
})