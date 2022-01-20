import App from './App.svelte';
import type { PartialStyles } from './style-config';

const styles: PartialStyles = {
  theme: {
    p: {
      base: {
        color: 'red',
      },
      ":hover": {
        color: 'blue'
      }
    }
  }
}

const app = new App({
	target: document.body,
	props: {
		name: 'world',
    styles,
	}
});

export default app;
