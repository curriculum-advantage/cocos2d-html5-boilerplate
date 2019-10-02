# Troubleshooting

## Animations (flashing, jank)

* Make sure you're not attempting to run multiple animations on the same sprite. Use the `cleanup()` method to stop other animations before starting another one.
* When making changes to a sprite immediately before animating it (e.g. re-setting the position of a sprite when one animation has different sprite sizes than another animation), those changes should be done within `cc.callFunc()`, inside the sequence itself, as opposed to immediately before `cc.runAction()`.

## Audio Issues

* If audio isn't playing, first check the resources troubleshooting listed below. Then check the console (specifically, Safari) to see if you're getting any encoding errors. If so, the files may be corrupt. Re-encode them through an online tool, or via iTunes.

## Resources (images/audio not loading, getTexture errors)

* Are the necessary resources listed in the JSON file associated with the activity (e.g. `bgImage`, `helpAudioSrc`, and `propertyLists` keys have correct values)?
* Are the resources properly exported from `/src/resource.js`? And do the activity-specific resources (the resources that are imported and combined) list the file with the correct path?
* Are the resources associated with the template in `/src/common/lib/utils/setup/getResourcesForTemplate.js`?
* Have you reorganized the directory structure, and if so, have you updated the resource paths?
* Have you renamed resources?
* If sprites have been renamed, did you remember to a) re-publish the sprite sheet via TexturePacker (updating the `.plist` and `.png` files) b) save the project via TexturePacker (updating the `.tps` file).
* If sprites were re-exported, were additional PLIST/PNG files created? Were these additional files added to the JSON file and the activity-specific resource file? Have you confirmed that your export path is the same path that your JSON files are referencing (in other words, make sure that your JSON files aren't referencing stale plists in one location, while you continue to update plists in another location)?
* If running into sprite errors while attempting to run an animation, have you cofirmed that all sprites for that animation do not have any typos in the filenames? And do the filenames all follow a sequential order (no skipped numbers, e.g. going from 001.png to 003.png)? The `frameAnimation()` helper makes certain assumptions about the structure of the filenames. If your use case differs, you might consider a) extending the helper with more options b) not using the helper c) renaming the files and re-publishing the sprite sheets via TexturePacker.

## Misc. Issues

* If your animations have too many sprites, it may cause the entire game to freeze up (especially in IE11). It's typical to have many sprites that complete an entire animation, making the development of that animation easier. However, in cases where there are thousands of sprites for an animation, and when those sprites do not represent an actual change in the animation (i.e. they represent a time delay), it may be necessary to exclude those irrelevant sprites and manually add time delays to your animation sequence (removing hundreds of sprites and dramatically improving performance).
