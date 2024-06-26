import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MouseResponseDto } from '../models/mouse-response-dto';
import { MouseRequestDto } from '../models/mouse-request-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MouseService {

  constructor(private httpClient: HttpClient) { }

  public get(): Observable<MouseResponseDto[]>{
    return this.httpClient.get<MouseResponseDto[]>('http://localhost:5209/api/Mouse');
  }

  public post(body: MouseRequestDto): Observable<void> {
    return this.httpClient.post<void>('http://localhost:5209/api/Mouse', body);
  }

  public delete(id: number): Observable<void>{
    return this.httpClient.delete<void>('http://localhost:5209/api/Mouse/' + id);
  }
}
