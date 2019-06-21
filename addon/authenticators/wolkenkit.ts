import { inject as service } from '@ember/service';
import Base from 'ember-simple-auth/authenticators/base';
import WolkenkitService from 'ember-wolkenkit/services/wolkenkit';

export default class WolkenkitAuthenticator extends Base {
	@service wolkenkit!: WolkenkitService;

	restore() {
		return new Promise((resolve, reject) => {
			if (this.wolkenkit.auth.isLoggedIn()) {
				resolve({
					token: this.wolkenkit.auth.getToken()
				});
			} else {
				reject();
			}
		});
	}

	authenticate(...args: any[]) {
		this.wolkenkit.auth.login(...args);
		return Promise.resolve();
	}

	invalidate() {
		this.wolkenkit.auth.logout();
		return Promise.resolve();
	}
}
