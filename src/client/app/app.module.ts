import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import {
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatIconModule,
  MatCardModule,
  MatMenuModule,
} from '@angular/material'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { routing } from './app.routing'
import { ScotiBankModule } from './scotibank/scotibank.module'
import { reducers } from './store/index.store'
import { StoreModule } from '@ngrx/store'
import { ClientsEffects } from './store/clients/clients.effects'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

@NgModule({
  declarations: [AppComponent],
  imports: [
    routing,
    BrowserModule,
    AppRoutingModule,
    ScotiBankModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ClientsEffects]),
    StoreDevtoolsModule.instrument(),
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
