// This file was autogenerated by calcdeps.py
goog.addDependency("../../../javascript/webdriver-bootstrap.js", [], []);
goog.addDependency("../../../javascript/atoms/action.js", ['bot.action'], ['bot', 'bot.Device', 'bot.Error', 'bot.ErrorCode', 'bot.Keyboard', 'bot.Mouse', 'bot.Touchscreen', 'bot.dom', 'bot.events', 'bot.events.EventType', 'bot.locators', 'goog.array', 'goog.dom', 'goog.dom.NodeType', 'goog.dom.TagName', 'goog.math.Coordinate', 'goog.math.Vec2', 'goog.userAgent']);
goog.addDependency("../../../javascript/atoms/bot.js", ['bot'], ['goog.userAgent']);
goog.addDependency("../../../javascript/atoms/device.js", ['bot.Device'], ['bot', 'bot.dom', 'bot.userAgent']);
goog.addDependency("../../../javascript/atoms/dom.js", ['bot.dom'], ['bot', 'bot.locators.xpath', 'goog.array', 'goog.dom', 'goog.dom.NodeIterator', 'goog.dom.NodeType', 'goog.dom.TagName', 'goog.math.Coordinate', 'goog.math.Rect', 'goog.math.Size', 'goog.string', 'goog.style']);
goog.addDependency("../../../javascript/atoms/error.js", ['bot.Error', 'bot.ErrorCode'], ['goog.debug.Error', 'goog.object']);
goog.addDependency("../../../javascript/atoms/events.js", ['bot.events', 'bot.events.EventType'], ['bot.Error', 'bot.ErrorCode', 'bot.userAgent', 'goog.array', 'goog.dom', 'goog.userAgent', 'goog.userAgent.product']);
goog.addDependency("../../../javascript/atoms/frame.js", ['bot.frame'], ['bot.locators', 'goog.array', 'goog.dom']);
goog.addDependency("../../../javascript/atoms/inject.js", ['bot.inject', 'bot.inject.cache'], ['bot', 'bot.Error', 'bot.ErrorCode', 'goog.array', 'goog.dom', 'goog.dom.NodeType', 'goog.events', 'goog.json', 'goog.object']);
goog.addDependency("../../../javascript/atoms/keyboard.js", ['bot.Keyboard', 'bot.Keyboard.Key', 'bot.Keyboard.Keys'], ['bot.Device', 'bot.Error', 'bot.ErrorCode', 'bot.dom', 'bot.events.EventType', 'goog.array', 'goog.dom.selection', 'goog.events.KeyCodes', 'goog.structs.Set', 'goog.userAgent']);
goog.addDependency("../../../javascript/atoms/mouse.js", ['bot.Mouse', 'bot.Mouse.Button'], ['bot', 'bot.Device', 'bot.Error', 'bot.ErrorCode', 'bot.dom', 'bot.events.EventType', 'bot.userAgent', 'goog.dom', 'goog.dom.Range', 'goog.dom.TagName', 'goog.math.Coordinate', 'goog.style', 'goog.userAgent']);
goog.addDependency("../../../javascript/atoms/script.js", ['bot.script'], ['bot.Error', 'bot.ErrorCode', 'goog.events', 'goog.events.EventType']);
goog.addDependency("../../../javascript/atoms/touchscreen.js", ['bot.Touchscreen'], ['bot', 'bot.Device', 'bot.Error', 'bot.ErrorCode', 'bot.events.EventType', 'goog.math.Coordinate', 'goog.style', 'goog.userAgent.product']);
goog.addDependency("../../../javascript/atoms/userAgent.js", ['bot.userAgent'], ['goog.userAgent', 'goog.userAgent.product', 'goog.userAgent.product.isVersion']);
goog.addDependency("../../../javascript/atoms/window.js", ['bot.window'], ['bot', 'bot.Error', 'bot.ErrorCode', 'goog.array', 'goog.dom', 'goog.math.Coordinate', 'goog.math.Size', 'goog.userAgent']);
goog.addDependency("../../../javascript/atoms/html5/appcache.js", ['bot.appcache'], ['bot', 'bot.Error', 'bot.ErrorCode', 'bot.html5']);
goog.addDependency("../../../javascript/atoms/html5/connection.js", ['bot.connection'], ['bot', 'bot.Error', 'bot.ErrorCode', 'bot.html5']);
goog.addDependency("../../../javascript/atoms/html5/database.js", ['bot.storage.database', 'bot.storage.database.ResultSet'], ['bot', 'bot.Error', 'bot.ErrorCode', 'bot.html5']);
goog.addDependency("../../../javascript/atoms/html5/html5_browser.js", ['bot.html5'], ['bot', 'bot.Error', 'bot.ErrorCode', 'bot.userAgent', 'goog.userAgent']);
goog.addDependency("../../../javascript/atoms/html5/location.js", ['bot.geolocation'], ['bot', 'bot.html5']);
goog.addDependency("../../../javascript/atoms/html5/storage.js", ['bot.storage', 'bot.storage.Storage'], ['bot', 'bot.Error', 'bot.ErrorCode', 'bot.html5']);
goog.addDependency("../../../javascript/atoms/locators/classname.js", ['bot.locators.className'], ['goog.array', 'goog.dom', 'goog.dom.DomHelper', 'goog.string']);
goog.addDependency("../../../javascript/atoms/locators/css.js", ['bot.locators.css'], ['goog.array', 'goog.dom', 'goog.dom.NodeType', 'goog.object', 'goog.string', 'goog.userAgent']);
goog.addDependency("../../../javascript/atoms/locators/id.js", ['bot.locators.id'], ['bot.dom', 'goog.array', 'goog.dom']);
goog.addDependency("../../../javascript/atoms/locators/link_text.js", ['bot.locators.linkText', 'bot.locators.partialLinkText'], ['bot', 'bot.dom', 'goog.array', 'goog.dom', 'goog.dom.DomHelper']);
goog.addDependency("../../../javascript/atoms/locators/locators.js", ['bot.locators'], ['bot', 'bot.locators.className', 'bot.locators.css', 'bot.locators.id', 'bot.locators.linkText', 'bot.locators.name', 'bot.locators.partialLinkText', 'bot.locators.tagName', 'bot.locators.xpath', 'goog.array', 'goog.object']);
goog.addDependency("../../../javascript/atoms/locators/name.js", ['bot.locators.name'], ['bot.dom', 'goog.array', 'goog.dom']);
goog.addDependency("../../../javascript/atoms/locators/tag_name.js", ['bot.locators.tagName'], ['goog.array']);
goog.addDependency("../../../javascript/atoms/locators/xpath.js", ['bot.locators.xpath'], ['bot', 'bot.Error', 'bot.ErrorCode', 'goog.array', 'goog.dom', 'goog.dom.NodeType', 'goog.userAgent']);
goog.addDependency("../../../javascript/atoms/test/jquery.min.js", [], []);
goog.addDependency("../../../javascript/atoms/test/test_bootstrap.js", [], []);
goog.addDependency("../../../javascript/atoms/test/text_util.js", [], ['bot.dom', 'goog.array', 'goog.dom', 'goog.testing.TestCase']);
goog.addDependency("../../../javascript/atoms/test/window_focus.js", [], []);
goog.addDependency("../../../javascript/chrome-driver/atoms.js", ['webdriver.chrome'], ['goog.dom', 'goog.math.Coordinate', 'goog.math.Rect', 'goog.math.Size', 'goog.style']);
goog.addDependency("../../../javascript/firefox-driver/extension/components/badCertListener.js", [], []);
goog.addDependency("../../../javascript/firefox-driver/extension/components/dispatcher.js", [], []);
goog.addDependency("../../../javascript/firefox-driver/extension/components/driver-component.js", [], []);
goog.addDependency("../../../javascript/firefox-driver/extension/components/firefoxDriver.js", [], []);
goog.addDependency("../../../javascript/firefox-driver/extension/components/httpd.js", [], []);
goog.addDependency("../../../javascript/firefox-driver/extension/components/json2.js", [], []);
goog.addDependency("../../../javascript/firefox-driver/extension/components/request.js", [], []);
goog.addDependency("../../../javascript/firefox-driver/extension/components/response.js", [], []);
goog.addDependency("../../../javascript/firefox-driver/extension/components/screenshooter.js", [], []);
goog.addDependency("../../../javascript/firefox-driver/extension/components/socketListener.js", [], []);
goog.addDependency("../../../javascript/firefox-driver/extension/components/webdriverserver.js", [], []);
goog.addDependency("../../../javascript/firefox-driver/extension/components/webLoadingListener.js", [], []);
goog.addDependency("../../../javascript/firefox-driver/extension/components/wrappedElement.js", [], []);
goog.addDependency("../../../javascript/firefox-driver/extension/content/server.js", [], []);
goog.addDependency("../../../javascript/firefox-driver/js/errorcode.js", ['fxdriver.error'], []);
goog.addDependency("../../../javascript/firefox-driver/js/evaluate.js", [], []);
goog.addDependency("../../../javascript/firefox-driver/js/events.js", ['fxdriver.events'], ['Utils', 'fxdriver.Logger', 'fxdriver.moz', 'goog.style']);
goog.addDependency("../../../javascript/firefox-driver/js/exported_symbols.js", [], ['fxdriver.events']);
goog.addDependency("../../../javascript/firefox-driver/js/externs.js", [], []);
goog.addDependency("../../../javascript/firefox-driver/js/firefox-utils.js", ['fxdriver.utils'], ['bot.userAgent', 'bot.Error', 'bot.ErrorCode', 'fxdriver.Logger', 'fxdriver.moz', 'goog.array']);
goog.addDependency("../../../javascript/firefox-driver/js/locators.js", ['webdriver.firefox.locators'], ['bot.locators', 'bot.userAgent', 'fxdriver.moz', 'goog.dom']);
goog.addDependency("../../../javascript/firefox-driver/js/logging.js", ['fxdriver.Logger', 'fxdriver.debug', 'fxdriver.debug.ConsoleFormatter'], ['goog.debug.Formatter', 'goog.debug.Logger', 'goog.debug.LogRecord', 'goog.debug.TextFormatter']);
goog.addDependency("../../../javascript/firefox-driver/js/modals.js", ['fxdriver.modals'], ['bot.ErrorCode', 'fxdriver.Logger', 'fxdriver.Timer', 'fxdriver.moz', 'fxdriver.utils']);
goog.addDependency("../../../javascript/firefox-driver/js/moz.js", ['fxdriver.moz'], []);
goog.addDependency("../../../javascript/firefox-driver/js/nsCommandProcessor.js", [], ['Utils', 'bot.ErrorCode', 'fxdriver.Logger', 'fxdriver.Timer', 'fxdriver.error', 'fxdriver.moz']);
goog.addDependency("../../../javascript/firefox-driver/js/preconditions.js", ['fxdriver.preconditions'], ['bot.dom', 'Utils']);
goog.addDependency("../../../javascript/firefox-driver/js/promptService.js", [], ['fxdriver.Logger', 'fxdriver.modals', 'fxdriver.moz', 'goog.array']);
goog.addDependency("../../../javascript/firefox-driver/js/sessionstore.js", [], ['fxdriver.Logger', 'fxdriver.moz']);
goog.addDependency("../../../javascript/firefox-driver/js/syntheticMouse.js", ['SyntheticMouse'], ['Utils', 'bot.ErrorCode', 'bot.Mouse', 'bot.events.EventType', 'bot.action', 'bot.dom', 'bot.events', 'bot.window', 'fxdriver.moz', 'fxdriver.utils', 'fxdriver.Logger', 'goog.events.EventType', 'goog.math.Coordinate']);
goog.addDependency("../../../javascript/firefox-driver/js/timer.js", ['fxdriver.Timer'], []);
goog.addDependency("../../../javascript/firefox-driver/js/utils.js", ['Utils'], ['bot.ErrorCode', 'bot.dom', 'bot.userAgent', 'fxdriver.Logger', 'fxdriver.moz', 'fxdriver.utils', 'goog.dom.TagName', 'goog.style']);
goog.addDependency("../../../javascript/firefox-driver/js/wdsession.js", [], ['fxdriver.moz']);
goog.addDependency("../../../javascript/iphone-driver/script.js", ['webdriver.iphone'], ['bot.inject']);
goog.addDependency("../../../javascript/jsunit/app/jsUnitCore.js", [], []);
goog.addDependency("../../../javascript/jsunit/app/jsUnitMockTimeout.js", [], []);
goog.addDependency("../../../javascript/jsunit/app/jsUnitTestManager.js", [], []);
goog.addDependency("../../../javascript/jsunit/app/jsUnitTestSuite.js", [], []);
goog.addDependency("../../../javascript/jsunit/app/jsUnitTracer.js", [], []);
goog.addDependency("../../../javascript/jsunit/app/jsUnitVersionCheck.js", [], []);
goog.addDependency("../../../javascript/jsunit/app/xbDebug.js", [], []);
goog.addDependency("../../../javascript/remote/client.js", [], ['remote.ui.Client']);
goog.addDependency("../../../javascript/remote/ui/actiondialog.js", ['remote.ui.ActionDialog'], ['goog.dom', 'goog.events', 'goog.ui.Component.EventType', 'goog.ui.Dialog']);
goog.addDependency("../../../javascript/remote/ui/banner.js", ['remote.ui.Banner'], ['goog.dom', 'goog.events', 'goog.events.EventType', 'goog.style', 'goog.ui.Component']);
goog.addDependency("../../../javascript/remote/ui/client.js", ['remote.ui.Client'], ['goog.Disposable', 'goog.Uri', 'goog.array', 'goog.debug.Console', 'goog.debug.Logger', 'goog.dom', 'goog.events', 'remote.ui.Banner', 'remote.ui.Event.Type', 'remote.ui.ServerInfo', 'remote.ui.SessionContainer', 'remote.ui.ScreenshotDialog', 'webdriver.Command', 'webdriver.CommandName', 'webdriver.Session', 'webdriver.error', 'webdriver.http.Executor', 'webdriver.http.XhrClient', 'webdriver.promise']);
goog.addDependency("../../../javascript/remote/ui/controlblock.js", ['remote.ui.createControlBlock'], ['goog.array', 'goog.dom', 'goog.dom.TagName']);
goog.addDependency("../../../javascript/remote/ui/createsessiondialog.js", ['remote.ui.CreateSessionDialog'], ['goog.dom.TagName', 'goog.ui.Component.EventType', 'remote.ui.ActionDialog']);
goog.addDependency("../../../javascript/remote/ui/event.js", ['remote.ui.Event', 'remote.ui.Event.Type'], ['goog.events.Event']);
goog.addDependency("../../../javascript/remote/ui/fieldset.js", ['remote.ui.FieldSet'], ['goog.ui.Component']);
goog.addDependency("../../../javascript/remote/ui/jsontooltip.js", ['remote.ui.JsonTooltip'], ['goog.dom', 'goog.dom.TagName', 'goog.events', 'goog.events.EventType', 'goog.format.JsonPrettyPrinter', 'goog.ui.AdvancedTooltip']);
goog.addDependency("../../../javascript/remote/ui/openscriptdialog.js", ['remote.ui.OpenScriptDialog'], ['goog.dom.TagName', 'goog.dom.classes', 'goog.ui.Component.EventType', 'goog.ui.LabelInput', 'remote.ui.ActionDialog']);
goog.addDependency("../../../javascript/remote/ui/screenshotdialog.js", ['remote.ui.ScreenshotDialog', 'remote.ui.ScreenshotDialog.State'], ['goog.dom.TagName', 'goog.style', 'goog.ui.Dialog']);
goog.addDependency("../../../javascript/remote/ui/serverinfo.js", ['remote.ui.ServerInfo'], ['goog.dom', 'goog.dom.TagName', 'goog.ui.Component']);
goog.addDependency("../../../javascript/remote/ui/sessioncontainer.js", ['remote.ui.SessionContainer', 'remote.ui.SessionContainer.SessionTab_'], ['goog.array', 'goog.dom.TagName', 'goog.events', 'goog.events.Event', 'goog.events.EventType', 'goog.structs.Map', 'goog.style', 'goog.ui.Component.EventType', 'goog.ui.Tab', 'goog.ui.TabBar', 'remote.ui.CreateSessionDialog', 'remote.ui.Event', 'remote.ui.FieldSet', 'remote.ui.SessionView', 'remote.ui.createControlBlock']);
goog.addDependency("../../../javascript/remote/ui/sessionview.js", ['remote.ui.SessionView'], ['goog.dom', 'goog.dom.TagName', 'goog.events.Event', 'goog.math.Box', 'goog.style', 'goog.ui.Component', 'goog.ui.Button', 'goog.ui.Dialog', 'remote.ui.Event', 'remote.ui.JsonTooltip', 'remote.ui.OpenScriptDialog', 'remote.ui.createControlBlock']);
goog.addDependency("../../../javascript/selenium-atoms/browserbot.js", ['core.browserbot'], ['bot.locators', 'bot.dom', 'core.locators', 'core.patternMatcher']);
goog.addDependency("../../../javascript/selenium-atoms/core.js", ['core.Error'], []);
goog.addDependency("../../../javascript/selenium-atoms/events.js", ['core.events'], ['bot.dom', 'bot.events', 'bot.events.EventType', 'core.Error', 'core.locators', 'goog.dom', 'goog.dom.TagName']);
goog.addDependency("../../../javascript/selenium-atoms/filters.js", ['core.filters'], ['bot.dom', 'core.Error', 'goog.array']);
goog.addDependency("../../../javascript/selenium-atoms/firefox-chrome.js", ['core.firefox'], []);
goog.addDependency("../../../javascript/selenium-atoms/inject.js", ['core.inject'], ['bot.inject', 'goog.array', 'goog.json', 'goog.object']);
goog.addDependency("../../../javascript/selenium-atoms/locator_strategies.js", ['core.LocatorStrategies'], ['bot.inject.cache', 'bot.locators', 'core.Error', 'core.filters', 'goog.string']);
goog.addDependency("../../../javascript/selenium-atoms/pattern_matcher.js", ['core.patternMatcher'], []);
goog.addDependency("../../../javascript/selenium-atoms/script.js", ['core.script'], ['bot.script']);
goog.addDependency("../../../javascript/selenium-atoms/se_element.js", ['core.element'], ['bot.dom', 'core.Error', 'core.locators']);
goog.addDependency("../../../javascript/selenium-atoms/se_locators.js", ['core.locators', 'core.locators.Locator'], ['core.Error', 'core.LocatorStrategies', 'goog.dom.NodeType', 'goog.string']);
goog.addDependency("../../../javascript/selenium-atoms/select.js", ['core.select', 'core.select.option'], ['bot.action', 'bot.dom', 'core.Error', 'core.locators', 'core.patternMatcher']);
goog.addDependency("../../../javascript/selenium-atoms/testbase.js", [], []);
goog.addDependency("../../../javascript/selenium-atoms/text.js", ['core.text'], ['bot.dom', 'core.locators', 'core.patternMatcher', 'goog.dom', 'goog.dom.NodeType', 'goog.string', 'goog.userAgent']);
goog.addDependency("../../../javascript/selenium-core/lib/prototype.js", [], []);
goog.addDependency("../../../javascript/selenium-core/lib/snapsie.js", [], []);
goog.addDependency("../../../javascript/selenium-core/lib/cssQuery/cssQuery-p.js", [], []);
goog.addDependency("../../../javascript/selenium-core/lib/cssQuery/src/cssQuery-level2.js", [], []);
goog.addDependency("../../../javascript/selenium-core/lib/cssQuery/src/cssQuery-level3.js", [], []);
goog.addDependency("../../../javascript/selenium-core/lib/cssQuery/src/cssQuery-standard.js", [], []);
goog.addDependency("../../../javascript/selenium-core/lib/cssQuery/src/cssQuery.js", [], []);
goog.addDependency("../../../javascript/selenium-core/lib/scriptaculous/builder.js", [], []);
goog.addDependency("../../../javascript/selenium-core/lib/scriptaculous/controls.js", [], []);
goog.addDependency("../../../javascript/selenium-core/lib/scriptaculous/dragdrop.js", [], []);
goog.addDependency("../../../javascript/selenium-core/lib/scriptaculous/effects.js", [], []);
goog.addDependency("../../../javascript/selenium-core/lib/scriptaculous/scriptaculous.js", [], []);
goog.addDependency("../../../javascript/selenium-core/lib/scriptaculous/slider.js", [], []);
goog.addDependency("../../../javascript/selenium-core/lib/scriptaculous/unittest.js", [], []);
goog.addDependency("../../../javascript/selenium-core/scripts/find_matching_child.js", [], []);
goog.addDependency("../../../javascript/selenium-core/scripts/htmlutils.js", [], []);
goog.addDependency("../../../javascript/selenium-core/scripts/selenium-api.js", [], []);
goog.addDependency("../../../javascript/selenium-core/scripts/selenium-browserbot.js", [], []);
goog.addDependency("../../../javascript/selenium-core/scripts/selenium-browserdetect.js", [], []);
goog.addDependency("../../../javascript/selenium-core/scripts/selenium-commandhandlers.js", [], []);
goog.addDependency("../../../javascript/selenium-core/scripts/selenium-executionloop.js", [], []);
goog.addDependency("../../../javascript/selenium-core/scripts/selenium-logging.js", [], []);
goog.addDependency("../../../javascript/selenium-core/scripts/selenium-remoterunner.js", [], []);
goog.addDependency("../../../javascript/selenium-core/scripts/selenium-testrunner.js", [], []);
goog.addDependency("../../../javascript/selenium-core/scripts/selenium-version.js", [], []);
goog.addDependency("../../../javascript/selenium-core/scripts/ui-element.js", [], []);
goog.addDependency("../../../javascript/selenium-core/scripts/ui-map-sample.js", [], []);
goog.addDependency("../../../javascript/selenium-core/scripts/user-extensions.js", [], []);
goog.addDependency("../../../javascript/selenium-core/scripts/xmlextras.js", [], []);
goog.addDependency("../../../javascript/selenium-core/test/AlertHandlingTest.js", [], []);
goog.addDependency("../../../javascript/selenium-core/test/AssertTest.js", [], []);
goog.addDependency("../../../javascript/selenium-core/test/BrowserBotFrameFinderTest.js", [], []);
goog.addDependency("../../../javascript/selenium-core/test/BrowserBotTest.js", [], []);
goog.addDependency("../../../javascript/selenium-core/test/CommandFactoryTest.js", [], []);
goog.addDependency("../../../javascript/selenium-core/test/CommandHandlerTest.js", [], []);
goog.addDependency("../../../javascript/selenium-core/test/ConfirmHandlingTest.js", [], []);
goog.addDependency("../../../javascript/selenium-core/test/CookieTest.js", [], []);
goog.addDependency("../../../javascript/selenium-core/test/ErrorCheckingCommandTest.js", [], []);
goog.addDependency("../../../javascript/selenium-core/test/HtmlUtilTest.js", [], []);
goog.addDependency("../../../javascript/selenium-core/test/OptionLocatorTest.js", [], []);
goog.addDependency("../../../javascript/selenium-core/test/PageBotAccessorTest.js", [], []);
goog.addDependency("../../../javascript/selenium-core/test/PatternMatcherTest.js", [], []);
goog.addDependency("../../../javascript/selenium-core/test/RemoteRunnerTest.js", [], []);
goog.addDependency("../../../javascript/selenium-core/test/SampleTest.js", [], []);
goog.addDependency("../../../javascript/selenium-core/test/SeleniumApiTest.js", [], []);
goog.addDependency("../../../javascript/selenium-core/test/SeleniumParameterTest.js", [], []);
goog.addDependency("../../../javascript/selenium-core/test/TestLoopHandleErrorTest.js", [], []);
goog.addDependency("../../../javascript/selenium-core/test/UIElementTest.js", [], []);
goog.addDependency("../../../javascript/selenium-core/xpath/dom.js", [], []);
goog.addDependency("../../../javascript/selenium-core/xpath/javascript-xpath-0.1.11.js", [], []);
goog.addDependency("../../../javascript/selenium-core/xpath/util.js", [], []);
goog.addDependency("../../../javascript/selenium-core/xpath/xmltoken.js", [], []);
goog.addDependency("../../../javascript/selenium-core/xpath/xpath.js", [], []);
goog.addDependency("../../../javascript/shared-extension/src/dommessenger.js", [], []);
goog.addDependency("../../../javascript/watir-atoms/watir.js", ['watir'], ['goog.dom.Range', 'goog.iter', 'goog.array']);
goog.addDependency("../../../javascript/webdriver/builder.js", ['webdriver.Builder'], ['goog.string', 'webdriver.Command', 'webdriver.CommandName', 'webdriver.FirefoxDomExecutor', 'webdriver.Session', 'webdriver.WebDriver', 'webdriver.error', 'webdriver.http.Executor', 'webdriver.http.Response', 'webdriver.http.XhrClient', 'webdriver.http.JsonpClient', 'webdriver.node.HttpClient', 'webdriver.process', 'webdriver.promise.Deferred']);
goog.addDependency("../../../javascript/webdriver/command.js", ['webdriver.Command', 'webdriver.CommandExecutor', 'webdriver.CommandName', 'webdriver.CommandResponse'], []);
goog.addDependency("../../../javascript/webdriver/error.js", ['webdriver.error'], ['bot.Error', 'bot.ErrorCode']);
goog.addDependency("../../../javascript/webdriver/events.js", ['webdriver.EventEmitter'], []);
goog.addDependency("../../../javascript/webdriver/firefoxdomexecutor.js", ['webdriver.FirefoxDomExecutor'], ['goog.json', 'goog.userAgent.product', 'webdriver.Command', 'webdriver.CommandName', 'webdriver.error']);
goog.addDependency("../../../javascript/webdriver/locators.js", ['webdriver.Locator', 'webdriver.Locator.Strategy'], ['goog.object', 'goog.string']);
goog.addDependency("../../../javascript/webdriver/process.js", ['webdriver.process'], ['goog.Uri', 'goog.array', 'goog.json']);
goog.addDependency("../../../javascript/webdriver/promise.js", ['webdriver.promise', 'webdriver.promise.Application', 'webdriver.promise.Deferred', 'webdriver.promise.Promise'], ['goog.array', 'goog.object', 'webdriver.EventEmitter']);
goog.addDependency("../../../javascript/webdriver/session.js", ['webdriver.Session'], []);
goog.addDependency("../../../javascript/webdriver/webdriver.js", ['webdriver.Key', 'webdriver.WebDriver', 'webdriver.WebDriver.Navigation', 'webdriver.WebDriver.Options', 'webdriver.WebDriver.TargetLocator', 'webdriver.WebDriver.Timeouts', 'webdriver.WebElement'], ['bot.Error', 'bot.ErrorCode', 'goog.array', 'goog.object', 'webdriver.Command', 'webdriver.CommandName', 'webdriver.Locator', 'webdriver.Session', 'webdriver.error', 'webdriver.promise', 'webdriver.promise.Application', 'webdriver.promise.Deferred', 'webdriver.promise.Promise']);
goog.addDependency("../../../javascript/webdriver/atoms/element.js", ['webdriver.atoms.element'], ['bot.dom', 'goog.dom', 'goog.dom.TagName', 'goog.math', 'goog.string', 'goog.style']);
goog.addDependency("../../../javascript/webdriver/atoms/inject/action.js", ['webdriver.atoms.inject.action'], ['bot.action', 'bot.inject', 'goog.dom.selection']);
goog.addDependency("../../../javascript/webdriver/atoms/inject/dom.js", ['webdriver.atoms.inject.dom'], ['bot.action', 'bot.dom', 'bot.inject', 'webdriver.atoms.element']);
goog.addDependency("../../../javascript/webdriver/atoms/inject/execute_script.js", ['webdriver.atoms.inject'], ['bot.inject', 'bot.inject.cache']);
goog.addDependency("../../../javascript/webdriver/atoms/inject/find_element.js", ['webdriver.atoms.inject.locators'], ['bot.inject', 'bot.locators']);
goog.addDependency("../../../javascript/webdriver/atoms/inject/frame.js", ['webdriver.atoms.inject.frame'], ['bot.frame', 'bot.inject', 'bot.inject.cache']);
goog.addDependency("../../../javascript/webdriver/atoms/inject/local_storage.js", ['webdriver.atoms.inject.storage.local'], ['bot.inject', 'webdriver.atoms.storage.local']);
goog.addDependency("../../../javascript/webdriver/atoms/inject/session_storage.js", ['webdriver.atoms.inject.storage.session'], ['bot.inject', 'webdriver.atoms.storage.session']);
goog.addDependency("../../../javascript/webdriver/atoms/inject/sql_database.js", ['webdriver.atoms.inject.storage.database'], ['bot.Error', 'bot.ErrorCode', 'bot.inject', 'bot.storage.database']);
goog.addDependency("../../../javascript/webdriver/atoms/storage/local_storage.js", ['webdriver.atoms.storage.local'], ['bot.storage']);
goog.addDependency("../../../javascript/webdriver/atoms/storage/session_storage.js", ['webdriver.atoms.storage.session'], ['bot.storage']);
goog.addDependency("../../../javascript/webdriver/http/corsclient.js", ['webdriver.http.CorsClient'], ['goog.json', 'webdriver.http.Response']);
goog.addDependency("../../../javascript/webdriver/http/http.js", ['webdriver.http.Client', 'webdriver.http.Executor', 'webdriver.http.Request', 'webdriver.http.Response'], ['bot.ErrorCode', 'goog.json', 'webdriver.CommandName', 'webdriver.promise.Deferred']);
goog.addDependency("../../../javascript/webdriver/http/jsonpclient.js", ['webdriver.http.JsonpClient'], ['goog.dom', 'goog.json', 'webdriver.http.Response']);
goog.addDependency("../../../javascript/webdriver/http/xhrclient.js", ['webdriver.http.XhrClient'], ['goog.json', 'webdriver.http.Response']);
goog.addDependency("../../../javascript/webdriver/node/demo.js", [], []);
goog.addDependency("../../../javascript/webdriver/node/node.js", ['webdriver.node', 'webdriver.node.HttpClient'], ['webdriver.http.Response', 'webdriver.process']);
goog.addDependency("../../../javascript/webdriver/node/optparse.js", [], []);
goog.addDependency("../../../javascript/webdriver/test/app_tester.js", ['webdriver.test.AppTester'], ['goog.testing.PropertyReplacer', 'webdriver.promise.Application', 'webdriver.test.testutil']);
goog.addDependency("../../../javascript/webdriver/test/test_bootstrap.js", [], []);
goog.addDependency("../../../javascript/webdriver/test/testutil.js", ['webdriver.test.testutil'], ['goog.array', 'goog.json', 'goog.string', 'goog.testing.MockClock', 'goog.testing.recordFunction']);
goog.addDependency("../../../javascript/webdriver/test_e2e/testutil.js", ['webdriver.test_e2e.TestUtil'], []);
goog.addDependency("../../../javascript/webdriver/testing/asserts.js", ['webdriver.testing.asserts', 'webdriver.testing.asserts.Matcher'], ['goog.array', 'webdriver.promise']);
goog.addDependency("../../../javascript/webdriver/testing/client.js", ['webdriver.testing.Client'], ['goog.net.XmlHttp', 'goog.json']);
goog.addDependency("../../../javascript/webdriver/testing/jsunit.js", ['webdriver.testing.jsunit', 'webdriver.testing.jsunit.TestRunner'], ['goog.testing.TestRunner', 'webdriver.testing.Client', 'webdriver.testing.TestCase']);
goog.addDependency("../../../javascript/webdriver/testing/testcase.js", ['webdriver.testing.TestCase'], ['goog.array', 'goog.testing.TestCase', 'webdriver.promise.Application', 'webdriver.testing.asserts']);
