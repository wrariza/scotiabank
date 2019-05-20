import { Observable } from 'rxjs'

export interface IService<T> {
  findAll?(args?: any): Observable<T[] | any>

  create?(t: T): Observable<T>

  update?(t: T): Observable<T>

  delete?(t: T): Observable<T>
}
