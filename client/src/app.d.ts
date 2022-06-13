/// <reference types="@sveltejs/kit" />

declare type SearchQuery = {
  after: string,
  before: string,
  searchTerm: string,
  lat: string,
  lng: string
}

declare type Venue = {
  _id: string
  organizer: string
  name: string
  slug: string
  description: string
  location: {
    country: string | undefined
    city: string | undefined
    postalCode: string | undefined
    address: string | undefined
    entrance: string | undefined
    entranceCoordinates: string | undefined
    additionalInfo: string | undefined
  }
  createdAt: string
  updatedAt: string
}

declare type VenueEvent = {
  _id: string
  name: string
  slug: string
  description: string
  imageUrl: string
  videoId?: string
  startsAt: string
  endsAt?: string
  venue: Venue
  hall: string
  createdAt: string
  updatedAt: string
}

declare type Seat = {
  _id: string
  name: string
}

declare type User = {
  id: string
  role: number
}

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
  // interface Locals {}
  // interface Platform {}
  interface Session {
    user: User | null
  }
  // interface Stuff {}
}
