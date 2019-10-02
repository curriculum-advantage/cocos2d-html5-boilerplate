# Text Inputs

There are currently three ways to add inputs with Cocos: `cc.EditBox`, `ccui.TextField`, and `cc.TextFieldTTF`. As of today, `cc.EditBox` is the most robust solution, with both `ccui.TextField` and `cc.TextFieldTTF` apparently being phased out. Documentation is currently outdated, so it's recommmended that you dig into the Cocos source code to get an idea of what the full feature set is like for each of these solutions.

`cc.EditBox`:

- Some features of EditBox may not be wanted (cursor that can't be changed), scroll bars on IE11, etc. In this case, it's recommended that you still use the Input to capture events and trigger the virtual keyboard, but hide it with a size of 0, and then use a label to display the text.
- Text can not be aligned/centered.
- Tabbing (via the tabIndex property) only works once. And keyboard events are swallowed by the input when focused, with no option to detect tab. However, tab can be detected with a keyboard listener when the input is not focused. There is an updated event listener (editBoxEditingDidEndWithAction) that allows for tab detection, but it's only available in Cocos Creator (we use Cocos2d-html).
- Some missing features, but most everything can be worked around (see beehive fraction keyboard game for an example)

`ccui.TextField`:
- Event propogation is suppressed and the tab key is explicitly ignored, making tabs impossible to detect unless we were to modify the framework's source code.
- It comes with a non-user-friendly mobile experience — a prompt is presented to the user, with no way to modify the prompt's message, no way to click out of the prompt outside of the prompt itself, and no way to validate input. This is especially a problem when you need autofocus, where the user will be bombarded with a prompt before getting a chance to see the context of the input.

`cc.TextFieldTTF`:
- The same pitfalls of `ccui.TextField` apply here as well. And the features of `ccui.TextField` are missing. Therefore, this solution shouldn't be considered unless something changes moving forward.
