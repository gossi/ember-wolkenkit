declare module 'ember-wolkenkit/types/registries/model' {
  import Model from 'ember-wolkenkit/src/data/models/model';

  export default interface ModelRegistry {
		[key: string]: Model;
	}
}
