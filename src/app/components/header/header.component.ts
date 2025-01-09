import { Component, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  authenticated = signal<boolean>(false);
  userName = signal<string>('');
  canAddBlogs = signal<boolean>(false);

  constructor(
    private oidcSecurityService: OidcSecurityService,
    private userService: UserService,
  ) {
    this.oidcSecurityService.checkAuth().subscribe((res) => {
      this.authenticated.set(res.isAuthenticated);

      if (res.isAuthenticated) {
        this.userName.set(res.userData.email);
        this.oidcSecurityService.getAccessToken().subscribe((accessToken) => {
          this.canAddBlogs.set(this.userService.hasRole(accessToken, 'user'));
        });
      }
    });
  }

  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    this.oidcSecurityService.logoff().subscribe();
  }
}
