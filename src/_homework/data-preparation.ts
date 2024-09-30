import { departments } from '@/_homework/departments'
import { jobOpenings } from '@/_homework/job-openings'

class DepartmentsOpeningJobs {
  allDeparments = departments
  openJobs = jobOpenings

  createdHashedJobs () {
    return this.openJobs.reduce((acc: any, curr) => {
      for (const department of curr.departments) {
        if (!acc[department]) {
          acc[department] = [curr]
        } else {
          acc[department].push(curr)
        }
      }

      if (curr.departments.length === 0) {
        if (acc.other) {
          acc.other.push(curr)
        } else {
          acc.other = [curr]
        }
      }
      return acc
    }, {})
  }

  getDepartmentsWithJobs () {
    const departments = this.createdHashedJobs()
    return this.allDeparments.filter(department => departments[department.value])
  }
}

export const depatmentsWithJobs = new DepartmentsOpeningJobs()
