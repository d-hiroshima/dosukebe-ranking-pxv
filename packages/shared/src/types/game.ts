export interface Game {
  id: string
  title: string
  description?: string
  imageUrl?: string
  createdAt: Date
  updatedAt: Date
}

export interface CreateGameDto {
  title: string
  description?: string
  imageUrl?: string
}

export interface UpdateGameDto {
  title?: string
  description?: string
  imageUrl?: string
}