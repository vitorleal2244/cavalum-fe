import { NgIterable } from '@angular/core'

export interface Trail {
  id: number
  name: string
  information: string
  description: string
  address: string
  city: string
  image: string
  length: string
  elevationGain: number
  routeType: string
  tags: string | NgIterable<string>
}
