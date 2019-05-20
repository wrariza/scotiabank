import { Observable } from 'rxjs'

export interface IRepository<T> {
  findAll(args?: any): Observable<T[] | any>

  create?(t: T): Observable<T | any>

  update?(t: T): Observable<T | any>

  delete?(t: T): Observable<T | any>
}
