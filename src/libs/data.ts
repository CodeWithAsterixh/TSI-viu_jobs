import type { jobType } from '@/types/__jobs'
import defData from '@/assets/data/jobs.json'

export class Datas {
  storageName: string
  datas: jobType[]
  initialData: jobType[] = defData.jobs
  constructor(storageName = 'db') {
    this.storageName = storageName
    this.datas = this.init()
  }

  init() {
    const localDb = localStorage.getItem(this.storageName)
    if (!localDb) {
      localStorage.setItem(this.storageName, JSON.stringify(this.initialData))
      this.datas = this.initialData
    } else {
      this.datas = JSON.parse(localDb)
    }
    return this.datas
  }

  update(updateData: jobType) {
    this.datas = this.datas.filter((data) => data.id !== updateData.id)
    this.add(updateData)
  }
  delete(id: number) {
    this.datas = this.datas.filter((data) => data.id !== id)
    this.updateLc()
  }

  add(data: jobType) {
    this.datas = [...this.datas, data]
    this.updateLc()
  }

  /** to update the local storage */
  updateLc() {
    const sortedData = this.datas.sort((a,b) =>a.id - b.id )
    localStorage.setItem(this.storageName, JSON.stringify(sortedData))
  }

  get() {
    return this.datas
  }
  getById(id: number) {
    return this.datas.find((data) => data.id == id)
  }
}

export const db = new Datas()
