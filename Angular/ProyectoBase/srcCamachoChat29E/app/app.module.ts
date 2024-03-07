import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatttttComponent } from './chattttt/chattttt.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ChatComponent } from './chat/chat.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {  MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AdminComponent } from './admin/admin.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { PrivadoComponent } from './privado/privado.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { EnviadosComponent } from './enviados/enviados.component';
import { DestinatariosComponent } from './destinatarios/destinatarios.component';
@NgModule({
  declarations: [
    AppComponent,
    ChatttttComponent,
    ChatComponent,
    RegistroComponent,
    LoginComponent,
    AdminComponent,
    AdminUserComponent,
    PrivadoComponent,
    EnviadosComponent,
    DestinatariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,FormsModule,HttpClientModule,MatSortModule,MatTableModule,
    MatPaginatorModule,MatFormFieldModule,MatInputModule, MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
