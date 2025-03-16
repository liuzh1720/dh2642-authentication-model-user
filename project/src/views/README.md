Authentication views are independent on the actual authentication layer used (Firebase or whatever else)

They are also UI framework indepndent (React, Vue...). Work with any JSX framework

You can easily write React Native authentication views, the presenters do not change!

TODO: render the login error (from a prop). if the error prop is truthy, use its toString() method