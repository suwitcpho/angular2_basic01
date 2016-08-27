import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import {RouteConfig, RouterLink, Router} from '@angular/router-deprecated';
@Component({
  selector: 'my-app',
  styles: [`
  h1 {
    color:#545454;
    background:#02A8F4;
    padding:15px;
    box-shadow:2px 2px 2px 0 rgba(0, 0, 0, 0.3);
  }
  `]
  template: `
  <header id="header" >
			<div class="headerbar">
				<!-- Brand and toggle get grouped for better mobile display -->
				<div class="headerbar-left">
					<ul class="header-nav header-nav-options">
						<li class="header-nav-brand" >
							<div class="brand-holder">
								<a href="index.php?r=app/home">
									<span class="text-lg text-bold text-primary">ความรู้พื้นฐาน AngularJS 2 Basic 01  </span>
								</a>
							</div>
						</li>
						<li>
							<a class="btn btn-icon-toggle menubar-toggle" data-toggle="menubar" href="javascript:void(0);">
								<i class="fa fa-bars"></i>
							</a>
						</li>
					</ul>
				</div>
				<!-- Collect the nav links, forms, and other content for toggling -->
				<div class="headerbar-right">
					<ul class="header-nav header-nav-options">




					</ul>
				</div>
			</div>
		</header>
		<div id="base">


			<div class="offcanvas">
			</div>
			<div id="content">
				<section>
					<div class="section-body"><!--end .row --><!--end .row -->
						<div class="row">
						<div class="col-md-12">
      {{header}}
	 <input type="text" #input (keyup)="my(input.value)">
	 {{result}}
    </div>
						</div>
					</div>
				</section>
			</div>
			<div id="menubar" class="menubar-inverse ">
				<div class="menubar-fixed-panel">
					<div>
						<a class="btn btn-icon-toggle btn-default menubar-toggle" data-toggle="menubar" href="javascript:void(0);">
							<i class="fa fa-bars"></i>
						</a>
					</div>
					<div class="expanded">
						<a href="">
							<span class="text-lg text-bold text-primary ">MATERIAL&nbsp;ADMIN</span>
						</a>
					</div>
				</div>
				<div class="menubar-scroll-panel">
					<ul id="main-menu" class="gui-controls">
						<li>
							<a href="index.php?r=app/home" class="active">
								<div class="gui-icon"><i class="md md-home"></i></div>
								<span class="title">Home</span>
							</a>
						</li>
					</ul>
					<div class="menubar-foot-panel">
						<small class="no-linebreak hidden-folded">
							<span class="opacity-75">basic Angular JS 2</span> <strong>#</strong>
						</small>
					</div>
				</div>
			</div>
		</div>
  `
})
// <my-friends></my-friends>
export class AppComponent {
	result:any;
	my(value){
		this.result=value;
	}
  header:string='Angular2 Basic 01';
  constructor(){

  }
  }
bootstrap(AppComponent)

