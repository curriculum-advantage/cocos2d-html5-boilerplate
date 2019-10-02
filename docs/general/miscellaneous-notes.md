# Miscellaneous Notes

## Text Inputs

- It's recommended that you use the `Input` wrapper that was added to `cocos-extended`, which makes use of `cc.EditBox`. Feel free to review the `Input` source code to see what's possible. Take a look at [this additional documentation](./miscellaneous/text-inputs.md) if you'd like to learn more about text inputs in Cocos.

## Audio

- Due to deficiencies in the built-in cc.audioEngine, we use a third party library - Howler.js, managed by class `AudioManager`.  This allows us to make use of completion events, among other things.

## Integration Testing

- In order to facilitate Selenium testing of our templates, each Scene should call DebugUtils' `markDebugLoaded()` when loaded (ie end of constructor) and `updateDebugScore(this.scores)` on score change.

## Cocos Framework Modifications

- An bug exist in the core framework files which prevent auto resize when the resizeWithBrowserSize is set to true.
In order to fix, change value of the field `_orientationChanging` from `true` to `false` in the `CCEGLView.js`
- Inside of `CCBoot.js` we've increased `xhr.timeout` from 10 seconds to 60 seconds in order to prevent texture errors on slow connections (resource downloads were being cancelled too early, making the plist unavailable).
- Inside of `CCBoot.js` and `BinaryLoader.js`, `xhr.timeout`/`req.timeout` were moved to after `xhr.open` in order to prevent an `InvalidStateError` in IE11.
- There were additional changes previously made to the framework, [found here](https://github.com/ClayAtCW/cocos2d-html5/commit/3c76ca18d1e38aef808a447a6f92f914e5a47b42). However, many of these changes were breaking other areas of the games, and with the changes not being documented, it's not clear what the purpose of those changes were.
