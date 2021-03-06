import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, concat, defer, forkJoin, from, fromEvent, fromEventPattern, interval, merge, Observable, of, partition, race, throwError, timer, zip } from 'rxjs';
import { buffer, bufferTime, catchError, concatMap, debounceTime, delay, endWith, exhaustMap, find, first, map, mapTo, mergeAll, pluck, reduce, sampleTime, scan, single, skip, startWith, switchMap, take, takeWhile, tap, throttleTime, toArray, withLatestFrom } from 'rxjs/operators'

// interface ApiResponse<T> {
//   data : T;
//   isLoading : boolean;
//   error : string;
// }

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    // const observable = new Observable((observer : any) => {
    //   const id = setInterval(() => {
    //     observer.next('Rxjs')
    //   }, 1000)

    //   return function unsubcribe (){
    //     observer.complete();
    //     clearInterval(id)
    //   }
    // });
    
    // let subcription = observable.subscribe({
    //   next : val => console.log(val),
    //   error : err => console.error(err),
    //   complete : () => console.log('Completed!')
    // })

    //add subcription 
    // subcription.add(observable.subscribe(console.log));

    // unsubcribe 
    // setTimeout(() => {
    //   subcription.unsubscribe()
    // }, 1000);

    // observer
    // const observer = {
    //   next : (val: any) => console.log(val),
    //   error : () => console.error(),
    //   complete : () => console.log('complete'),
    // }

    //emit value
    // of('Hello Rxjs').subscribe(observer)

    // Creation Operators

    //from event
    // fromEvent(document, 'click');

    // fromEventPattern

    // fromEventPattern(
    //   (handler) => {
    //     document.addEventListener('click', handler);
    //   },
    //   (handler) => {
    //     document.addEventListener('click', handler);
    //   }
    // ).subscribe(observer)

    // internal

    // interval(1000); // = setInterval

    // timer(1000).subscribe(observer); // = timeout

    // throwError('error').subscribe(observer); 

    //throw error
    // apiCall.pipe(
    //   catchError(error => {
    //   const err = createEx(err)
    //     return throwError(err)
    //   })
    // )

    // defer
    // cho m???i subcribe t???o 1 observer m???i

    // => mu???n c?? gi?? tr??? m???i khi retry 1 api n??o ????
    // const random$ = defer(() => {
    //   of(Math.random());
    // }) 

    // random$.subscribe(observer);
    // random$.subscribe(observer);
    // random$.subscribe(observer);

    // defer(() => {
    //   return hasId ? api1 : api2 
    // })

    // this.transformOperator()
    // this.filterOperator()
    // this.combinationOperators()
    // this.handlingOperators()
    this.higherOrderObservable()
  } 


  transformOperator(){
    //Transformation Operator
    const observer = {
      next : (val: any) => console.log(val, 'transformOperator'),
      error : () => console.error(),
      complete : () => console.log('complete'),
    }

    const users = [
      {id : 1, age : 18 , name : 'A'},
      {id : 2, age : 19 , name : 'B'}
    ]
  
    const usersvm = users.map(user => {
      return {
        ...user,
        infor : `${user.name} ${user.age}`
      }
    })

    // map rxjs
    // 'of' emit to??n arr
    // 'from' emit t???ng ph???n t???
    of(users)
    .pipe(
      map(data => {
        console.log('inside map', data);
        return data
      })
    ).subscribe(observer);

    // output: 'h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd'
    // complete: 'complete'
    from('hello world').subscribe(observer);

    // merge 
    merge(
      of(users[0]).pipe(delay(2000)),
      of(users[1]).pipe(delay(4000))
    ).pipe(
      map(user => ({
        ...user, infor : `${user.name} ${user.age}`
      }))
    ).subscribe(observer);

    //pluck 
    const param$ = of({name : 'A', age : 3})
    const id$ = param$.pipe(pluck('foo', 'bar')).subscribe(observer)

    //mapTo
    merge(
      fromEvent(document, 'mouseenter').pipe(mapTo(true)),
      fromEvent(document, 'mouseleave').pipe(mapTo(false))
    )

    //reduce
    const totalCount$ = merge(
      of(users[0]).pipe(delay(2000)),
      of(users[1]).pipe(delay(4000))
    ).pipe(reduce((acc, cur) => acc + cur.age, 0))

    //toArray 
    const users$ = merge(
      of(users[0]).pipe(delay(2000)),
      of(users[1]).pipe(delay(4000))
    ).pipe(toArray()).subscribe(observer)

    //buffer
    const source$ = interval(1000);
    const click$ = fromEvent(document, 'click');

    source$.pipe(buffer(click$));

    //buffer time
    source$.pipe(bufferTime(1000));

    //scan 
    totalCount$.pipe(scan((acc, cur) => acc + cur, 0));

    const initalState = {};

    const stateSubject = new BehaviorSubject(initalState);

    const state$ = stateSubject
                   .asObservable()
                   .pipe(scan((state, patialState) => ({...state, ...patialState}), {}));
    state$.subscribe(observer);

    stateSubject.next({name : 'A'});
  }

  filterOperator(){
    // Filtering Operators
    const observer = {
      next : (val: any) => console.log(val, 'filterOperator'),
      error : () => console.error(),
      complete : () => console.log('complete'),
    }

    const items = [1, 2, 3, 4, 5, 6];

    //first as last
    from(items).pipe(
      first(x => x > 7)
    ).subscribe(observer);

    //find 
    from(items).pipe(
      find(x => x > 5)
    ).subscribe(observer);

    //single
    from(items).pipe(
      single(x => x > 4)
    );

    // take
    interval(1000).pipe(
      take(3)
    ).subscribe(observer)

    // takeWhile
    interval(1000).pipe(takeWhile(x => x < 10));

    //skip
    interval(1000).pipe(skip(5));

    // sampletime
    interval(1000).pipe(
      sampleTime(1500)
    )

    //throtle time
    fromEvent(document, 'mousemove').pipe(
      throttleTime(1500)
    ).subscribe(observer)

    // debounceTime => Khi ng?????i d??ng d???ng g?? th?? m???i call api
    const queryInput = document.querySelector("#queryInput");
    fromEvent(document, 'keydown').pipe(
      debounceTime(1500),
      pluck('target', 'value')
    ).subscribe(observer)
  }

  combinationOperators(){
    // combinationOperators
    const observer = {
      next : (val: any) => console.log(val, 'Combination Operators'),
      error : () => console.error(),
      complete : () => console.log('complete'),
    }

    // forkjoin nh?? promiseAll nh???n v??o 1 list Observable n???u 1 trong s??? c??c Observable kh??ng complete => forkjoin kh??ng th??? emit
    forkJoin([
      of('hello').pipe(delay(1000)),
      of('hello').pipe(delay(1000)),
      interval(1000).pipe(take(2)).subscribe(observer)
    ]);

    //combineLatest
    combineLatest([
      interval(2000).pipe(map((x) => `First ${x}`)),
      interval(1000).pipe(map((x) => `First ${x}`)),
      interval(1000).pipe(map((x) => `First ${x}`))
    ]);

    //zip
    zip(of(1, 2, 3), of(4, 5, 6), of(7, 8, 9));

    const age$ = of<number>(1, 2, 3);
    const name$ = of<string>('A', 'B', 'C');
    const isAdmin$ = of<boolean>(true, false, true);

    // zip(age$, name$, isAdmin$).pipe(
    //   map(([age, name, isAdmin]) => ({age, name, isAdmin}))
    // ).subscribe(observer)

    interval(5000).pipe(() =>
      zip(age$, name$, isAdmin$)
    ).subscribe(observer)

    zip(fromEvent(document, 'mousedown'), fromEvent(document, 'mouseup'));

    //concat
    concat(
      interval(1000).pipe(take(3)),
      interval(500).pipe(take(5))
    ).subscribe(observer)
  
    //merge
    merge(
      interval(1000).pipe(take(3), map(x => `frist ${x}`)),
      interval(500).pipe(take(3), map(x => `second ${x}`))
    )

    //race => quan t??m th???ng n??o ch???y nhanh 
    race(
      interval(1000).pipe(take(3), map(x => `frist ${x}`)),
      interval(100).pipe(take(3), map(x => `second ${x}`))
    ).subscribe(observer);

    //withLatestFrom
    const withLatestFrom$ = interval(1000).pipe(map(x => `test click with latest from value : ${x}`));
    fromEvent(document, 'click').pipe(withLatestFrom(withLatestFrom$)).subscribe(observer)

    //startWith
    of('World').pipe(startWith('Hello')).subscribe(observer)
  
    //endWith
    of('Hello').pipe(endWith('World')).subscribe(observer);
  }

  getApiResponse<T>(apiCall : Observable<T>) : Observable<any> {
    return apiCall.pipe(
      map(data => ({isLoading : false, data, error: ''})),
      startWith({isLoading : true, data : null, error : ''}),
      catchError(err => of({isLoading : false, data: null, error : err.message}))
    )
  }

  //Handling Operators
  handlingOperators(){

  }

  higherOrderObservable(){
    // switchMap => Ch??? n??n d??ng cho vi???c get d??? li???u => Create, Delete, Update => n??n d??ng mergeMap, concatMap
    // this.queryInput.valueChanges.pipe(debounceTime(500)).subscribe((query) => {
    //   this.apiService.filterData(query).subscribe((data) => {
    //     /*...*/
    //   });
    // });  // Tr??nh tr?????ng h???p subscribe-in-subscribe

    // S??? d???ng ======================>
    // this.queryInput.valueChanges
    //   .pipe(
    //     debounceTime(500),
    //     switchMap((query) => this.apiService.filterData(query))
    //   )
    //   .subscribe((data) => {
    //     /*...*/
    //   });

    // operator timeout() ho???c k???t h???p takeUntil v?? timer nh?? sau: takeUntil(timer(10000)) ????? h???y n???u api tr??? v??? qu?? l??u 
  
    const hoo = fromEvent(document, 'click') //parent observable
      .pipe(map(val => interval(1000).pipe(take(2))), mergeAll(1));  //children observable

      //concatAll => gi???ng mergeAll v???i concurrent l?? 1 t???c l?? ?????n khi subscribe xong th?? m???i ch???y c??i ti???p theo   |
      //mergeAll  => n???u kh??ng truy???n concurrent th?? s??? subscribe v??o to??n b??? observable                      |            => subscribe v??o interval
      //switchALl => n???u ??ang subscrible 1 inner observalbe c?? 1 innner observalbe m???i th?? unsubcribe th???ng c??|
    
      // concatMap = concatAll + map
      // mergeMap = merge + map
      // switchMap = switchAll + map 

      // exhaustMap => Ch??? l???y subscribe l???n ?????u ti??n

    hoo.subscribe(console.log)


    //tap
    const interval$ = interval(1000);

    const [event$, odd$] = partition(interval$, val => val % 2 === 0);

    event$.pipe(
      tap(val => console.log('before map', val)),
      map(val => console.log(val)),                      //=> debug value ho???c th???c hi???n nhi???m v??? kh??ng li??n quan ?????n observable 
      tap(val => console.log('after map',val))
    ).subscribe(console.log)
  }


  RxJSSubjectsandMulticast(){

  }

}
