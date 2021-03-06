import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule, FormGroupDirective } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from 'src/app/authentication.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterserviceService } from 'src/app/routerservice.service';

  describe('RegisterComponent', () => {
    let component: RegisterComponent;
    let fixture: ComponentFixture<RegisterComponent>;
    let authService: AuthenticationService;
    let routerService: RouterserviceService;
    let mySpy: any;
    let regComponent: RegisterComponent;
    let obj: FormGroupDirective;
    beforeEach(async(() => {
      TestBed.configureTestingModule({
          declarations: [RegisterComponent],
          imports: [ReactiveFormsModule,
              BrowserAnimationsModule,
              FormsModule,
              RouterTestingModule,
              MatCardModule,
              HttpClientModule,
             ReactiveFormsModule,
              HttpClientTestingModule,
          ],
          providers: [AuthenticationService, RouterserviceService]
      })
          .compileComponents();
        }));
          beforeEach(() => {
            fixture = TestBed.createComponent(RegisterComponent);
            component = fixture.componentInstance;
            authService = TestBed.get(AuthenticationService);
            routerService = TestBed.get(RouterserviceService);
            fixture.detectChanges();
          });
          it('should create', async() => {
            expect(component).toBeTruthy();
          });
          it('should set submitted to true', async(() => {
            component.registerform;
            expect(component.registerform).toBeTruthy();
          }));
          it('should contain div tag', () => {
            let element = fixture.debugElement.query(By.css('div'));
            expect(element).toBeTruthy();
          });
          it('form invalid when email is empty', () => {
            expect(component.username.valid).toBeFalsy();
          });
          it('form invalid when password is empty', () => {
            expect(component.password.valid).toBeFalsy();
          });
          it('form should be invalid when the fields are left empty', async(() => {
            expect(component.username.valid).toBeFalsy();
            expect(component.password.valid).toBeFalsy();
          }));
          it('should handle call registerSubmit method', () => {
            inject([authService], (injectService: AuthenticationService) => {
              expect(injectService).toBe(authService);
            });
            let check: any;
            mySpy = spyOn(authService, 'setBearerToken').and.callFake(() => { });           
        authService.setBearerToken('');
          expect(mySpy).toHaveBeenCalled();
     });
 });