"use strict";(self.webpackChunkmeanstack=self.webpackChunkmeanstack||[]).push([[137],{2137:(N,c,a)=>{a.r(c),a.d(c,{AuthModule:()=>F});var m=a(6895),i=a(433),v=a(8468),l=a(6239),t=a(1571),g=a(384),u=a(9549),d=a(4144),f=a(3546),h=a(4859),_=a(1572);function S(n,e){1&n&&t._UZ(0,"mat-spinner")}function Z(n,e){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Please enter a valid email."),t.qZA())}function A(n,e){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Please enter a valid password."),t.qZA())}function C(n,e){1&n&&(t.TgZ(0,"button",9),t._uU(1,"Login"),t.qZA())}function T(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"form",2,3),t.NdJ("submit",function(){t.CHM(o);const s=t.MAs(1),p=t.oxw();return t.KtG(p.onLogin(s))}),t.TgZ(2,"mat-form-field"),t._UZ(3,"input",4,5),t.YNc(5,Z,2,0,"mat-error",0),t.qZA(),t.TgZ(6,"mat-form-field"),t._UZ(7,"input",6,7),t.YNc(9,A,2,0,"mat-error",0),t.qZA(),t.YNc(10,C,2,0,"button",8),t.qZA()}if(2&n){const o=t.MAs(4),r=t.MAs(8),s=t.oxw();t.xp6(5),t.Q6J("ngIf",o.invalid),t.xp6(4),t.Q6J("ngIf",r.invalid),t.xp6(1),t.Q6J("ngIf",!s.isLoading)}}function M(n,e){1&n&&t._UZ(0,"mat-spinner")}function I(n,e){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Please enter a valid email."),t.qZA())}function b(n,e){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Please enter a valid password."),t.qZA())}function x(n,e){1&n&&(t.TgZ(0,"button",9),t._uU(1,"Signup"),t.qZA())}function y(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"form",2,3),t.NdJ("submit",function(){t.CHM(o);const s=t.MAs(1),p=t.oxw();return t.KtG(p.onSignup(s))}),t.TgZ(2,"mat-form-field"),t._UZ(3,"input",4,5),t.YNc(5,I,2,0,"mat-error",0),t.qZA(),t.TgZ(6,"mat-form-field"),t._UZ(7,"input",6,7),t.YNc(9,b,2,0,"mat-error",0),t.qZA(),t.YNc(10,x,2,0,"button",8),t.qZA()}if(2&n){const o=t.MAs(4),r=t.MAs(8),s=t.oxw();t.xp6(5),t.Q6J("ngIf",o.invalid),t.xp6(4),t.Q6J("ngIf",r.invalid),t.xp6(1),t.Q6J("ngIf",!s.isLoading)}}const J=[{path:"login",component:(()=>{class n{constructor(o){this.authService=o,this.isLoading=!1}ngOnInit(){this.authStatusSub=this.authService.getAuthStatusListener().subscribe(o=>{this.isLoading=!1})}onLogin(o){o.invalid||(this.isLoading=!0,this.authService.login(o.value.email,o.value.password))}ngOnDestroy(){this.authStatusSub.unsubscribe()}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(g.e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:3,vars:2,consts:[[4,"ngIf"],[3,"submit",4,"ngIf"],[3,"submit"],["loginForm","ngForm"],["matInput","","name","email","ngModel","","type","email","placeholder","E-Mail","required","","email",""],["emailInput","ngModel"],["type","password","name","password","ngModel","","matInput","","placeholder","Password","required",""],["passwordInput","ngModel"],["mat-raised-button","","color","accent","type","submit",4,"ngIf"],["mat-raised-button","","color","accent","type","submit"]],template:function(o,r){1&o&&(t.TgZ(0,"mat-card"),t.YNc(1,S,1,0,"mat-spinner",0),t.YNc(2,T,11,3,"form",1),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngIf",r.isLoading),t.xp6(1),t.Q6J("ngIf",!r.isLoading))},dependencies:[m.O5,u.TO,u.KE,d.Nt,f.a8,h.lW,_.Ou,i._Y,i.Fj,i.JJ,i.JL,i.Q7,i.on,i.On,i.F],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}mat-spinner[_ngcontent-%COMP%]{margin:auto}"]}),n})()},{path:"signup",component:(()=>{class n{constructor(o){this.authService=o,this.isLoading=!1}ngOnInit(){this.authStatusSub=this.authService.getAuthStatusListener().subscribe(o=>{this.isLoading=!1})}onSignup(o){o.invalid||(this.isLoading=!0,this.authService.createUser(o.value.email,o.value.password))}ngOnDestroy(){this.authStatusSub.unsubscribe()}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(g.e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:3,vars:2,consts:[[4,"ngIf"],[3,"submit",4,"ngIf"],[3,"submit"],["signupForm","ngForm"],["matInput","","name","email","ngModel","","type","email","placeholder","E-Mail","required","","email",""],["emailInput","ngModel"],["type","password","name","password","ngModel","","matInput","","placeholder","Password","required",""],["passwordInput","ngModel"],["mat-raised-button","","color","accent","type","submit",4,"ngIf"],["mat-raised-button","","color","accent","type","submit"]],template:function(o,r){1&o&&(t.TgZ(0,"mat-card"),t.YNc(1,M,1,0,"mat-spinner",0),t.YNc(2,y,11,3,"form",1),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngIf",r.isLoading),t.xp6(1),t.Q6J("ngIf",!r.isLoading))},dependencies:[m.O5,u.TO,u.KE,d.Nt,f.a8,h.lW,_.Ou,i._Y,i.Fj,i.JJ,i.JL,i.Q7,i.on,i.On,i.F],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}mat-spinner[_ngcontent-%COMP%]{margin:auto}"]}),n})()}];let O=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.Bz.forChild(J),l.Bz]}),n})(),F=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[m.ez,v.h,i.u5,O]}),n})()}}]);