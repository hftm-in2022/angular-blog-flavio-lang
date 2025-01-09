import { PassedInitialConfig } from 'angular-auth-oidc-client';
import { environment } from 'src/environments/environment';

export const authConfig: PassedInitialConfig = {
  config: {
    authority: environment.authUrl,
    redirectUrl: window.location.origin,
    postLogoutRedirectUri: window.location.origin,
    clientId: 'spa-blog',
    scope: 'openid profile email offline_access blogs', // 'openid profile ' + your scopes
    responseType: 'code',
    silentRenew: true,
    silentRenewUrl: window.location.origin + '/silent-renew.html',
    renewTimeBeforeTokenExpiresInSeconds: 10,
  },
};

// import { PassedInitialConfig } from 'angular-auth-oidc-client';

// export const authConfig: PassedInitialConfig = {
//   config: {
//             authority: 'https://login.microsoftonline.com/https://keycloak.azure-instance.com/realms/hftm-realm/v2.0',
//             authWellknownEndpointUrl: 'https://login.microsoftonline.com/common/v2.0',
//             redirectUrl: window.location.origin,
//             clientId: 'please-enter-clientId',
//             scope: 'please-enter-scopes', // 'openid profile offline_access ' + your scopes
//             responseType: 'code',
//             silentRenew: true,
//             useRefreshToken: true,
//             maxIdTokenIatOffsetAllowedInSeconds: 600,
//             issValidationOff: false,
//             autoUserInfo: false,
//             customParamsAuthRequest: {
//               prompt: 'select_account', // login, consent
//             },
//     }
// }
