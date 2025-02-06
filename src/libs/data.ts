import type { jobType } from '@/types/__jobs'
import defData from './db/jobs.json'

export class LocalDb {
  storeName: string
  defaultStoreName = 'db'
  jobsData: jobType[]
  initialData: jobType[] = defData.jobs
  constructor(storeName?: string) {
    this.storeName = storeName || this.defaultStoreName

    this.jobsData = this.init()
  }

  init() {
    // clear previous db store
    if (this.storeName !== this.defaultStoreName) {
      localStorage.removeItem(this.defaultStoreName)
    }
    const localDBData = localStorage.getItem(this.storeName)

    if (!localDBData) {
      localStorage.setItem(this.storeName, JSON.stringify(this.initialData))
      this.jobsData = this.initialData
    } else {
      this.jobsData = JSON.parse(localDBData)
    }
    return this.jobsData
  }

  update(updateData: jobType) {
    this.jobsData = this.jobsData.filter((data) => data.id !== updateData.id)
    this.add(updateData)
  }
  delete(id: number) {
    this.jobsData = this.jobsData.filter((data) => data.id !== id)
    this.updateLS()
  }

  add(data: jobType) {
    this.jobsData = [...this.jobsData, data]
    this.updateLS()
  }

  /** to update the local storage */
  updateLS() {
    const sortedData = this.jobsData.sort((a, b) => a.id - b.id)
    localStorage.setItem(this.storeName, JSON.stringify(sortedData))
  }

  get() {
    return this.jobsData
  }
  getById(id: number) {
    return this.jobsData.find((data) => data.id == id)
  }
}

export const db = new LocalDb('database')
