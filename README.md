### Init guide

1. Clone the repo in your local machine

2. Install dependencies

```bash
npm install 
```

3. Run project

```bash
npm run dev
```

4. Open in browser tab !!

[http://localhost:5173/](http://localhost:5173/)


There's really no need to learn Svelte, I just choosed it because we can 
work in a modular way, creating components and having logic in the component level
+ svelte give us some cool tools

This project also uses TailwindCSS for working with the styling, there's really no need
to write +200 lines of CSS, it uses a system of classes, it doesn't mean that css is 
disable, we can still use it, the same as with js.

The components will be written in [./src/lib/](./src/lib/), 
if we want to add reactivity we can do that with stores, 
*an example can be found in this folder [here](./src/lib/Counter.svelte)* also
Typescript, no need to explain.

using these types of "frameworks" is better to work in vanilla js and css, it can be overwellming 
conflicting css classes and js..., with components the css is completetly isolated, no need to worry,
and svelte does a lot of the heavy weigths.


