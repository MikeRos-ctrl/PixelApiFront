import {
  require_react
} from "./chunk-WFDAN2ZR.js";
import {
  __commonJS,
  __toESM
} from "./chunk-624QZG55.js";

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/@stripe/react-stripe-js/dist/react-stripe.esm.mjs
var import_react = __toESM(require_react(), 1);
var import_prop_types = __toESM(require_prop_types(), 1);
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var useAttachEvent = function useAttachEvent2(element, event, cb) {
  var cbDefined = !!cb;
  var cbRef = import_react.default.useRef(cb);
  import_react.default.useEffect(function() {
    cbRef.current = cb;
  }, [cb]);
  import_react.default.useEffect(function() {
    if (!cbDefined || !element) {
      return function() {
      };
    }
    var decoratedCb = function decoratedCb2() {
      if (cbRef.current) {
        cbRef.current.apply(cbRef, arguments);
      }
    };
    element.on(event, decoratedCb);
    return function() {
      element.off(event, decoratedCb);
    };
  }, [cbDefined, event, element, cbRef]);
};
var usePrevious = function usePrevious2(value) {
  var ref = import_react.default.useRef(value);
  import_react.default.useEffect(function() {
    ref.current = value;
  }, [value]);
  return ref.current;
};
var isUnknownObject = function isUnknownObject2(raw) {
  return raw !== null && _typeof(raw) === "object";
};
var isPromise = function isPromise2(raw) {
  return isUnknownObject(raw) && typeof raw.then === "function";
};
var isStripe = function isStripe2(raw) {
  return isUnknownObject(raw) && typeof raw.elements === "function" && typeof raw.createToken === "function" && typeof raw.createPaymentMethod === "function" && typeof raw.confirmCardPayment === "function";
};
var PLAIN_OBJECT_STR = "[object Object]";
var isEqual = function isEqual2(left, right) {
  if (!isUnknownObject(left) || !isUnknownObject(right)) {
    return left === right;
  }
  var leftArray = Array.isArray(left);
  var rightArray = Array.isArray(right);
  if (leftArray !== rightArray)
    return false;
  var leftPlainObject = Object.prototype.toString.call(left) === PLAIN_OBJECT_STR;
  var rightPlainObject = Object.prototype.toString.call(right) === PLAIN_OBJECT_STR;
  if (leftPlainObject !== rightPlainObject)
    return false;
  if (!leftPlainObject && !leftArray)
    return left === right;
  var leftKeys = Object.keys(left);
  var rightKeys = Object.keys(right);
  if (leftKeys.length !== rightKeys.length)
    return false;
  var keySet = {};
  for (var i = 0; i < leftKeys.length; i += 1) {
    keySet[leftKeys[i]] = true;
  }
  for (var _i = 0; _i < rightKeys.length; _i += 1) {
    keySet[rightKeys[_i]] = true;
  }
  var allKeys = Object.keys(keySet);
  if (allKeys.length !== leftKeys.length) {
    return false;
  }
  var l = left;
  var r = right;
  var pred = function pred2(key) {
    return isEqual2(l[key], r[key]);
  };
  return allKeys.every(pred);
};
var extractAllowedOptionsUpdates = function extractAllowedOptionsUpdates2(options, prevOptions, immutableKeys) {
  if (!isUnknownObject(options)) {
    return null;
  }
  return Object.keys(options).reduce(function(newOptions, key) {
    var isUpdated = !isUnknownObject(prevOptions) || !isEqual(options[key], prevOptions[key]);
    if (immutableKeys.includes(key)) {
      if (isUpdated) {
        console.warn("Unsupported prop change: options.".concat(key, " is not a mutable property."));
      }
      return newOptions;
    }
    if (!isUpdated) {
      return newOptions;
    }
    return _objectSpread2(_objectSpread2({}, newOptions || {}), {}, _defineProperty({}, key, options[key]));
  }, null);
};
var INVALID_STRIPE_ERROR$2 = "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.";
var validateStripe = function validateStripe2(maybeStripe) {
  var errorMsg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : INVALID_STRIPE_ERROR$2;
  if (maybeStripe === null || isStripe(maybeStripe)) {
    return maybeStripe;
  }
  throw new Error(errorMsg);
};
var parseStripeProp = function parseStripeProp2(raw) {
  var errorMsg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : INVALID_STRIPE_ERROR$2;
  if (isPromise(raw)) {
    return {
      tag: "async",
      stripePromise: Promise.resolve(raw).then(function(result) {
        return validateStripe(result, errorMsg);
      })
    };
  }
  var stripe = validateStripe(raw, errorMsg);
  if (stripe === null) {
    return {
      tag: "empty"
    };
  }
  return {
    tag: "sync",
    stripe
  };
};
var registerWithStripeJs = function registerWithStripeJs2(stripe) {
  if (!stripe || !stripe._registerWrapper || !stripe.registerAppInfo) {
    return;
  }
  stripe._registerWrapper({
    name: "react-stripe-js",
    version: "2.7.3"
  });
  stripe.registerAppInfo({
    name: "react-stripe-js",
    version: "2.7.3",
    url: "https://stripe.com/docs/stripe-js/react"
  });
};
var ElementsContext = import_react.default.createContext(null);
ElementsContext.displayName = "ElementsContext";
var parseElementsContext = function parseElementsContext2(ctx, useCase) {
  if (!ctx) {
    throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(useCase, " in an <Elements> provider."));
  }
  return ctx;
};
var Elements = function Elements2(_ref) {
  var rawStripeProp = _ref.stripe, options = _ref.options, children = _ref.children;
  var parsed = import_react.default.useMemo(function() {
    return parseStripeProp(rawStripeProp);
  }, [rawStripeProp]);
  var _React$useState = import_react.default.useState(function() {
    return {
      stripe: parsed.tag === "sync" ? parsed.stripe : null,
      elements: parsed.tag === "sync" ? parsed.stripe.elements(options) : null
    };
  }), _React$useState2 = _slicedToArray(_React$useState, 2), ctx = _React$useState2[0], setContext = _React$useState2[1];
  import_react.default.useEffect(function() {
    var isMounted = true;
    var safeSetContext = function safeSetContext2(stripe) {
      setContext(function(ctx2) {
        if (ctx2.stripe)
          return ctx2;
        return {
          stripe,
          elements: stripe.elements(options)
        };
      });
    };
    if (parsed.tag === "async" && !ctx.stripe) {
      parsed.stripePromise.then(function(stripe) {
        if (stripe && isMounted) {
          safeSetContext(stripe);
        }
      });
    } else if (parsed.tag === "sync" && !ctx.stripe) {
      safeSetContext(parsed.stripe);
    }
    return function() {
      isMounted = false;
    };
  }, [parsed, ctx, options]);
  var prevStripe = usePrevious(rawStripeProp);
  import_react.default.useEffect(function() {
    if (prevStripe !== null && prevStripe !== rawStripeProp) {
      console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.");
    }
  }, [prevStripe, rawStripeProp]);
  var prevOptions = usePrevious(options);
  import_react.default.useEffect(function() {
    if (!ctx.elements) {
      return;
    }
    var updates = extractAllowedOptionsUpdates(options, prevOptions, ["clientSecret", "fonts"]);
    if (updates) {
      ctx.elements.update(updates);
    }
  }, [options, prevOptions, ctx.elements]);
  import_react.default.useEffect(function() {
    registerWithStripeJs(ctx.stripe);
  }, [ctx.stripe]);
  return import_react.default.createElement(ElementsContext.Provider, {
    value: ctx
  }, children);
};
Elements.propTypes = {
  stripe: import_prop_types.default.any,
  options: import_prop_types.default.object
};
var useElementsContextWithUseCase = function useElementsContextWithUseCase2(useCaseMessage) {
  var ctx = import_react.default.useContext(ElementsContext);
  return parseElementsContext(ctx, useCaseMessage);
};
var useElements = function useElements2() {
  var _useElementsContextWi = useElementsContextWithUseCase("calls useElements()"), elements = _useElementsContextWi.elements;
  return elements;
};
var ElementsConsumer = function ElementsConsumer2(_ref2) {
  var children = _ref2.children;
  var ctx = useElementsContextWithUseCase("mounts <ElementsConsumer>");
  return children(ctx);
};
ElementsConsumer.propTypes = {
  children: import_prop_types.default.func.isRequired
};
var _excluded = ["on", "session"];
var CustomCheckoutSdkContext = import_react.default.createContext(null);
CustomCheckoutSdkContext.displayName = "CustomCheckoutSdkContext";
var parseCustomCheckoutSdkContext = function parseCustomCheckoutSdkContext2(ctx, useCase) {
  if (!ctx) {
    throw new Error("Could not find CustomCheckoutProvider context; You need to wrap the part of your app that ".concat(useCase, " in an <CustomCheckoutProvider> provider."));
  }
  return ctx;
};
var CustomCheckoutContext = import_react.default.createContext(null);
CustomCheckoutContext.displayName = "CustomCheckoutContext";
var extractCustomCheckoutContextValue = function extractCustomCheckoutContextValue2(customCheckoutSdk, sessionState) {
  if (!customCheckoutSdk) {
    return null;
  }
  customCheckoutSdk.on;
  customCheckoutSdk.session;
  var actions = _objectWithoutProperties(customCheckoutSdk, _excluded);
  if (!sessionState) {
    return _objectSpread2(_objectSpread2({}, actions), customCheckoutSdk.session());
  }
  return _objectSpread2(_objectSpread2({}, actions), sessionState);
};
var INVALID_STRIPE_ERROR$1 = "Invalid prop `stripe` supplied to `CustomCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.";
var CustomCheckoutProvider = function CustomCheckoutProvider2(_ref) {
  var rawStripeProp = _ref.stripe, options = _ref.options, children = _ref.children;
  var parsed = import_react.default.useMemo(function() {
    return parseStripeProp(rawStripeProp, INVALID_STRIPE_ERROR$1);
  }, [rawStripeProp]);
  var _React$useState = import_react.default.useState(null), _React$useState2 = _slicedToArray(_React$useState, 2), session = _React$useState2[0], setSession = _React$useState2[1];
  var _React$useState3 = import_react.default.useState(function() {
    return {
      stripe: parsed.tag === "sync" ? parsed.stripe : null,
      customCheckoutSdk: null
    };
  }), _React$useState4 = _slicedToArray(_React$useState3, 2), ctx = _React$useState4[0], setContext = _React$useState4[1];
  var safeSetContext = function safeSetContext2(stripe, customCheckoutSdk) {
    setContext(function(ctx2) {
      if (ctx2.stripe && ctx2.customCheckoutSdk) {
        return ctx2;
      }
      return {
        stripe,
        customCheckoutSdk
      };
    });
  };
  var initCustomCheckoutCalledRef = import_react.default.useRef(false);
  import_react.default.useEffect(function() {
    var isMounted = true;
    if (parsed.tag === "async" && !ctx.stripe) {
      parsed.stripePromise.then(function(stripe) {
        if (stripe && isMounted && !initCustomCheckoutCalledRef.current) {
          initCustomCheckoutCalledRef.current = true;
          stripe.initCustomCheckout(options).then(function(customCheckoutSdk) {
            if (customCheckoutSdk) {
              safeSetContext(stripe, customCheckoutSdk);
              customCheckoutSdk.on("change", setSession);
            }
          });
        }
      });
    } else if (parsed.tag === "sync" && parsed.stripe && !initCustomCheckoutCalledRef.current) {
      initCustomCheckoutCalledRef.current = true;
      parsed.stripe.initCustomCheckout(options).then(function(customCheckoutSdk) {
        if (customCheckoutSdk) {
          safeSetContext(parsed.stripe, customCheckoutSdk);
          customCheckoutSdk.on("change", setSession);
        }
      });
    }
    return function() {
      isMounted = false;
    };
  }, [parsed, ctx, options, setSession]);
  var prevStripe = usePrevious(rawStripeProp);
  import_react.default.useEffect(function() {
    if (prevStripe !== null && prevStripe !== rawStripeProp) {
      console.warn("Unsupported prop change on CustomCheckoutProvider: You cannot change the `stripe` prop after setting it.");
    }
  }, [prevStripe, rawStripeProp]);
  var prevOptions = usePrevious(options);
  import_react.default.useEffect(function() {
    var _prevOptions$elements, _options$elementsOpti;
    if (!ctx.customCheckoutSdk) {
      return;
    }
    if (options.clientSecret && !isUnknownObject(prevOptions) && !isEqual(options.clientSecret, prevOptions.clientSecret)) {
      console.warn("Unsupported prop change: options.client_secret is not a mutable property.");
    }
    var previousAppearance = prevOptions === null || prevOptions === void 0 ? void 0 : (_prevOptions$elements = prevOptions.elementsOptions) === null || _prevOptions$elements === void 0 ? void 0 : _prevOptions$elements.appearance;
    var currentAppearance = options === null || options === void 0 ? void 0 : (_options$elementsOpti = options.elementsOptions) === null || _options$elementsOpti === void 0 ? void 0 : _options$elementsOpti.appearance;
    if (currentAppearance && !isEqual(currentAppearance, previousAppearance)) {
      ctx.customCheckoutSdk.changeAppearance(currentAppearance);
    }
  }, [options, prevOptions, ctx.customCheckoutSdk]);
  import_react.default.useEffect(function() {
    registerWithStripeJs(ctx.stripe);
  }, [ctx.stripe]);
  var customCheckoutContextValue = import_react.default.useMemo(function() {
    return extractCustomCheckoutContextValue(ctx.customCheckoutSdk, session);
  }, [ctx.customCheckoutSdk, session]);
  if (!ctx.customCheckoutSdk) {
    return null;
  }
  return import_react.default.createElement(CustomCheckoutSdkContext.Provider, {
    value: ctx
  }, import_react.default.createElement(CustomCheckoutContext.Provider, {
    value: customCheckoutContextValue
  }, children));
};
CustomCheckoutProvider.propTypes = {
  stripe: import_prop_types.default.any,
  options: import_prop_types.default.shape({
    clientSecret: import_prop_types.default.string.isRequired,
    elementsOptions: import_prop_types.default.object
  }).isRequired
};
var useCustomCheckoutSdkContextWithUseCase = function useCustomCheckoutSdkContextWithUseCase2(useCaseString) {
  var ctx = import_react.default.useContext(CustomCheckoutSdkContext);
  return parseCustomCheckoutSdkContext(ctx, useCaseString);
};
var useElementsOrCustomCheckoutSdkContextWithUseCase = function useElementsOrCustomCheckoutSdkContextWithUseCase2(useCaseString) {
  var customCheckoutSdkContext = import_react.default.useContext(CustomCheckoutSdkContext);
  var elementsContext = import_react.default.useContext(ElementsContext);
  if (customCheckoutSdkContext && elementsContext) {
    throw new Error("You cannot wrap the part of your app that ".concat(useCaseString, " in both <CustomCheckoutProvider> and <Elements> providers."));
  }
  if (customCheckoutSdkContext) {
    return parseCustomCheckoutSdkContext(customCheckoutSdkContext, useCaseString);
  }
  return parseElementsContext(elementsContext, useCaseString);
};
var useCustomCheckout = function useCustomCheckout2() {
  useCustomCheckoutSdkContextWithUseCase("calls useCustomCheckout()");
  var ctx = import_react.default.useContext(CustomCheckoutContext);
  if (!ctx) {
    throw new Error("Could not find CustomCheckout Context; You need to wrap the part of your app that calls useCustomCheckout() in an <CustomCheckoutProvider> provider.");
  }
  return ctx;
};
var capitalized = function capitalized2(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
var createElementComponent = function createElementComponent2(type, isServer2) {
  var displayName = "".concat(capitalized(type), "Element");
  var ClientElement = function ClientElement2(_ref) {
    var id = _ref.id, className = _ref.className, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options, onBlur = _ref.onBlur, onFocus = _ref.onFocus, onReady = _ref.onReady, onChange = _ref.onChange, onEscape = _ref.onEscape, onClick = _ref.onClick, onLoadError = _ref.onLoadError, onLoaderStart = _ref.onLoaderStart, onNetworksChange = _ref.onNetworksChange, onConfirm = _ref.onConfirm, onCancel = _ref.onCancel, onShippingAddressChange = _ref.onShippingAddressChange, onShippingRateChange = _ref.onShippingRateChange;
    var ctx = useElementsOrCustomCheckoutSdkContextWithUseCase("mounts <".concat(displayName, ">"));
    var elements = "elements" in ctx ? ctx.elements : null;
    var customCheckoutSdk = "customCheckoutSdk" in ctx ? ctx.customCheckoutSdk : null;
    var _React$useState = import_react.default.useState(null), _React$useState2 = _slicedToArray(_React$useState, 2), element = _React$useState2[0], setElement = _React$useState2[1];
    var elementRef = import_react.default.useRef(null);
    var domNode = import_react.default.useRef(null);
    useAttachEvent(element, "blur", onBlur);
    useAttachEvent(element, "focus", onFocus);
    useAttachEvent(element, "escape", onEscape);
    useAttachEvent(element, "click", onClick);
    useAttachEvent(element, "loaderror", onLoadError);
    useAttachEvent(element, "loaderstart", onLoaderStart);
    useAttachEvent(element, "networkschange", onNetworksChange);
    useAttachEvent(element, "confirm", onConfirm);
    useAttachEvent(element, "cancel", onCancel);
    useAttachEvent(element, "shippingaddresschange", onShippingAddressChange);
    useAttachEvent(element, "shippingratechange", onShippingRateChange);
    useAttachEvent(element, "change", onChange);
    var readyCallback;
    if (onReady) {
      if (type === "expressCheckout") {
        readyCallback = onReady;
      } else {
        readyCallback = function readyCallback2() {
          onReady(element);
        };
      }
    }
    useAttachEvent(element, "ready", readyCallback);
    import_react.default.useLayoutEffect(function() {
      if (elementRef.current === null && domNode.current !== null && (elements || customCheckoutSdk)) {
        var newElement = null;
        if (customCheckoutSdk) {
          newElement = customCheckoutSdk.createElement(type, options);
        } else if (elements) {
          newElement = elements.create(type, options);
        }
        elementRef.current = newElement;
        setElement(newElement);
        if (newElement) {
          newElement.mount(domNode.current);
        }
      }
    }, [elements, customCheckoutSdk, options]);
    var prevOptions = usePrevious(options);
    import_react.default.useEffect(function() {
      if (!elementRef.current) {
        return;
      }
      var updates = extractAllowedOptionsUpdates(options, prevOptions, ["paymentRequest"]);
      if (updates) {
        elementRef.current.update(updates);
      }
    }, [options, prevOptions]);
    import_react.default.useLayoutEffect(function() {
      return function() {
        if (elementRef.current && typeof elementRef.current.destroy === "function") {
          try {
            elementRef.current.destroy();
            elementRef.current = null;
          } catch (error) {
          }
        }
      };
    }, []);
    return import_react.default.createElement("div", {
      id,
      className,
      ref: domNode
    });
  };
  var ServerElement = function ServerElement2(props) {
    useElementsOrCustomCheckoutSdkContextWithUseCase("mounts <".concat(displayName, ">"));
    var id = props.id, className = props.className;
    return import_react.default.createElement("div", {
      id,
      className
    });
  };
  var Element = isServer2 ? ServerElement : ClientElement;
  Element.propTypes = {
    id: import_prop_types.default.string,
    className: import_prop_types.default.string,
    onChange: import_prop_types.default.func,
    onBlur: import_prop_types.default.func,
    onFocus: import_prop_types.default.func,
    onReady: import_prop_types.default.func,
    onEscape: import_prop_types.default.func,
    onClick: import_prop_types.default.func,
    onLoadError: import_prop_types.default.func,
    onLoaderStart: import_prop_types.default.func,
    onNetworksChange: import_prop_types.default.func,
    onConfirm: import_prop_types.default.func,
    onCancel: import_prop_types.default.func,
    onShippingAddressChange: import_prop_types.default.func,
    onShippingRateChange: import_prop_types.default.func,
    options: import_prop_types.default.object
  };
  Element.displayName = displayName;
  Element.__elementType = type;
  return Element;
};
var isServer = typeof window === "undefined";
var EmbeddedCheckoutContext = import_react.default.createContext(null);
EmbeddedCheckoutContext.displayName = "EmbeddedCheckoutProviderContext";
var useEmbeddedCheckoutContext = function useEmbeddedCheckoutContext2() {
  var ctx = import_react.default.useContext(EmbeddedCheckoutContext);
  if (!ctx) {
    throw new Error("<EmbeddedCheckout> must be used within <EmbeddedCheckoutProvider>");
  }
  return ctx;
};
var INVALID_STRIPE_ERROR = "Invalid prop `stripe` supplied to `EmbeddedCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.";
var EmbeddedCheckoutProvider = function EmbeddedCheckoutProvider2(_ref) {
  var rawStripeProp = _ref.stripe, options = _ref.options, children = _ref.children;
  var parsed = import_react.default.useMemo(function() {
    return parseStripeProp(rawStripeProp, INVALID_STRIPE_ERROR);
  }, [rawStripeProp]);
  var embeddedCheckoutPromise = import_react.default.useRef(null);
  var loadedStripe = import_react.default.useRef(null);
  var _React$useState = import_react.default.useState({
    embeddedCheckout: null
  }), _React$useState2 = _slicedToArray(_React$useState, 2), ctx = _React$useState2[0], setContext = _React$useState2[1];
  import_react.default.useEffect(function() {
    if (loadedStripe.current || embeddedCheckoutPromise.current) {
      return;
    }
    var setStripeAndInitEmbeddedCheckout = function setStripeAndInitEmbeddedCheckout2(stripe) {
      if (loadedStripe.current || embeddedCheckoutPromise.current)
        return;
      loadedStripe.current = stripe;
      embeddedCheckoutPromise.current = loadedStripe.current.initEmbeddedCheckout(options).then(function(embeddedCheckout) {
        setContext({
          embeddedCheckout
        });
      });
    };
    if (parsed.tag === "async" && !loadedStripe.current && (options.clientSecret || options.fetchClientSecret)) {
      parsed.stripePromise.then(function(stripe) {
        if (stripe) {
          setStripeAndInitEmbeddedCheckout(stripe);
        }
      });
    } else if (parsed.tag === "sync" && !loadedStripe.current && (options.clientSecret || options.fetchClientSecret)) {
      setStripeAndInitEmbeddedCheckout(parsed.stripe);
    }
  }, [parsed, options, ctx, loadedStripe]);
  import_react.default.useEffect(function() {
    return function() {
      if (ctx.embeddedCheckout) {
        embeddedCheckoutPromise.current = null;
        ctx.embeddedCheckout.destroy();
      } else if (embeddedCheckoutPromise.current) {
        embeddedCheckoutPromise.current.then(function() {
          embeddedCheckoutPromise.current = null;
          if (ctx.embeddedCheckout) {
            ctx.embeddedCheckout.destroy();
          }
        });
      }
    };
  }, [ctx.embeddedCheckout]);
  import_react.default.useEffect(function() {
    registerWithStripeJs(loadedStripe);
  }, [loadedStripe]);
  var prevStripe = usePrevious(rawStripeProp);
  import_react.default.useEffect(function() {
    if (prevStripe !== null && prevStripe !== rawStripeProp) {
      console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the `stripe` prop after setting it.");
    }
  }, [prevStripe, rawStripeProp]);
  var prevOptions = usePrevious(options);
  import_react.default.useEffect(function() {
    if (prevOptions == null) {
      return;
    }
    if (options == null) {
      console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot unset options after setting them.");
      return;
    }
    if (options.clientSecret === void 0 && options.fetchClientSecret === void 0) {
      console.warn("Invalid props passed to EmbeddedCheckoutProvider: You must provide one of either `options.fetchClientSecret` or `options.clientSecret`.");
    }
    if (prevOptions.clientSecret != null && options.clientSecret !== prevOptions.clientSecret) {
      console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the client secret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.");
    }
    if (prevOptions.fetchClientSecret != null && options.fetchClientSecret !== prevOptions.fetchClientSecret) {
      console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change fetchClientSecret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.");
    }
    if (prevOptions.onComplete != null && options.onComplete !== prevOptions.onComplete) {
      console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onComplete option after setting it.");
    }
    if (prevOptions.onShippingDetailsChange != null && options.onShippingDetailsChange !== prevOptions.onShippingDetailsChange) {
      console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onShippingDetailsChange option after setting it.");
    }
  }, [prevOptions, options]);
  return import_react.default.createElement(EmbeddedCheckoutContext.Provider, {
    value: ctx
  }, children);
};
var EmbeddedCheckoutClientElement = function EmbeddedCheckoutClientElement2(_ref) {
  var id = _ref.id, className = _ref.className;
  var _useEmbeddedCheckoutC = useEmbeddedCheckoutContext(), embeddedCheckout = _useEmbeddedCheckoutC.embeddedCheckout;
  var isMounted = import_react.default.useRef(false);
  var domNode = import_react.default.useRef(null);
  import_react.default.useLayoutEffect(function() {
    if (!isMounted.current && embeddedCheckout && domNode.current !== null) {
      embeddedCheckout.mount(domNode.current);
      isMounted.current = true;
    }
    return function() {
      if (isMounted.current && embeddedCheckout) {
        try {
          embeddedCheckout.unmount();
          isMounted.current = false;
        } catch (e) {
        }
      }
    };
  }, [embeddedCheckout]);
  return import_react.default.createElement("div", {
    ref: domNode,
    id,
    className
  });
};
var EmbeddedCheckoutServerElement = function EmbeddedCheckoutServerElement2(_ref2) {
  var id = _ref2.id, className = _ref2.className;
  useEmbeddedCheckoutContext();
  return import_react.default.createElement("div", {
    id,
    className
  });
};
var EmbeddedCheckout = isServer ? EmbeddedCheckoutServerElement : EmbeddedCheckoutClientElement;
var useStripe = function useStripe2() {
  var _useElementsOrCustomC = useElementsOrCustomCheckoutSdkContextWithUseCase("calls useStripe()"), stripe = _useElementsOrCustomC.stripe;
  return stripe;
};
var AuBankAccountElement = createElementComponent("auBankAccount", isServer);
var CardElement = createElementComponent("card", isServer);
var CardNumberElement = createElementComponent("cardNumber", isServer);
var CardExpiryElement = createElementComponent("cardExpiry", isServer);
var CardCvcElement = createElementComponent("cardCvc", isServer);
var FpxBankElement = createElementComponent("fpxBank", isServer);
var IbanElement = createElementComponent("iban", isServer);
var IdealBankElement = createElementComponent("idealBank", isServer);
var P24BankElement = createElementComponent("p24Bank", isServer);
var EpsBankElement = createElementComponent("epsBank", isServer);
var PaymentElement = createElementComponent("payment", isServer);
var ExpressCheckoutElement = createElementComponent("expressCheckout", isServer);
var PaymentRequestButtonElement = createElementComponent("paymentRequestButton", isServer);
var LinkAuthenticationElement = createElementComponent("linkAuthentication", isServer);
var AddressElement = createElementComponent("address", isServer);
var ShippingAddressElement = createElementComponent("shippingAddress", isServer);
var PaymentMethodMessagingElement = createElementComponent("paymentMethodMessaging", isServer);
var AffirmMessageElement = createElementComponent("affirmMessage", isServer);
var AfterpayClearpayMessageElement = createElementComponent("afterpayClearpayMessage", isServer);
export {
  AddressElement,
  AffirmMessageElement,
  AfterpayClearpayMessageElement,
  AuBankAccountElement,
  CardCvcElement,
  CardElement,
  CardExpiryElement,
  CardNumberElement,
  CustomCheckoutProvider,
  Elements,
  ElementsConsumer,
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
  EpsBankElement,
  ExpressCheckoutElement,
  FpxBankElement,
  IbanElement,
  IdealBankElement,
  LinkAuthenticationElement,
  P24BankElement,
  PaymentElement,
  PaymentMethodMessagingElement,
  PaymentRequestButtonElement,
  ShippingAddressElement,
  useCustomCheckout,
  useElements,
  useStripe
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=@stripe_react-stripe-js.js.map
