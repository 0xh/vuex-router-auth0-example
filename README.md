# vuex-router-auth-example

Example [Stamplay App][3] with Vuex + Vue-router *(2.0)* using 
 
  1. [Auth0][0]
  2. Relational objects (Master -> children)
  

## Build Setup

 - Create a [Stamplay app][3] 
 - Add [events][1] and [schedules][2] objects
 - [Configure Auth0][0] authentication
 - Clone this project

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:4200
npm run dev

# serve stamplay
npm run stamplay
```

### Deploy

This will deploy to your Stamplay app

```bash
# build for production with minification
npm run deploy
```

[0]: http://docs.stamplay.com/?lang=shell#auth0
[1]: http://i.imgur.com/hH7HVGI.png
[2]: http://i.imgur.com/PEgvZ0J.png
[3]: https://editor.stamplay.com/register?refCode=946b096a
