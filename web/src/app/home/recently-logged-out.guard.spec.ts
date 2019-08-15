// import { TestBed } from '@angular/core/testing';
// import { provideMockStore } from '@ngrx/store/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { RecentlyLoggedOutGuard } from './recently-logged-out.guard';
// import { HomeRoutingService } from './home-routing.service';

// TODO: will need to revisit when actual DI system implemented
// describe('RecentlyLoggedOutGuard', () => {
//   it('can activate if recently logged out', done => {
//     TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule,
//       ],
//       providers: [
//         provideMockStore({ initialState: { recentlyLoggedOut: true } }),
//         HomeRoutingService,
//         RecentlyLoggedOutGuard,
//       ],
//     });

//     const guard = TestBed.get(RecentlyLoggedOutGuard) as RecentlyLoggedOutGuard;

//     guard.canActivate().subscribe(canActivate => {
//       expect(canActivate).toBe(true);
//       done();
//     });
//   });

//   it('can\'t activate if haven\'t recently logged out', done => {
//     TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule,
//       ],
//       providers: [
//         provideMockStore({ initialState: { recentlyLoggedOut: false } }),
//         HomeRoutingService,
//         RecentlyLoggedOutGuard,
//       ],
//     });

//     const guard = TestBed.get(RecentlyLoggedOutGuard) as RecentlyLoggedOutGuard;

//     guard.canActivate().subscribe(canActivate => {
//       expect(canActivate).toBe(false);
//       done();
//     });
//   });

//   it('tries to navigate to home if haven\'t recently logged out', done => {
//     TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule,
//       ],
//       providers: [
//         provideMockStore({ initialState: { recentlyLoggedOut: false } }),
//         HomeRoutingService,
//         RecentlyLoggedOutGuard,
//       ],
//     });

//     const guard = TestBed.get(RecentlyLoggedOutGuard) as RecentlyLoggedOutGuard;
//     const homeRoutingService = TestBed.get(HomeRoutingService) as HomeRoutingService;
//     spyOn(homeRoutingService, 'goHome');
    
//     guard.canActivate().subscribe(() => {
//       expect(homeRoutingService.goHome).toHaveBeenCalledTimes(1);
//       done();
//     });
//   })
// });