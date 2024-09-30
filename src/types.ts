import type { IJobOpening } from './_homework/job-openings'

export interface IDepartmentWithJobs {
  [key: string]: IJobOpening[]
}
