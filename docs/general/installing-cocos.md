# Installing Cocos

## Setup

1. Download Cocos2d-x, version 3.17.1 with *one* of the following methods:

* [use link from official download page](https://cocos2d-x.org/download/version#Cocos2d-x) (recommended)
* [clone forked repository](https://github.com/curriculum-advantage/cocos2d-x) (official repository [located here](https://github.com/cocos2d/cocos2d-x) if ever needed, but may or may not be version 3.17.1)

2. In a terminal, navigate to the Cocos directory that was downloaded and then run `setup.py`

3. If you run into "command not found" errors, continue to next steps.

4. Install the following:
* [NDK](https://developer.android.com/ndk/downloads/index.html)
* [Android SDK](https://developer.android.com/studio/install.html)
* [Ant](https://ant.apache.org/bindownload.cgi) (installing with Homebrew is recommended, `brew install ant`)

5. Open up Android Studio and install the SDK tools, as [shown here](https://docs.cocos2d-x.org/cocos2d-x/en/installation/Android-Studio.html).

6. Repeat step 2 (run `setup.py`), this time adding the missing paths. Optionally, before running `setup.py`, you could instead manually add the paths. On macOS, this would be done inside your `.bash_profile` file, with the following lines added (make sure to update the paths given below with the correct versions that you actually installed):

```
export ANT_ROOT=/usr/local/bin
export NDK_ROOT=/Users/admin/Projects/android-ndk-r18b
export ANDROID_SDK_ROOT=/Applications/Android\ Studio.app

\# Add environment variable COCOS_CONSOLE_ROOT for cocos2d-x
export COCOS_CONSOLE_ROOT=/Users/admin/Projects/cocos2d-x-3.17/tools/cocos2d-console/bin
export PATH=$COCOS_CONSOLE_ROOT:$PATH

\# Add environment variable COCOS_X_ROOT for cocos2d-x
export COCOS_X_ROOT=/Users/admin/Projects
export PATH=$COCOS_X_ROOT:$PATH

\# Add environment variable COCOS_TEMPLATES_ROOT for cocos2d-x
export COCOS_TEMPLATES_ROOT=/Users/admin/Projects/cocos2d-x-3.17/templates
export PATH=$COCOS_TEMPLATES_ROOT:$PATH
```
