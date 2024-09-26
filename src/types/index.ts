export type TRoles = 'Admin' | 'User' | 'none'

export interface IContact {
  id: number
  name: string
  description: string
  role: TRoles
  image?: string
}

export type TSort = 'asc' | 'desc' | 'none'

export interface IFilters {
  query: string
  sort: TSort
  filterByRole: TRoles
}
