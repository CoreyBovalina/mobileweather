# Build output

```log
Command line invocation:
    /Applications/Xcode.app/Contents/Developer/usr/bin/xcodebuild -workspace /Users/Corey/Code/Github/mobileweather/ios/mobileinterviewchallenge.xcworkspace -configuration Debug -scheme mobileinterviewchallenge -destination id=07D86370-35FE-4D18-8A81-93900B51CEC5

User defaults from command line:
    IDEPackageSupportUseBuiltinSCM = YES

note: Using new build system
note: Planning
Analyze workspace

Create build description
Build description signature: 1015109092fdaa1eeb41b2b97dc90bb1
Build description path: /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/XCBuildData/1015109092fdaa1eeb41b2b97dc90bb1-desc.xcbuild

note: Build preparation complete
note: Building targets in parallel
PhaseScriptExecution [CP]\ Copy\ XCFrameworks /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/UMCore.build/Script-A1EF425456A5AB50088A97A3069A6962.sh (in target 'UMCore' from project 'Pods')
    cd /Users/Corey/Code/Github/mobileweather/ios/Pods
    /bin/sh -c /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/UMCore.build/Script-A1EF425456A5AB50088A97A3069A6962.sh
Selected xcframework slice ios-arm64_x86_64-simulator
rsync --delete -av --filter P .*.?????? --links --filter "- CVS/" --filter "- .svn/" --filter "- .git/" --filter "- .hg/" "/Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/@unimodules/core/ios/UMCore.xcframework/ios-arm64_x86_64-simulator/*" "/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/UMCore"
building file list ... done

sent 126 bytes  received 20 bytes  292.00 bytes/sec
total size is 316212  speedup is 2165.84
Copied /Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/@unimodules/core/ios/UMCore.xcframework/ios-arm64_x86_64-simulator to /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/UMCore

ProcessProductPackaging "" /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/React-Core-AccessibilityResources.build/AccessibilityResources.bundle-Simulated.xcent (in target 'React-Core-AccessibilityResources' from project 'Pods')
    cd /Users/Corey/Code/Github/mobileweather/ios/Pods
    
    Entitlements:
    
    {
    "application-identifier" = "AL67732LRR.org.cocoapods.AccessibilityResources";
    "keychain-access-groups" =     (
        "AL67732LRR.org.cocoapods.AccessibilityResources"
    );
}
    
    builtin-productPackagingUtility -entitlements -format xml -o /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/React-Core-AccessibilityResources.build/AccessibilityResources.bundle-Simulated.xcent

PhaseScriptExecution [CP]\ Copy\ XCFrameworks /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXStructuredHeaders.build/Script-FE2D2A8ABFF57EA7EA4B321A2D77B079.sh (in target 'EXStructuredHeaders' from project 'Pods')
    cd /Users/Corey/Code/Github/mobileweather/ios/Pods
    /bin/sh -c /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXStructuredHeaders.build/Script-FE2D2A8ABFF57EA7EA4B321A2D77B079.sh
Selected xcframework slice ios-arm64_x86_64-simulator
rsync --delete -av --filter P .*.?????? --links --filter "- CVS/" --filter "- .svn/" --filter "- .git/" --filter "- .hg/" "/Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/expo-structured-headers/ios/EXStructuredHeaders.xcframework/ios-arm64_x86_64-simulator/*" "/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/EXStructuredHeaders"
building file list ... done

sent 152 bytes  received 20 bytes  344.00 bytes/sec
total size is 69574  speedup is 404.50
Copied /Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/expo-structured-headers/ios/EXStructuredHeaders.xcframework/ios-arm64_x86_64-simulator to /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/EXStructuredHeaders

PhaseScriptExecution [CP]\ Copy\ XCFrameworks /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFileSystem.build/Script-2D83EEC0EA00BF97CB24A8AF164F799C.sh (in target 'EXFileSystem' from project 'Pods')
    cd /Users/Corey/Code/Github/mobileweather/ios/Pods
    /bin/sh -c /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFileSystem.build/Script-2D83EEC0EA00BF97CB24A8AF164F799C.sh
Selected xcframework slice ios-arm64_x86_64-simulator
rsync --delete -av --filter P .*.?????? --links --filter "- CVS/" --filter "- .svn/" --filter "- .git/" --filter "- .hg/" "/Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/expo-file-system/ios/EXFileSystem.xcframework/ios-arm64_x86_64-simulator/*" "/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/EXFileSystem"
building file list ... done

sent 199 bytes  received 20 bytes  438.00 bytes/sec
total size is 461565  speedup is 2107.60
Copied /Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/expo-file-system/ios/EXFileSystem.xcframework/ios-arm64_x86_64-simulator to /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/EXFileSystem

PhaseScriptExecution [CP]\ Copy\ XCFrameworks /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXLocation.build/Script-DC791924518D428A17DFE1E6FE9509DC.sh (in target 'EXLocation' from project 'Pods')
    cd /Users/Corey/Code/Github/mobileweather/ios/Pods
    /bin/sh -c /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXLocation.build/Script-DC791924518D428A17DFE1E6FE9509DC.sh
Selected xcframework slice ios-arm64_x86_64-simulator
rsync --delete -av --filter P .*.?????? --links --filter "- CVS/" --filter "- .svn/" --filter "- .git/" --filter "- .hg/" "/Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/expo-location/ios/EXLocation.xcframework/ios-arm64_x86_64-simulator/*" "/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/EXLocation"
building file list ... done

sent 195 bytes  received 20 bytes  430.00 bytes/sec
total size is 421562  speedup is 1960.75
Copied /Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/expo-location/ios/EXLocation.xcframework/ios-arm64_x86_64-simulator to /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/EXLocation

ProcessInfoPlistFile /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/React-Core/AccessibilityResources.bundle/Info.plist /Users/Corey/Code/Github/mobileweather/ios/Pods/Target\ Support\ Files/React-Core/ResourceBundle-AccessibilityResources-React-Core-Info.plist (in target 'React-Core-AccessibilityResources' from project 'Pods')
    cd /Users/Corey/Code/Github/mobileweather/ios/Pods
    builtin-infoPlistUtility /Users/Corey/Code/Github/mobileweather/ios/Pods/Target\ Support\ Files/React-Core/ResourceBundle-AccessibilityResources-React-Core-Info.plist -producttype com.apple.product-type.bundle -expandbuildsettings -format binary -platform iphonesimulator -o /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/React-Core/AccessibilityResources.bundle/Info.plist

CodeSign /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/React-Core/AccessibilityResources.bundle (in target 'React-Core-AccessibilityResources' from project 'Pods')
    cd /Users/Corey/Code/Github/mobileweather/ios/Pods
    export CODESIGN_ALLOCATE\=/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/codesign_allocate
    
    Signing Identity:     "-"
    
    /usr/bin/codesign --force --sign - --timestamp\=none --generate-entitlement-der /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/React-Core/AccessibilityResources.bundle
/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/React-Core/AccessibilityResources.bundle: replacing existing signature

PhaseScriptExecution [CP]\ Copy\ XCFrameworks /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Script-3BC2457C58831FC6434B60D1242B8966.sh (in target 'EXUpdates' from project 'Pods')
    cd /Users/Corey/Code/Github/mobileweather/ios/Pods
    /bin/sh -c /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Script-3BC2457C58831FC6434B60D1242B8966.sh
Selected xcframework slice ios-arm64_x86_64-simulator
rsync --delete -av --filter P .*.?????? --links --filter "- CVS/" --filter "- .svn/" --filter "- .git/" --filter "- .hg/" "/Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/expo-updates/ios/EXUpdates.xcframework/ios-arm64_x86_64-simulator/*" "/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/EXUpdates"
building file list ... done

sent 132 bytes  received 20 bytes  304.00 bytes/sec
total size is 1132179  speedup is 7448.55
Copied /Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/expo-updates/ios/EXUpdates.xcframework/ios-arm64_x86_64-simulator to /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/EXUpdates

PhaseScriptExecution [CP]\ Copy\ XCFrameworks /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXSplashScreen.build/Script-583B3F18E59840F3258ED6F64126E0F6.sh (in target 'EXSplashScreen' from project 'Pods')
    cd /Users/Corey/Code/Github/mobileweather/ios/Pods
    /bin/sh -c /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXSplashScreen.build/Script-583B3F18E59840F3258ED6F64126E0F6.sh
Selected xcframework slice ios-arm64_x86_64-simulator
rsync --delete -av --filter P .*.?????? --links --filter "- CVS/" --filter "- .svn/" --filter "- .git/" --filter "- .hg/" "/Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/expo-splash-screen/ios/EXSplashScreen.xcframework/ios-arm64_x86_64-simulator/*" "/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/EXSplashScreen"
building file list ... done

sent 142 bytes  received 20 bytes  324.00 bytes/sec
total size is 159481  speedup is 984.45
Copied /Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/expo-splash-screen/ios/EXSplashScreen.xcframework/ios-arm64_x86_64-simulator to /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/EXSplashScreen

PhaseScriptExecution [CP]\ Copy\ XCFrameworks /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/UMReactNativeAdapter.build/Script-1ACC22FC494132B2ECEEDD35877003F2.sh (in target 'UMReactNativeAdapter' from project 'Pods')
    cd /Users/Corey/Code/Github/mobileweather/ios/Pods
    /bin/sh -c /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/UMReactNativeAdapter.build/Script-1ACC22FC494132B2ECEEDD35877003F2.sh
Selected xcframework slice ios-arm64_x86_64-simulator
rsync --delete -av --filter P .*.?????? --links --filter "- CVS/" --filter "- .svn/" --filter "- .git/" --filter "- .hg/" "/Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/@unimodules/react-native-adapter/ios/UMReactNativeAdapter.xcframework/ios-arm64_x86_64-simulator/*" "/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/UMReactNativeAdapter"
building file list ... done

sent 215 bytes  received 20 bytes  470.00 bytes/sec
total size is 375517  speedup is 1597.94
Copied /Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/@unimodules/react-native-adapter/ios/UMReactNativeAdapter.xcframework/ios-arm64_x86_64-simulator to /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/UMReactNativeAdapter

ProcessProductPackaging "" /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/mobile-interview-challenge.app.xcent (in target 'mobileinterviewchallenge' from project 'mobileinterviewchallenge')
    cd /Users/Corey/Code/Github/mobileweather/ios
    
    Entitlements:
    
    {
    "com.apple.security.get-task-allow" = 1;
}
    
    builtin-productPackagingUtility -entitlements -format xml -o /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/mobile-interview-challenge.app.xcent

ProcessProductPackaging "" /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/mobile-interview-challenge.app-Simulated.xcent (in target 'mobileinterviewchallenge' from project 'mobileinterviewchallenge')
    cd /Users/Corey/Code/Github/mobileweather/ios
    
    Entitlements:
    
    {
    "application-identifier" = "AL67732LRR.com.bova80.mobile-interview-challenge";
    "aps-environment" = development;
}
    
    builtin-productPackagingUtility -entitlements -format xml -o /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/mobile-interview-challenge.app-Simulated.xcent

PhaseScriptExecution [CP]\ Check\ Pods\ Manifest.lock /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/Script-08A4A3CD28434E44B6B9DE2E.sh (in target 'mobileinterviewchallenge' from project 'mobileinterviewchallenge')
    cd /Users/Corey/Code/Github/mobileweather/ios
    /bin/sh -c /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/Script-08A4A3CD28434E44B6B9DE2E.sh

PhaseScriptExecution Start\ Packager /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/Script-FD10A7F022414F080027D42C.sh (in target 'mobileinterviewchallenge' from project 'mobileinterviewchallenge')
    cd /Users/Corey/Code/Github/mobileweather/ios
    /bin/sh -c /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/Script-FD10A7F022414F080027D42C.sh

Ld /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/mobile-interview-challenge.app/mobile-interview-challenge normal (in target 'mobileinterviewchallenge' from project 'mobileinterviewchallenge')
    cd /Users/Corey/Code/Github/mobileweather/ios
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang -target x86_64-apple-ios11.0-simulator -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk -L/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator -L/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/DoubleConversion -L/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/EXApplication -L/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/EXConstants -L/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/EXErrorRecovery -L/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/EXFont -L/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/EXImageLoader -L/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/EXKeepAwake -L/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/EXPermissions -L/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/FBReactNativeSpec -L/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/Folly -L/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/RCTTypeSafety -L/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/RNCAsyncStorage -L/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/RNGestureHandler -L/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/RNReanimated -L/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/RNScreens -L/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/RNVectorIcons -L/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/React-Core -L/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/React-CoreModules -L/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/React-RCTAnimation -L/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/React-RCTBlob -L/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/React-RCTImage -L/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/React-RCTLinking -L/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/React-RCTNetwork -L/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/React-RCTSettings -L/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/React-RCTText -L/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/React-RCTVibration -L/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/React-cxxreact -L/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/React-jsi -L/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/React-jsiexecutor -L/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/React-jsinspector -L/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/ReactCommon -L/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/UMAppLoader -L/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/UMPermissionsInterface -L/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/Yoga -L/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/glog -L/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/react-native-viewpager -F/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator -F/Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/@unimodules/core/ios -F/Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/@unimodules/react-native-adapter/ios -F/Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/expo-file-system/ios -F/Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/expo-location/ios -F/Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/expo-splash-screen/ios -F/Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/expo-structured-headers/ios -F/Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/expo-updates/ios -F/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/EXFileSystem -F/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/EXLocation -F/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/EXSplashScreen -F/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/EXStructuredHeaders -F/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/EXUpdates -F/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/UMCore -F/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/UMReactNativeAdapter -filelist /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/Objects-normal/x86_64/mobile-interview-challenge.LinkFileList -Xlinker -rpath -Xlinker /usr/lib/swift -Xlinker -rpath -Xlinker /usr/lib/swift -Xlinker -rpath -Xlinker @executable_path/Frameworks -dead_strip -Xlinker -object_path_lto -Xlinker /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/Objects-normal/x86_64/mobile-interview-challenge_lto.o -Xlinker -export_dynamic -Xlinker -no_deduplicate -Xlinker -objc_abi_version -Xlinker 2 -fobjc-arc -fobjc-link-runtime -L/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/swift/iphonesimulator -L/usr/lib/swift -Xlinker -add_ast_path -Xlinker /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/Objects-normal/x86_64/mobile_interview_challenge.swiftmodule -ObjC -lDoubleConversion -lEXApplication -lEXConstants -lEXErrorRecovery -lEXFont -lEXImageLoader -lEXKeepAwake -lEXPermissions -lFBReactNativeSpec -lFolly -lRCTTypeSafety -lRNCAsyncStorage -lRNGestureHandler -lRNReanimated -lRNScreens -lRNVectorIcons -lReact-Core -lReact-CoreModules -lReact-RCTAnimation -lReact-RCTBlob -lReact-RCTImage -lReact-RCTLinking -lReact-RCTNetwork -lReact-RCTSettings -lReact-RCTText -lReact-RCTVibration -lReact-cxxreact -lReact-jsi -lReact-jsiexecutor -lReact-jsinspector -lReactCommon -lUMAppLoader -lUMPermissionsInterface -lYoga -lglog -lreact-native-viewpager -lstdc++ -framework AudioToolbox -framework EXFileSystem -framework EXLocation -framework EXSplashScreen -framework EXStructuredHeaders -framework EXUpdates -framework JavaScriptCore -framework MobileCoreServices -framework UMCore -framework UMReactNativeAdapter -ObjC -lc++ -Xlinker -sectcreate -Xlinker __TEXT -Xlinker __entitlements -Xlinker /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/mobile-interview-challenge.app-Simulated.xcent -lPods-mobileinterviewchallenge -Xlinker -no_adhoc_codesign -Xlinker -dependency_info -Xlinker /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/Objects-normal/x86_64/mobile-interview-challenge_dependency_info.dat -o /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/mobile-interview-challenge.app/mobile-interview-challenge

PhaseScriptExecution Bundle\ React\ Native\ code\ and\ images /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/Script-00DD1BFF1BD5951E006B06BC.sh (in target 'mobileinterviewchallenge' from project 'mobileinterviewchallenge')
    cd /Users/Corey/Code/Github/mobileweather/ios
    export ACTION\=build
    export AD_HOC_CODE_SIGNING_ALLOWED\=YES
    export ALLOW_TARGET_PLATFORM_SPECIALIZATION\=NO
    export ALTERNATE_GROUP\=staff
    export ALTERNATE_MODE\=u+w,go-w,a+rX
    export ALTERNATE_OWNER\=corey
    export ALWAYS_EMBED_SWIFT_STANDARD_LIBRARIES\=NO
    export ALWAYS_SEARCH_USER_PATHS\=NO
    export ALWAYS_USE_SEPARATE_HEADERMAPS\=NO
    export APPLE_INTERNAL_DEVELOPER_DIR\=/AppleInternal/Developer
    export APPLE_INTERNAL_DIR\=/AppleInternal
    export APPLE_INTERNAL_DOCUMENTATION_DIR\=/AppleInternal/Documentation
    export APPLE_INTERNAL_LIBRARY_DIR\=/AppleInternal/Library
    export APPLE_INTERNAL_TOOLS\=/AppleInternal/Developer/Tools
    export APPLICATION_EXTENSION_API_ONLY\=NO
    export APPLY_RULES_IN_COPY_FILES\=NO
    export APPLY_RULES_IN_COPY_HEADERS\=NO
    export ARCHS\=x86_64
    export ARCHS_STANDARD\=arm64\ x86_64
    export ARCHS_STANDARD_32_64_BIT\=arm64\ i386\ x86_64
    export ARCHS_STANDARD_32_BIT\=i386
    export ARCHS_STANDARD_64_BIT\=arm64\ x86_64
    export ARCHS_STANDARD_INCLUDING_64_BIT\=arm64\ x86_64
    export ARCHS_UNIVERSAL_IPHONE_OS\=arm64\ i386\ x86_64
    export ASSETCATALOG_COMPILER_APPICON_NAME\=AppIcon
    export ASSETCATALOG_FILTER_FOR_DEVICE_MODEL\=iPhone14,2
    export ASSETCATALOG_FILTER_FOR_DEVICE_OS_VERSION\=15.0
    export AVAILABLE_PLATFORMS\=appletvos\ appletvsimulator\ driverkit\ iphoneos\ iphonesimulator\ macosx\ watchos\ watchsimulator
    export AppIdentifierPrefix\=AL67732LRR.
    export BITCODE_GENERATION_MODE\=marker
    export BUILD_ACTIVE_RESOURCES_ONLY\=YES
    export BUILD_COMPONENTS\=headers\ build
    export BUILD_DIR\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products
    export BUILD_LIBRARY_FOR_DISTRIBUTION\=NO
    export BUILD_ROOT\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products
    export BUILD_STYLE\=
    export BUILD_VARIANTS\=normal
    export BUILT_PRODUCTS_DIR\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator
    export BUNDLE_CONTENTS_FOLDER_PATH_deep\=Contents/
    export BUNDLE_EXECUTABLE_FOLDER_NAME_deep\=MacOS
    export BUNDLE_FORMAT\=shallow
    export BUNDLE_FRAMEWORKS_FOLDER_PATH\=Frameworks
    export BUNDLE_PLUGINS_FOLDER_PATH\=PlugIns
    export BUNDLE_PRIVATE_HEADERS_FOLDER_PATH\=PrivateHeaders
    export BUNDLE_PUBLIC_HEADERS_FOLDER_PATH\=Headers
    export CACHE_ROOT\=/var/folders/59/mrgcss0j1jq53tl2y01r65tc0000gn/C/com.apple.DeveloperTools/13.1-13A1030d/Xcode
    export CCHROOT\=/var/folders/59/mrgcss0j1jq53tl2y01r65tc0000gn/C/com.apple.DeveloperTools/13.1-13A1030d/Xcode
    export CHMOD\=/bin/chmod
    export CHOWN\=/usr/sbin/chown
    export CLANG_ANALYZER_LOCALIZABILITY_NONLOCALIZED\=YES
    export CLANG_CXX_LANGUAGE_STANDARD\=c++14
    export CLANG_CXX_LIBRARY\=libc++
    export CLANG_ENABLE_MODULES\=YES
    export CLANG_ENABLE_OBJC_ARC\=YES
    export CLANG_MODULES_BUILD_SESSION_FILE\=/Users/Corey/Library/Developer/Xcode/DerivedData/ModuleCache.noindex/Session.modulevalidation
    export CLANG_WARN_BLOCK_CAPTURE_AUTORELEASING\=YES
    export CLANG_WARN_BOOL_CONVERSION\=YES
    export CLANG_WARN_COMMA\=YES
    export CLANG_WARN_CONSTANT_CONVERSION\=YES
    export CLANG_WARN_DEPRECATED_OBJC_IMPLEMENTATIONS\=YES
    export CLANG_WARN_DIRECT_OBJC_ISA_USAGE\=YES_ERROR
    export CLANG_WARN_EMPTY_BODY\=YES
    export CLANG_WARN_ENUM_CONVERSION\=YES
    export CLANG_WARN_INFINITE_RECURSION\=YES
    export CLANG_WARN_INT_CONVERSION\=YES
    export CLANG_WARN_NON_LITERAL_NULL_CONVERSION\=YES
    export CLANG_WARN_OBJC_IMPLICIT_RETAIN_SELF\=YES
    export CLANG_WARN_OBJC_LITERAL_CONVERSION\=YES
    export CLANG_WARN_OBJC_ROOT_CLASS\=YES_ERROR
    export CLANG_WARN_QUOTED_INCLUDE_IN_FRAMEWORK_HEADER\=NO
    export CLANG_WARN_RANGE_LOOP_ANALYSIS\=YES
    export CLANG_WARN_STRICT_PROTOTYPES\=YES
    export CLANG_WARN_SUSPICIOUS_MOVE\=YES
    export CLANG_WARN_UNREACHABLE_CODE\=YES
    export CLANG_WARN__DUPLICATE_METHOD_MATCH\=YES
    export CLASS_FILE_DIR\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/JavaClasses
    export CLEAN_PRECOMPS\=YES
    export CLONE_HEADERS\=NO
    export CODESIGNING_FOLDER_PATH\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/mobile-interview-challenge.app
    export CODE_SIGNING_ALLOWED\=YES
    export CODE_SIGNING_REQUIRED\=YES
    export CODE_SIGN_CONTEXT_CLASS\=XCiPhoneSimulatorCodeSignContext
    export CODE_SIGN_ENTITLEMENTS\=mobileinterviewchallenge/mobile-interview-challenge.entitlements
    export CODE_SIGN_IDENTITY\=-
    export CODE_SIGN_INJECT_BASE_ENTITLEMENTS\=YES
    export COLOR_DIAGNOSTICS\=NO
    export COMBINE_HIDPI_IMAGES\=NO
    export COMPILER_INDEX_STORE_ENABLE\=Default
    export COMPOSITE_SDK_DIRS\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/CompositeSDKs
    export COMPRESS_PNG_FILES\=YES
    export CONFIGURATION\=Debug
    export CONFIGURATION_BUILD_DIR\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator
    export CONFIGURATION_TEMP_DIR\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator
    export CONTENTS_FOLDER_PATH\=mobile-interview-challenge.app
    export COPYING_PRESERVES_HFS_DATA\=NO
    export COPY_HEADERS_RUN_UNIFDEF\=NO
    export COPY_PHASE_STRIP\=NO
    export COPY_RESOURCES_FROM_STATIC_FRAMEWORKS\=YES
    export CORRESPONDING_DEVICE_PLATFORM_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform
    export CORRESPONDING_DEVICE_PLATFORM_NAME\=iphoneos
    export CORRESPONDING_DEVICE_SDK_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/SDKs/iPhoneOS15.0.sdk
    export CORRESPONDING_DEVICE_SDK_NAME\=iphoneos15.0
    export CP\=/bin/cp
    export CREATE_INFOPLIST_SECTION_IN_BINARY\=NO
    export CURRENT_ARCH\=undefined_arch
    export CURRENT_PROJECT_VERSION\=1
    export CURRENT_VARIANT\=normal
    export DEAD_CODE_STRIPPING\=YES
    export DEBUGGING_SYMBOLS\=YES
    export DEBUG_INFORMATION_FORMAT\=dwarf-with-dsym
    export DEFAULT_COMPILER\=com.apple.compilers.llvm.clang.1_0
    export DEFAULT_DEXT_INSTALL_PATH\=/System/Library/DriverExtensions
    export DEFAULT_KEXT_INSTALL_PATH\=/System/Library/Extensions
    export DEFINES_MODULE\=NO
    export DEPLOYMENT_LOCATION\=NO
    export DEPLOYMENT_POSTPROCESSING\=NO
    export DEPLOYMENT_TARGET_CLANG_ENV_NAME\=IPHONEOS_DEPLOYMENT_TARGET
    export DEPLOYMENT_TARGET_CLANG_FLAG_NAME\=mios-simulator-version-min
    export DEPLOYMENT_TARGET_CLANG_FLAG_PREFIX\=-mios-simulator-version-min\=
    export DEPLOYMENT_TARGET_LD_ENV_NAME\=IPHONEOS_DEPLOYMENT_TARGET
    export DEPLOYMENT_TARGET_LD_FLAG_NAME\=ios_simulator_version_min
    export DEPLOYMENT_TARGET_SETTING_NAME\=IPHONEOS_DEPLOYMENT_TARGET
    export DEPLOYMENT_TARGET_SUGGESTED_VALUES\=9.0\ 9.1\ 9.2\ 9.3\ 10.0\ 10.1\ 10.2\ 10.3\ 11.0\ 11.1\ 11.2\ 11.3\ 11.4\ 12.0\ 12.1\ 12.2\ 12.3\ 12.4\ 13.0\ 13.1\ 13.2\ 13.3\ 13.4\ 13.5\ 13.6\ 14.0\ 14.1\ 14.2\ 14.3\ 14.4\ 14.5\ 14.6\ 14.7\ 15.0
    export DERIVED_FILES_DIR\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/DerivedSources
    export DERIVED_FILE_DIR\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/DerivedSources
    export DERIVED_SOURCES_DIR\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/DerivedSources
    export DEVELOPER_APPLICATIONS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications
    export DEVELOPER_BIN_DIR\=/Applications/Xcode.app/Contents/Developer/usr/bin
    export DEVELOPER_DIR\=/Applications/Xcode.app/Contents/Developer
    export DEVELOPER_FRAMEWORKS_DIR\=/Applications/Xcode.app/Contents/Developer/Library/Frameworks
    export DEVELOPER_FRAMEWORKS_DIR_QUOTED\=/Applications/Xcode.app/Contents/Developer/Library/Frameworks
    export DEVELOPER_LIBRARY_DIR\=/Applications/Xcode.app/Contents/Developer/Library
    export DEVELOPER_SDK_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs
    export DEVELOPER_TOOLS_DIR\=/Applications/Xcode.app/Contents/Developer/Tools
    export DEVELOPER_USR_DIR\=/Applications/Xcode.app/Contents/Developer/usr
    export DEVELOPMENT_LANGUAGE\=en
    export DOCUMENTATION_FOLDER_PATH\=mobile-interview-challenge.app/en.lproj/Documentation
    export DONT_GENERATE_INFOPLIST_FILE\=NO
    export DO_HEADER_SCANNING_IN_JAM\=NO
    export DSTROOT\=/tmp/mobileinterviewchallenge.dst
    export DT_TOOLCHAIN_DIR\=/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain
    export DWARF_DSYM_FILE_NAME\=mobile-interview-challenge.app.dSYM
    export DWARF_DSYM_FILE_SHOULD_ACCOMPANY_PRODUCT\=NO
    export DWARF_DSYM_FOLDER_PATH\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator
    export EFFECTIVE_PLATFORM_NAME\=-iphonesimulator
    export EMBEDDED_CONTENT_CONTAINS_SWIFT\=NO
    export EMBED_ASSET_PACKS_IN_PRODUCT_BUNDLE\=NO
    export ENABLE_APP_SANDBOX\=NO
    export ENABLE_BITCODE\=NO
    export ENABLE_DEFAULT_HEADER_SEARCH_PATHS\=YES
    export ENABLE_HARDENED_RUNTIME\=NO
    export ENABLE_HEADER_DEPENDENCIES\=YES
    export ENABLE_ON_DEMAND_RESOURCES\=YES
    export ENABLE_PREVIEWS\=NO
    export ENABLE_STRICT_OBJC_MSGSEND\=YES
    export ENABLE_TESTABILITY\=YES
    export ENABLE_TESTING_SEARCH_PATHS\=NO
    export ENTITLEMENTS_DESTINATION\=__entitlements
    export ENTITLEMENTS_REQUIRED\=YES
    export EXCLUDED_INSTALLSRC_SUBDIRECTORY_PATTERNS\=.DS_Store\ .svn\ .git\ .hg\ CVS
    export EXCLUDED_RECURSIVE_SEARCH_PATH_SUBDIRECTORIES\=\*.nib\ \*.lproj\ \*.framework\ \*.gch\ \*.xcode\*\ \*.xcassets\ \(\*\)\ .DS_Store\ CVS\ .svn\ .git\ .hg\ \*.pbproj\ \*.pbxproj
    export EXECUTABLES_FOLDER_PATH\=mobile-interview-challenge.app/Executables
    export EXECUTABLE_FOLDER_PATH\=mobile-interview-challenge.app
    export EXECUTABLE_NAME\=mobile-interview-challenge
    export EXECUTABLE_PATH\=mobile-interview-challenge.app/mobile-interview-challenge
    export EXPANDED_CODE_SIGN_IDENTITY\=-
    export EXPANDED_CODE_SIGN_IDENTITY_NAME\=-
    export FILE_LIST\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/Objects/LinkFileList
    export FIXED_FILES_DIR\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/FixedFiles
    export FRAMEWORKS_FOLDER_PATH\=mobile-interview-challenge.app/Frameworks
    export FRAMEWORK_FLAG_PREFIX\=-framework
    export FRAMEWORK_SEARCH_PATHS\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator\ \ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/@unimodules/core/ios\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/@unimodules/react-native-adapter/ios\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/expo-file-system/ios\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/expo-location/ios\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/expo-splash-screen/ios\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/expo-structured-headers/ios\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/expo-updates/ios\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/EXFileSystem\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/EXLocation\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/EXSplashScreen\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/EXStructuredHeaders\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/EXUpdates\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/UMCore\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/UMReactNativeAdapter\"
    export FRAMEWORK_VERSION\=A
    export FULL_PRODUCT_NAME\=mobile-interview-challenge.app
    export GCC3_VERSION\=3.3
    export GCC_C_LANGUAGE_STANDARD\=gnu99
    export GCC_DYNAMIC_NO_PIC\=NO
    export GCC_INLINES_ARE_PRIVATE_EXTERN\=YES
    export GCC_NO_COMMON_BLOCKS\=YES
    export GCC_OBJC_LEGACY_DISPATCH\=YES
    export GCC_OPTIMIZATION_LEVEL\=0
    export GCC_PFE_FILE_C_DIALECTS\=c\ objective-c\ c++\ objective-c++
    export GCC_PREPROCESSOR_DEFINITIONS\=DEBUG\=1\ \ COCOAPODS\=1\ FB_SONARKIT_ENABLED\=1
    export GCC_SYMBOLS_PRIVATE_EXTERN\=NO
    export GCC_TREAT_WARNINGS_AS_ERRORS\=NO
    export GCC_VERSION\=com.apple.compilers.llvm.clang.1_0
    export GCC_VERSION_IDENTIFIER\=com_apple_compilers_llvm_clang_1_0
    export GCC_WARN_64_TO_32_BIT_CONVERSION\=YES
    export GCC_WARN_ABOUT_RETURN_TYPE\=YES_ERROR
    export GCC_WARN_UNDECLARED_SELECTOR\=YES
    export GCC_WARN_UNINITIALIZED_AUTOS\=YES_AGGRESSIVE
    export GCC_WARN_UNUSED_FUNCTION\=YES
    export GCC_WARN_UNUSED_VARIABLE\=YES
    export GENERATED_MODULEMAP_DIR\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/GeneratedModuleMaps-iphonesimulator
    export GENERATE_INFOPLIST_FILE\=NO
    export GENERATE_MASTER_OBJECT_FILE\=NO
    export GENERATE_PKGINFO_FILE\=YES
    export GENERATE_PROFILING_CODE\=NO
    export GENERATE_TEXT_BASED_STUBS\=NO
    export GID\=20
    export GROUP\=staff
    export HEADERMAP_INCLUDES_FLAT_ENTRIES_FOR_TARGET_BEING_BUILT\=YES
    export HEADERMAP_INCLUDES_FRAMEWORK_ENTRIES_FOR_ALL_PRODUCT_TYPES\=YES
    export HEADERMAP_INCLUDES_NONPUBLIC_NONPRIVATE_HEADERS\=YES
    export HEADERMAP_INCLUDES_PROJECT_HEADERS\=YES
    export HEADERMAP_USES_FRAMEWORK_PREFIX_ENTRIES\=YES
    export HEADERMAP_USES_VFS\=NO
    export HEADER_SEARCH_PATHS\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/include\ \ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/DoubleConversion\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/EXApplication\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/EXConstants\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/EXErrorRecovery\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/EXFileSystem\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/EXFont\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/EXImageLoader\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/EXKeepAwake\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/EXLocation\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/EXPermissions\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/EXSplashScreen\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/EXStructuredHeaders\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/EXUpdates\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/FBLazyVector\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/FBReactNativeSpec\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/RCTRequired\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/RCTTypeSafety\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/RNCAsyncStorage\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/RNGestureHandler\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/RNReanimated\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/RNScreens\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/RNVectorIcons\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/React-Core\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/React-RCTText\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/React-callinvoker\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/React-cxxreact\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/React-jsi\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/React-jsiexecutor\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/React-jsinspector\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/ReactCommon\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/UMAppLoader\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/UMBarCodeScannerInterface\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/UMCameraInterface\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/UMConstantsInterface\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/UMCore\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/UMFaceDetectorInterface\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/UMFileSystemInterface\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/UMFontInterface\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/UMImageLoaderInterface\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/UMPermissionsInterface\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/UMReactNativeAdapter\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/UMSensorsInterface\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/UMTaskManagerInterface\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/Yoga\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/glog\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/react-native-viewpager\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/boost-for-react-native\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/glog\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Folly\"\ \"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Private/React-Core\"
    export HIDE_BITCODE_SYMBOLS\=YES
    export HOME\=/Users/Corey
    export ICONV\=/usr/bin/iconv
    export INFOPLIST_EXPAND_BUILD_SETTINGS\=YES
    export INFOPLIST_FILE\=mobileinterviewchallenge/Info.plist
    export INFOPLIST_OUTPUT_FORMAT\=binary
    export INFOPLIST_PATH\=mobile-interview-challenge.app/Info.plist
    export INFOPLIST_PREPROCESS\=NO
    export INFOSTRINGS_PATH\=mobile-interview-challenge.app/en.lproj/InfoPlist.strings
    export INLINE_PRIVATE_FRAMEWORKS\=NO
    export INSTALLHDRS_COPY_PHASE\=NO
    export INSTALLHDRS_SCRIPT_PHASE\=NO
    export INSTALL_DIR\=/tmp/mobileinterviewchallenge.dst/Applications
    export INSTALL_GROUP\=staff
    export INSTALL_MODE_FLAG\=u+w,go-w,a+rX
    export INSTALL_OWNER\=corey
    export INSTALL_PATH\=/Applications
    export INSTALL_ROOT\=/tmp/mobileinterviewchallenge.dst
    export IPHONEOS_DEPLOYMENT_TARGET\=11.0
    export JAVAC_DEFAULT_FLAGS\=-J-Xms64m\ -J-XX:NewSize\=4M\ -J-Dfile.encoding\=UTF8
    export JAVA_APP_STUB\=/System/Library/Frameworks/JavaVM.framework/Resources/MacOS/JavaApplicationStub
    export JAVA_ARCHIVE_CLASSES\=YES
    export JAVA_ARCHIVE_TYPE\=JAR
    export JAVA_COMPILER\=/usr/bin/javac
    export JAVA_FOLDER_PATH\=mobile-interview-challenge.app/Java
    export JAVA_FRAMEWORK_RESOURCES_DIRS\=Resources
    export JAVA_JAR_FLAGS\=cv
    export JAVA_SOURCE_SUBDIR\=.
    export JAVA_USE_DEPENDENCIES\=YES
    export JAVA_ZIP_FLAGS\=-urg
    export JIKES_DEFAULT_FLAGS\=+E\ +OLDCSO
    export KEEP_PRIVATE_EXTERNS\=NO
    export LD_DEPENDENCY_INFO_FILE\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/Objects-normal/undefined_arch/mobile-interview-challenge_dependency_info.dat
    export LD_ENTITLEMENTS_SECTION\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/mobile-interview-challenge.app-Simulated.xcent
    export LD_GENERATE_MAP_FILE\=NO
    export LD_MAP_FILE_PATH\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/mobile-interview-challenge-LinkMap-normal-undefined_arch.txt
    export LD_NO_PIE\=NO
    export LD_QUOTE_LINKER_ARGUMENTS_FOR_COMPILER_DRIVER\=YES
    export LD_RUNPATH_SEARCH_PATHS\=/usr/lib/swift\ \ @executable_path/Frameworks
    export LEGACY_DEVELOPER_DIR\=/Applications/Xcode.app/Contents/PlugIns/Xcode3Core.ideplugin/Contents/SharedSupport/Developer
    export LEX\=lex
    export LIBRARY_DEXT_INSTALL_PATH\=/Library/DriverExtensions
    export LIBRARY_FLAG_NOSPACE\=YES
    export LIBRARY_FLAG_PREFIX\=-l
    export LIBRARY_KEXT_INSTALL_PATH\=/Library/Extensions
    export LIBRARY_SEARCH_PATHS\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator\ \"\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/DoubleConversion\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/EXApplication\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/EXConstants\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/EXErrorRecovery\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/EXFont\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/EXImageLoader\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/EXKeepAwake\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/EXPermissions\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/FBReactNativeSpec\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/Folly\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/RCTTypeSafety\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/RNCAsyncStorage\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/RNGestureHandler\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/RNReanimated\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/RNScreens\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/RNVectorIcons\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/React-Core\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/React-CoreModules\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/React-RCTAnimation\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/React-RCTBlob\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/React-RCTImage\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/React-RCTLinking\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/React-RCTNetwork\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/React-RCTSettings\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/React-RCTText\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/React-RCTVibration\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/React-cxxreact\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/React-jsi\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/React-jsiexecutor\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/React-jsinspector\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/ReactCommon\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/UMAppLoader\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/UMPermissionsInterface\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/Yoga\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/glog\"\ \"/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/react-native-viewpager\"
    export LINKER_DISPLAYS_MANGLED_NAMES\=NO
    export LINK_FILE_LIST_normal_x86_64\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/Objects-normal/x86_64/mobile-interview-challenge.LinkFileList
    export LINK_WITH_STANDARD_LIBRARIES\=YES
    export LLVM_TARGET_TRIPLE_OS_VERSION\=ios11.0
    export LLVM_TARGET_TRIPLE_SUFFIX\=-simulator
    export LLVM_TARGET_TRIPLE_VENDOR\=apple
    export LOCALIZATION_EXPORT_SUPPORTED\=YES
    export LOCALIZED_RESOURCES_FOLDER_PATH\=mobile-interview-challenge.app/en.lproj
    export LOCALIZED_STRING_MACRO_NAMES\=NSLocalizedString\ CFCopyLocalizedString
    export LOCALIZED_STRING_SWIFTUI_SUPPORT\=YES
    export LOCAL_ADMIN_APPS_DIR\=/Applications/Utilities
    export LOCAL_APPS_DIR\=/Applications
    export LOCAL_DEVELOPER_DIR\=/Library/Developer
    export LOCAL_LIBRARY_DIR\=/Library
    export LOCROOT\=/Users/Corey/Code/Github/mobileweather/ios
    export LOCSYMROOT\=/Users/Corey/Code/Github/mobileweather/ios
    export MACH_O_TYPE\=mh_execute
    export MAC_OS_X_PRODUCT_BUILD_VERSION\=21A559
    export MAC_OS_X_VERSION_ACTUAL\=120001
    export MAC_OS_X_VERSION_MAJOR\=120000
    export MAC_OS_X_VERSION_MINOR\=120000
    export METAL_LIBRARY_FILE_BASE\=default
    export METAL_LIBRARY_OUTPUT_DIR\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/mobile-interview-challenge.app
    export MODULES_FOLDER_PATH\=mobile-interview-challenge.app/Modules
    export MODULE_CACHE_DIR\=/Users/Corey/Library/Developer/Xcode/DerivedData/ModuleCache.noindex
    export MTL_ENABLE_DEBUG_INFO\=YES
    export NATIVE_ARCH\=x86_64
    export NATIVE_ARCH_32_BIT\=i386
    export NATIVE_ARCH_64_BIT\=x86_64
    export NATIVE_ARCH_ACTUAL\=x86_64
    export NO_COMMON\=YES
    export OBJC_ABI_VERSION\=2
    export OBJECT_FILE_DIR\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/Objects
    export OBJECT_FILE_DIR_normal\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/Objects-normal
    export OBJROOT\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex
    export ONLY_ACTIVE_ARCH\=YES
    export OS\=MACOS
    export OSAC\=/usr/bin/osacompile
    export OTHER_CFLAGS\=\ -fmodule-map-file\=\"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/React/React-Core.modulemap\"\ -fmodule-map-file\=\"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/yoga/Yoga.modulemap\"\ \ -DFOLLY_NO_CONFIG\ -DFOLLY_MOBILE\=1\ -DFOLLY_USE_LIBCPP\=1\ -DRNVERSION\=63
    export OTHER_CPLUSPLUSFLAGS\=\ -fmodule-map-file\=\"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/React/React-Core.modulemap\"\ -fmodule-map-file\=\"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/yoga/Yoga.modulemap\"\ \ -DFOLLY_NO_CONFIG\ -DFOLLY_MOBILE\=1\ -DFOLLY_USE_LIBCPP\=1\ -DRNVERSION\=63
    export OTHER_LDFLAGS\=\ -ObjC\ -l\"DoubleConversion\"\ -l\"EXApplication\"\ -l\"EXConstants\"\ -l\"EXErrorRecovery\"\ -l\"EXFont\"\ -l\"EXImageLoader\"\ -l\"EXKeepAwake\"\ -l\"EXPermissions\"\ -l\"FBReactNativeSpec\"\ -l\"Folly\"\ -l\"RCTTypeSafety\"\ -l\"RNCAsyncStorage\"\ -l\"RNGestureHandler\"\ -l\"RNReanimated\"\ -l\"RNScreens\"\ -l\"RNVectorIcons\"\ -l\"React-Core\"\ -l\"React-CoreModules\"\ -l\"React-RCTAnimation\"\ -l\"React-RCTBlob\"\ -l\"React-RCTImage\"\ -l\"React-RCTLinking\"\ -l\"React-RCTNetwork\"\ -l\"React-RCTSettings\"\ -l\"React-RCTText\"\ -l\"React-RCTVibration\"\ -l\"React-cxxreact\"\ -l\"React-jsi\"\ -l\"React-jsiexecutor\"\ -l\"React-jsinspector\"\ -l\"ReactCommon\"\ -l\"UMAppLoader\"\ -l\"UMPermissionsInterface\"\ -l\"Yoga\"\ -l\"glog\"\ -l\"react-native-viewpager\"\ -l\"stdc++\"\ -framework\ \"AudioToolbox\"\ -framework\ \"EXFileSystem\"\ -framework\ \"EXLocation\"\ -framework\ \"EXSplashScreen\"\ -framework\ \"EXStructuredHeaders\"\ -framework\ \"EXUpdates\"\ -framework\ \"JavaScriptCore\"\ -framework\ \"MobileCoreServices\"\ -framework\ \"UMCore\"\ -framework\ \"UMReactNativeAdapter\"\ -ObjC\ -lc++
    export OTHER_SWIFT_FLAGS\=\ -D\ COCOAPODS\ -Xcc\ -fmodule-map-file\=\"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/React/React-Core.modulemap\"\ -Xcc\ -fmodule-map-file\=\"/Users/Corey/Code/Github/mobileweather/ios/Pods/Headers/Public/yoga/Yoga.modulemap\"
    export PACKAGE_TYPE\=com.apple.package-type.wrapper.application
    export PASCAL_STRINGS\=YES
    export PATH\=/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin:/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/local/bin:/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/libexec:/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/usr/bin:/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/usr/local/bin:/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr/bin:/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr/local/bin:/Applications/Xcode.app/Contents/Developer/usr/bin:/Applications/Xcode.app/Contents/Developer/usr/local/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/share/dotnet:/Library/Apple/usr/bin:/Library/Frameworks/Mono.framework/Versions/Current/Commands:/Applications/Xamarin\ Workbooks.app/Contents/SharedSupport/path-bin:/Users/Corey/Library/Android/sdk/platform-tools:/Users/Corey/.dotnet/tools:/Applications/Xamarin
    export PATH_PREFIXES_EXCLUDED_FROM_HEADER_DEPENDENCIES\=/usr/include\ /usr/local/include\ /System/Library/Frameworks\ /System/Library/PrivateFrameworks\ /Applications/Xcode.app/Contents/Developer/Headers\ /Applications/Xcode.app/Contents/Developer/SDKs\ /Applications/Xcode.app/Contents/Developer/Platforms
    export PBDEVELOPMENTPLIST_PATH\=mobile-interview-challenge.app/pbdevelopment.plist
    export PER_ARCH_OBJECT_FILE_DIR\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/Objects-normal/undefined_arch
    export PER_VARIANT_OBJECT_FILE_DIR\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/Objects-normal
    export PKGINFO_FILE_PATH\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/PkgInfo
    export PKGINFO_PATH\=mobile-interview-challenge.app/PkgInfo
    export PLATFORM_DEVELOPER_APPLICATIONS_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/Applications
    export PLATFORM_DEVELOPER_BIN_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr/bin
    export PLATFORM_DEVELOPER_LIBRARY_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/Library
    export PLATFORM_DEVELOPER_SDK_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs
    export PLATFORM_DEVELOPER_TOOLS_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/Tools
    export PLATFORM_DEVELOPER_USR_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr
    export PLATFORM_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform
    export PLATFORM_DISPLAY_NAME\=iOS\ Simulator
    export PLATFORM_FAMILY_NAME\=iOS
    export PLATFORM_NAME\=iphonesimulator
    export PLATFORM_PREFERRED_ARCH\=x86_64
    export PLATFORM_PRODUCT_BUILD_VERSION\=19A339
    export PLIST_FILE_OUTPUT_FORMAT\=binary
    export PLUGINS_FOLDER_PATH\=mobile-interview-challenge.app/PlugIns
    export PODS_BUILD_DIR\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products
    export PODS_CONFIGURATION_BUILD_DIR\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator
    export PODS_PODFILE_DIR_PATH\=/Users/Corey/Code/Github/mobileweather/ios/.
    export PODS_ROOT\=/Users/Corey/Code/Github/mobileweather/ios/Pods
    export PODS_XCFRAMEWORKS_BUILD_DIR\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates
    export PRECOMPS_INCLUDE_HEADERS_FROM_BUILT_PRODUCTS_DIR\=YES
    export PRECOMP_DESTINATION_DIR\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/PrefixHeaders
    export PRESERVE_DEAD_CODE_INITS_AND_TERMS\=NO
    export PRIVATE_HEADERS_FOLDER_PATH\=mobile-interview-challenge.app/PrivateHeaders
    export PRODUCT_BUNDLE_IDENTIFIER\=com.bova80.mobile-interview-challenge
    export PRODUCT_BUNDLE_PACKAGE_TYPE\=APPL
    export PRODUCT_MODULE_NAME\=mobile_interview_challenge
    export PRODUCT_NAME\=mobile-interview-challenge
    export PRODUCT_SETTINGS_PATH\=/Users/Corey/Code/Github/mobileweather/ios/mobileinterviewchallenge/Info.plist
    export PRODUCT_TYPE\=com.apple.product-type.application
    export PROFILING_CODE\=NO
    export PROJECT\=mobileinterviewchallenge
    export PROJECT_DERIVED_FILE_DIR\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/DerivedSources
    export PROJECT_DIR\=/Users/Corey/Code/Github/mobileweather/ios
    export PROJECT_FILE_PATH\=/Users/Corey/Code/Github/mobileweather/ios/mobileinterviewchallenge.xcodeproj
    export PROJECT_NAME\=mobileinterviewchallenge
    export PROJECT_TEMP_DIR\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build
    export PROJECT_TEMP_ROOT\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex
    export PUBLIC_HEADERS_FOLDER_PATH\=mobile-interview-challenge.app/Headers
    export RECURSIVE_SEARCH_PATHS_FOLLOW_SYMLINKS\=YES
    export REMOVE_CVS_FROM_RESOURCES\=YES
    export REMOVE_GIT_FROM_RESOURCES\=YES
    export REMOVE_HEADERS_FROM_EMBEDDED_BUNDLES\=YES
    export REMOVE_HG_FROM_RESOURCES\=YES
    export REMOVE_SVN_FROM_RESOURCES\=YES
    export REZ_COLLECTOR_DIR\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/ResourceManagerResources
    export REZ_OBJECTS_DIR\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/ResourceManagerResources/Objects
    export REZ_SEARCH_PATHS\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator\ 
    export SCAN_ALL_SOURCE_FILES_FOR_INCLUDES\=NO
    export SCRIPTS_FOLDER_PATH\=mobile-interview-challenge.app/Scripts
    export SCRIPT_INPUT_FILE_COUNT\=0
    export SCRIPT_INPUT_FILE_LIST_COUNT\=0
    export SCRIPT_OUTPUT_FILE_COUNT\=0
    export SCRIPT_OUTPUT_FILE_LIST_COUNT\=0
    export SDKROOT\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk
    export SDK_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk
    export SDK_DIR_iphonesimulator\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk
    export SDK_DIR_iphonesimulator15_0\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk
    export SDK_NAME\=iphonesimulator15.0
    export SDK_NAMES\=iphonesimulator15.0
    export SDK_PRODUCT_BUILD_VERSION\=19A339
    export SDK_VERSION\=15.0
    export SDK_VERSION_ACTUAL\=150000
    export SDK_VERSION_MAJOR\=150000
    export SDK_VERSION_MINOR\=150000
    export SED\=/usr/bin/sed
    export SEPARATE_STRIP\=NO
    export SEPARATE_SYMBOL_EDIT\=NO
    export SET_DIR_MODE_OWNER_GROUP\=YES
    export SET_FILE_MODE_OWNER_GROUP\=NO
    export SHALLOW_BUNDLE\=YES
    export SHARED_DERIVED_FILE_DIR\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/DerivedSources
    export SHARED_FRAMEWORKS_FOLDER_PATH\=mobile-interview-challenge.app/SharedFrameworks
    export SHARED_PRECOMPS_DIR\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/PrecompiledHeaders
    export SHARED_SUPPORT_FOLDER_PATH\=mobile-interview-challenge.app/SharedSupport
    export SKIP_INSTALL\=NO
    export SOURCE_ROOT\=/Users/Corey/Code/Github/mobileweather/ios
    export SRCROOT\=/Users/Corey/Code/Github/mobileweather/ios
    export STRINGSDATA_DIR\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/Objects-normal/undefined_arch
    export STRINGSDATA_ROOT\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build
    export STRINGS_FILE_INFOPLIST_RENAME\=YES
    export STRINGS_FILE_OUTPUT_ENCODING\=binary
    export STRIP_BITCODE_FROM_COPIED_FILES\=NO
    export STRIP_INSTALLED_PRODUCT\=NO
    export STRIP_STYLE\=all
    export STRIP_SWIFT_SYMBOLS\=YES
    export SUPPORTED_DEVICE_FAMILIES\=1,2
    export SUPPORTED_PLATFORMS\=iphoneos\ iphonesimulator
    export SUPPORTS_TEXT_BASED_API\=NO
    export SWIFT_EMIT_LOC_STRINGS\=NO
    export SWIFT_OBJC_BRIDGING_HEADER\=mobileinterviewchallenge/mobileinterviewchallenge-Bridging-Header.h
    export SWIFT_OPTIMIZATION_LEVEL\=-Onone
    export SWIFT_PLATFORM_TARGET_PREFIX\=ios
    export SWIFT_RESPONSE_FILE_PATH_normal_x86_64\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/Objects-normal/x86_64/mobile-interview-challenge.SwiftFileList
    export SWIFT_VERSION\=5.0
    export SYMROOT\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products
    export SYSTEM_ADMIN_APPS_DIR\=/Applications/Utilities
    export SYSTEM_APPS_DIR\=/Applications
    export SYSTEM_CORE_SERVICES_DIR\=/System/Library/CoreServices
    export SYSTEM_DEMOS_DIR\=/Applications/Extras
    export SYSTEM_DEVELOPER_APPS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications
    export SYSTEM_DEVELOPER_BIN_DIR\=/Applications/Xcode.app/Contents/Developer/usr/bin
    export SYSTEM_DEVELOPER_DEMOS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications/Utilities/Built\ Examples
    export SYSTEM_DEVELOPER_DIR\=/Applications/Xcode.app/Contents/Developer
    export SYSTEM_DEVELOPER_DOC_DIR\=/Applications/Xcode.app/Contents/Developer/ADC\ Reference\ Library
    export SYSTEM_DEVELOPER_GRAPHICS_TOOLS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications/Graphics\ Tools
    export SYSTEM_DEVELOPER_JAVA_TOOLS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications/Java\ Tools
    export SYSTEM_DEVELOPER_PERFORMANCE_TOOLS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications/Performance\ Tools
    export SYSTEM_DEVELOPER_RELEASENOTES_DIR\=/Applications/Xcode.app/Contents/Developer/ADC\ Reference\ Library/releasenotes
    export SYSTEM_DEVELOPER_TOOLS\=/Applications/Xcode.app/Contents/Developer/Tools
    export SYSTEM_DEVELOPER_TOOLS_DOC_DIR\=/Applications/Xcode.app/Contents/Developer/ADC\ Reference\ Library/documentation/DeveloperTools
    export SYSTEM_DEVELOPER_TOOLS_RELEASENOTES_DIR\=/Applications/Xcode.app/Contents/Developer/ADC\ Reference\ Library/releasenotes/DeveloperTools
    export SYSTEM_DEVELOPER_USR_DIR\=/Applications/Xcode.app/Contents/Developer/usr
    export SYSTEM_DEVELOPER_UTILITIES_DIR\=/Applications/Xcode.app/Contents/Developer/Applications/Utilities
    export SYSTEM_DEXT_INSTALL_PATH\=/System/Library/DriverExtensions
    export SYSTEM_DOCUMENTATION_DIR\=/Library/Documentation
    export SYSTEM_KEXT_INSTALL_PATH\=/System/Library/Extensions
    export SYSTEM_LIBRARY_DIR\=/System/Library
    export TAPI_VERIFY_MODE\=ErrorsOnly
    export TARGETED_DEVICE_FAMILY\=1,2
    export TARGETNAME\=mobileinterviewchallenge
    export TARGET_BUILD_DIR\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator
    export TARGET_DEVICE_IDENTIFIER\=07D86370-35FE-4D18-8A81-93900B51CEC5
    export TARGET_DEVICE_MODEL\=iPhone14,2
    export TARGET_DEVICE_OS_VERSION\=15.0
    export TARGET_DEVICE_PLATFORM_NAME\=iphonesimulator
    export TARGET_NAME\=mobileinterviewchallenge
    export TARGET_TEMP_DIR\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build
    export TEMP_DIR\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build
    export TEMP_FILES_DIR\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build
    export TEMP_FILE_DIR\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build
    export TEMP_ROOT\=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex
    export TEST_FRAMEWORK_SEARCH_PATHS\=\ /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/Library/Frameworks\ /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk/Developer/Library/Frameworks
    export TEST_LIBRARY_SEARCH_PATHS\=\ /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr/lib
    export TOOLCHAINS\=com.apple.dt.toolchain.XcodeDefault
    export TOOLCHAIN_DIR\=/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain
    export TREAT_MISSING_BASELINES_AS_TEST_FAILURES\=NO
    export TeamIdentifierPrefix\=AL67732LRR.
    export UID\=501
    export UNLOCALIZED_RESOURCES_FOLDER_PATH\=mobile-interview-challenge.app
    export UNSTRIPPED_PRODUCT\=NO
    export USER\=corey
    export USER_APPS_DIR\=/Users/Corey/Applications
    export USER_LIBRARY_DIR\=/Users/Corey/Library
    export USE_DYNAMIC_NO_PIC\=YES
    export USE_HEADERMAP\=YES
    export USE_HEADER_SYMLINKS\=NO
    export USE_LLVM_TARGET_TRIPLES\=YES
    export USE_LLVM_TARGET_TRIPLES_FOR_CLANG\=YES
    export USE_LLVM_TARGET_TRIPLES_FOR_LD\=YES
    export USE_LLVM_TARGET_TRIPLES_FOR_TAPI\=YES
    export USE_RECURSIVE_SCRIPT_INPUTS_IN_SCRIPT_PHASES\=YES
    export VALIDATE_DEVELOPMENT_ASSET_PATHS\=YES_ERROR
    export VALIDATE_PRODUCT\=NO
    export VALIDATE_WORKSPACE\=YES_ERROR
    export VALID_ARCHS\=arm64\ arm64e\ i386\ x86_64
    export VERBOSE_PBXCP\=NO
    export VERSIONING_SYSTEM\=apple-generic
    export VERSIONPLIST_PATH\=mobile-interview-challenge.app/version.plist
    export VERSION_INFO_BUILDER\=corey
    export VERSION_INFO_FILE\=mobile-interview-challenge_vers.c
    export VERSION_INFO_STRING\=\"@\(\#\)PROGRAM:mobile-interview-challenge\ \ PROJECT:mobileinterviewchallenge-1\"
    export WRAPPER_EXTENSION\=app
    export WRAPPER_NAME\=mobile-interview-challenge.app
    export WRAPPER_SUFFIX\=.app
    export WRAP_ASSET_PACKS_IN_SEPARATE_DIRECTORIES\=NO
    export XCODE_APP_SUPPORT_DIR\=/Applications/Xcode.app/Contents/Developer/Library/Xcode
    export XCODE_PRODUCT_BUILD_VERSION\=13A1030d
    export XCODE_VERSION_ACTUAL\=1310
    export XCODE_VERSION_MAJOR\=1300
    export XCODE_VERSION_MINOR\=1310
    export XPCSERVICES_FOLDER_PATH\=mobile-interview-challenge.app/XPCServices
    export YACC\=yacc
    export arch\=undefined_arch
    export variant\=normal
    /bin/sh -c /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/Script-00DD1BFF1BD5951E006B06BC.sh
+ DEST=/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/mobile-interview-challenge.app
+ [[ Debug = *Debug* ]]
+ [[ ! iphonesimulator == *simulator ]]
+ [[ -n '' ]]
+ case "$CONFIGURATION" in
+ [[ iphonesimulator == *simulator ]]
+ [[ -n '' ]]
+ echo 'Skipping bundling in Debug for the Simulator (since the packager bundles for you). Use the FORCE_BUNDLING flag to change this behavior.'
Skipping bundling in Debug for the Simulator (since the packager bundles for you). Use the FORCE_BUNDLING flag to change this behavior.
+ exit 0
                 Welcome to React Native!
                Learn once, write anywhere



ProcessInfoPlistFile /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/mobile-interview-challenge.app/Info.plist /Users/Corey/Code/Github/mobileweather/ios/mobileinterviewchallenge/Info.plist (in target 'mobileinterviewchallenge' from project 'mobileinterviewchallenge')
    cd /Users/Corey/Code/Github/mobileweather/ios
    builtin-infoPlistUtility /Users/Corey/Code/Github/mobileweather/ios/mobileinterviewchallenge/Info.plist -producttype com.apple.product-type.application -genpkginfo /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/mobile-interview-challenge.app/PkgInfo -expandbuildsettings -format binary -platform iphonesimulator -additionalcontentfile /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/Base.lproj/LaunchScreen-PartialInfo.plist -additionalcontentfile /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/SplashScreen-SBPartialInfo.plist -additionalcontentfile /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/assetcatalog_generated_info.plist -o /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/mobile-interview-challenge.app/Info.plist

GenerateDSYMFile /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/mobile-interview-challenge.app.dSYM /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/mobile-interview-challenge.app/mobile-interview-challenge (in target 'mobileinterviewchallenge' from project 'mobileinterviewchallenge')
    cd /Users/Corey/Code/Github/mobileweather/ios
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/dsymutil /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/mobile-interview-challenge.app/mobile-interview-challenge -o /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/mobile-interview-challenge.app.dSYM

PhaseScriptExecution [CP]\ Copy\ Pods\ Resources /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/Script-800E24972A6A228C8D4807E9.sh (in target 'mobileinterviewchallenge' from project 'mobileinterviewchallenge')
    cd /Users/Corey/Code/Github/mobileweather/ios
    /bin/sh -c /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/Script-800E24972A6A228C8D4807E9.sh
/Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/react-native-vector-icons/Fonts/AntDesign.ttf
/Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/react-native-vector-icons/Fonts/Entypo.ttf
/Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/react-native-vector-icons/Fonts/EvilIcons.ttf
/Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/react-native-vector-icons/Fonts/Feather.ttf
/Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/react-native-vector-icons/Fonts/FontAwesome.ttf
/Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/react-native-vector-icons/Fonts/FontAwesome5_Brands.ttf
/Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/react-native-vector-icons/Fonts/FontAwesome5_Regular.ttf
/Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/react-native-vector-icons/Fonts/FontAwesome5_Solid.ttf
/Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/react-native-vector-icons/Fonts/Fontisto.ttf
/Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/react-native-vector-icons/Fonts/Foundation.ttf
/Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/react-native-vector-icons/Fonts/Ionicons.ttf
/Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf
/Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/react-native-vector-icons/Fonts/MaterialIcons.ttf
/Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/react-native-vector-icons/Fonts/Octicons.ttf
/Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/react-native-vector-icons/Fonts/SimpleLineIcons.ttf
/Users/Corey/Code/Github/mobileweather/ios/Pods/../../node_modules/react-native-vector-icons/Fonts/Zocial.ttf
/Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/React-Core/AccessibilityResources.bundle
building file list ... done
AccessibilityResources.bundle/Info.plist
AccessibilityResources.bundle/_CodeSignature/CodeDirectory
AccessibilityResources.bundle/_CodeSignature/CodeRequirements
AccessibilityResources.bundle/_CodeSignature/CodeRequirements-1
AccessibilityResources.bundle/_CodeSignature/CodeResources
AccessibilityResources.bundle/_CodeSignature/CodeSignature

sent 4224 bytes  received 152 bytes  8752.00 bytes/sec
total size is 2599726  speedup is 594.09

CopySwiftLibs /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/mobile-interview-challenge.app (in target 'mobileinterviewchallenge' from project 'mobileinterviewchallenge')
    cd /Users/Corey/Code/Github/mobileweather/ios
    export CODESIGN_ALLOCATE\=/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/codesign_allocate
    export DEVELOPER_DIR\=/Applications/Xcode.app/Contents/Developer
    export SDKROOT\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk
    builtin-swiftStdLibTool --copy --verbose --sign - --scan-executable /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/mobile-interview-challenge.app/mobile-interview-challenge --scan-folder /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/mobile-interview-challenge.app/Frameworks --scan-folder /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/mobile-interview-challenge.app/PlugIns --platform iphonesimulator --toolchain /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain --destination /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/mobile-interview-challenge.app/Frameworks --strip-bitcode --strip-bitcode-tool /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/bitcode_strip --emit-dependency-info /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/SwiftStdLibToolInputDependencies.dep --filter-for-swift-os

CodeSign /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/mobile-interview-challenge.app (in target 'mobileinterviewchallenge' from project 'mobileinterviewchallenge')
    cd /Users/Corey/Code/Github/mobileweather/ios
    export CODESIGN_ALLOCATE\=/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/codesign_allocate
    
    Signing Identity:     "-"
    
    /usr/bin/codesign --force --sign - --entitlements /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Intermediates.noindex/mobileinterviewchallenge.build/Debug-iphonesimulator/mobileinterviewchallenge.build/mobile-interview-challenge.app.xcent --timestamp\=none --generate-entitlement-der /Users/Corey/Library/Developer/Xcode/DerivedData/mobileinterviewchallenge-dhtdrgobkrdfbtcrbpmldlhbqypy/Build/Products/Debug-iphonesimulator/mobile-interview-challenge.app

/Users/Corey/Code/Github/mobileweather/ios/Pods/Pods.xcodeproj: warning: The iOS Simulator deployment target 'IPHONEOS_DEPLOYMENT_TARGET' is set to 8.0, but the range of supported deployment target versions is 9.0 to 15.0.99. (in target 'boost-for-react-native' from project 'Pods')
** BUILD SUCCEEDED **


```

# Error output

```log
2021-12-06 09:05:02.653 xcodebuild[7600:5325300] [MT] iPhoneConnect: 📱<DVTiOSDevice (0x7fe58331b2d0), Corey’s iPhone, iPhone, 13.5.1 (17F80), 00008030-000A64140AF0802E>: downgrading native architecture from arm64e to arm64 for com.apple.platform.iphoneos:13.5.1
2021-12-06 09:05:02.654 xcodebuild[7600:5325300] [MT] iPhoneConnect: 📱<DVTiOSDevice (0x7fe58331b2d0), Corey’s iPhone, iPhone, 13.5.1 (17F80), 00008030-000A64140AF0802E>: downgrading native architecture from arm64e to arm64 for com.apple.platform.iphoneos:13.5.1
2021-12-06 09:05:05.019 xcodebuild[7600:5325300] [MT] iPhoneConnect: 📱<DVTiOSDevice (0x7fe58331b2d0), Corey’s iPhone, iPhone, 13.5.1 (17F80), 00008030-000A64140AF0802E>: downgrading native architecture from arm64e to arm64 for com.apple.platform.iphoneos:13.5.1
2021-12-06 09:05:05.028 xcodebuild[7600:5325300] [MT] iPhoneConnect: 📱<DVTiOSDevice (0x7fe58331b2d0), Corey’s iPhone, iPhone, 13.5.1 (17F80), 00008030-000A64140AF0802E>: downgrading native architecture from arm64e to arm64 for com.apple.platform.iphoneos:13.5.1
2021-12-06 09:05:05.029 xcodebuild[7600:5325300] [MT] iPhoneConnect: 📱<DVTiOSDevice (0x7fe58331b2d0), Corey’s iPhone, iPhone, 13.5.1 (17F80), 00008030-000A64140AF0802E>: downgrading native architecture from arm64e to arm64 for com.apple.platform.iphoneos:13.5.1
2021-12-06 09:05:06.019 xcodebuild[7600:5325300] [MT] iPhoneConnect: 📱<DVTiOSDevice (0x7fe58331b2d0), Corey’s iPhone, iPhone, 13.5.1 (17F80), 00008030-000A64140AF0802E>: downgrading native architecture from arm64e to arm64 for com.apple.platform.iphoneos:13.5.1
2021-12-06 09:05:06.020 xcodebuild[7600:5325300] [MT] iPhoneConnect: 📱<DVTiOSDevice (0x7fe58331b2d0), Corey’s iPhone, iPhone, 13.5.1 (17F80), 00008030-000A64140AF0802E>: downgrading native architecture from arm64e to arm64 for com.apple.platform.iphoneos:13.5.1
2021-12-06 09:05:06.027 xcodebuild[7600:5325300] [MT] iPhoneConnect: 📱<DVTiOSDevice (0x7fe58331b2d0), Corey’s iPhone, iPhone, 13.5.1 (17F80), 00008030-000A64140AF0802E>: downgrading native architecture from arm64e to arm64 for com.apple.platform.iphoneos:13.5.1
2021-12-06 09:05:06.040 xcodebuild[7600:5325300] [MT] iPhoneConnect: 📱<DVTiOSDevice (0x7fe58331b2d0), Corey’s iPhone, iPhone, 13.5.1 (17F80), 00008030-000A64140AF0802E>: downgrading native architecture from arm64e to arm64 for com.apple.platform.iphoneos:13.5.1
2021-12-06 09:05:06.041 xcodebuild[7600:5325300] [MT] iPhoneConnect: 📱<DVTiOSDevice (0x7fe58331b2d0), Corey’s iPhone, iPhone, 13.5.1 (17F80), 00008030-000A64140AF0802E>: downgrading native architecture from arm64e to arm64 for com.apple.platform.iphoneos:13.5.1
2021-12-06 09:05:06.048 xcodebuild[7600:5325300] [MT] iPhoneConnect: 📱<DVTiOSDevice (0x7fe58331b2d0), Corey’s iPhone, iPhone, 13.5.1 (17F80), 00008030-000A64140AF0802E>: downgrading native architecture from arm64e to arm64 for com.apple.platform.iphoneos:13.5.1
2021-12-06 09:05:06.335 xcodebuild[7600:5325300] [MT] iPhoneConnect: 📱<DVTiOSDevice (0x7fe58331b2d0), Corey’s iPhone, iPhone, 13.5.1 (17F80), 00008030-000A64140AF0802E>: downgrading native architecture from arm64e to arm64 for com.apple.platform.iphoneos:13.5.1
2021-12-06 09:05:06.336 xcodebuild[7600:5325300] [MT] iPhoneConnect: 📱<DVTiOSDevice (0x7fe58331b2d0), Corey’s iPhone, iPhone, 13.5.1 (17F80), 00008030-000A64140AF0802E>: downgrading native architecture from arm64e to arm64 for com.apple.platform.iphoneos:13.5.1
2021-12-06 09:05:06.343 xcodebuild[7600:5325300] [MT] iPhoneConnect: 📱<DVTiOSDevice (0x7fe58331b2d0), Corey’s iPhone, iPhone, 13.5.1 (17F80), 00008030-000A64140AF0802E>: downgrading native architecture from arm64e to arm64 for com.apple.platform.iphoneos:13.5.1

```
