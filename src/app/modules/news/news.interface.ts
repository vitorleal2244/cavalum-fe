import { NgIterable } from '@angular/core'

export interface News {
  id: number
  title: string
  subtitle: string
  description: string
  date: Date
  tags: undefined | NgIterable<string> | Array<string>
}

export interface LastNews {
  id: number
  title: string
  date: string
  image: string
}
