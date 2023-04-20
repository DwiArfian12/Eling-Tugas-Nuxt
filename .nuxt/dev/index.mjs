globalThis._importMeta_={url:import.meta.url,env:process.env};import 'file://D:/Project%20Web/Eling-Tugas-Nuxt/node_modules/node-fetch-native/dist/polyfill.mjs';
import { Server } from 'node:http';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { mkdirSync } from 'node:fs';
import { parentPort, threadId } from 'node:worker_threads';
import { provider, isWindows } from 'file://D:/Project%20Web/Eling-Tugas-Nuxt/node_modules/std-env/dist/index.mjs';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, setResponseStatus, getRequestHeader, setResponseHeader, getRequestHeaders, createError, H3Error, readBody, getCookie, deleteCookie, setHeader, setCookie, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler, useBase, getHeaders, getQuery } from 'file://D:/Project%20Web/Eling-Tugas-Nuxt/node_modules/h3/dist/index.mjs';
import jwt from 'file://D:/Project%20Web/Eling-Tugas-Nuxt/node_modules/jsonwebtoken/index.js';
import dayjs from 'file://D:/Project%20Web/Eling-Tugas-Nuxt/node_modules/dayjs/dayjs.min.js';
import { PrismaClient } from 'file://D:/Project%20Web/Eling-Tugas-Nuxt/node_modules/@prisma/client/index.js';
import { createRenderer } from 'file://D:/Project%20Web/Eling-Tugas-Nuxt/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import devalue from 'file://D:/Project%20Web/Eling-Tugas-Nuxt/node_modules/@nuxt/devalue/dist/devalue.mjs';
import { renderToString } from 'file://D:/Project%20Web/Eling-Tugas-Nuxt/node_modules/vue/server-renderer/index.mjs';
import { createFetch as createFetch$1, Headers } from 'file://D:/Project%20Web/Eling-Tugas-Nuxt/node_modules/ofetch/dist/node.mjs';
import destr from 'file://D:/Project%20Web/Eling-Tugas-Nuxt/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file://D:/Project%20Web/Eling-Tugas-Nuxt/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file://D:/Project%20Web/Eling-Tugas-Nuxt/node_modules/hookable/dist/index.mjs';
import { snakeCase } from 'file://D:/Project%20Web/Eling-Tugas-Nuxt/node_modules/scule/dist/index.mjs';
import defu, { defuFn } from 'file://D:/Project%20Web/Eling-Tugas-Nuxt/node_modules/defu/dist/defu.mjs';
import { hash } from 'file://D:/Project%20Web/Eling-Tugas-Nuxt/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, withQuery } from 'file://D:/Project%20Web/Eling-Tugas-Nuxt/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://D:/Project%20Web/Eling-Tugas-Nuxt/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://D:/Project%20Web/Eling-Tugas-Nuxt/node_modules/unstorage/drivers/fs.mjs';
import { toRouteMatcher, createRouter } from 'file://D:/Project%20Web/Eling-Tugas-Nuxt/node_modules/radix3/dist/index.mjs';
import argon2 from 'file://D:/Project%20Web/Eling-Tugas-Nuxt/node_modules/argon2/argon2.js';
import crypto from 'crypto';
import passwordGenerator from 'file://D:/Project%20Web/Eling-Tugas-Nuxt/node_modules/generate-password/main.js';
import { OAuth2Client } from 'file://D:/Project%20Web/Eling-Tugas-Nuxt/node_modules/google-auth-library/build/src/index.js';
import sgMail from 'file://D:/Project%20Web/Eling-Tugas-Nuxt/node_modules/@sendgrid/mail/index.js';
import nodemailer from 'file://D:/Project%20Web/Eling-Tugas-Nuxt/node_modules/nodemailer/lib/nodemailer.js';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"envPrefix":"NUXT_","routeRules":{"/__nuxt_error":{"cache":false}}},"public":{"iamVerifyRegistrations":"false","iamAllowGoogleAuth":"false","googleSignIn":{"clientId":"123...com"}},"iamAccessTokenSecret":"fa85424538b2878a7785a703d168fc58550c8ef3a02c23b8aee5f8adf98159b218296926d37164db8ed48d28a73c01387cf4fd0032e7e76858e71a09b2b82c88","iamRefreshTokenSecret":"c36f673adcbfe27859867697d6c98430c3757d3eafb7bca3fe90fe349baa9d88ec10932aba5da22f37264c2c2bd31404e5a22822be6f054ec9d40a56b28b97e1","iamResetTokenSecret":"a67102c7d684ad370409855fe3e7a65f9f9ccffeb82b0d53fe328c66a1405b03737da79a4dd42266a5a83ea9826421b9b031703337be5fd1e1eac0feb1ae2166","iamVerifyTokenSecret":"823459ed2ed1d80df1aedd3a5c03f1ee6132c20a076270d63d89e06c6b0f4fb7299991610f17dde4930b54432a6cf7b8d13b6da08b9f89bb8b30bb2c46c37f9e","iamPublicUrl":"http://localhost:3000","iamEmailer":"nodemailer-smtp","iamNodemailerService":"hotmail","iamNodemailerServiceSender":"myusername@outlook.com","iamNodemailerServicePassword":"myExcellentPassword767*","iamNodemailerSmtpHost":"mysmtp.host","iamNodemailerSmtpPort":"465","iamNodemailerSmtpSender":"myname@mydomain.com","iamNodemailerSmtpPassword":"myAmazingPassword753$","iamSendGridApiKey":"12345678901234567890","iamSendgridSender":"myname@mysendgridaccount.com","iamGoogleClientId":"123...com"};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
overrideConfig(_runtimeConfig);
const runtimeConfig = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => runtimeConfig;
deepFreeze(appConfig);
function getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const serverAssets = [{"baseName":"server","dir":"D:/Project Web/Eling-Tugas-Nuxt/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"D:\\Project Web\\Eling-Tugas-Nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"D:\\Project Web\\Eling-Tugas-Nuxt\\server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"D:\\Project Web\\Eling-Tugas-Nuxt\\.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"D:\\Project Web\\Eling-Tugas-Nuxt\\.nuxt\\cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config$4 = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config$4.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function defineRenderHandler(handler) {
  return eventHandler(async (event) => {
    if (event.node.req.url.endsWith("/favicon.ico")) {
      event.node.res.setHeader("Content-Type", "image/x-icon");
      event.node.res.end(
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      );
      return;
    }
    const response = await handler(event);
    if (!response) {
      if (!event.node.res.writableEnded) {
        event.node.res.statusCode = event.node.res.statusCode === 200 ? 500 : event.node.res.statusCode;
        event.node.res.end(
          "No response returned from render handler: " + event.node.req.url
        );
      }
      return;
    }
    const nitroApp = useNitroApp();
    await nitroApp.hooks.callHook("render:response", response, { event });
    if (!event.node.res.headersSent && response.headers) {
      for (const header in response.headers) {
        event.node.res.setHeader(header, response.headers[header]);
      }
      setResponseStatus(event, response.statusCode, response.statusMessage);
    }
    return typeof response.body === "string" ? response.body : JSON.stringify(response.body);
  });
}

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: statusCode !== 404 ? `<pre>${stack.map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n")}</pre>` : "",
    data: error.data
  };
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return errorDev; }) ;
    {
      errorObject.description = errorObject.message;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(await res.text());
});

function getClientPlatform(event) {
  const clientPlatforms = ["app", "browser", "browser-dev"];
  let clientPlatform = event.node.req.headers["client-platform"];
  if (!clientPlatform) {
    console.log(
      "Missing required header 'client-platform'. 'client-platform' upgraded to 'browser'"
    );
    event.node.req.headers["client-platform"] = "browser";
    clientPlatform = "browser";
  }
  if (!clientPlatforms.includes(clientPlatform))
    return createError({
      statusCode: 400,
      statusMessage: "Required header 'client-platform' must be 'app', 'browser', or 'browser-dev' only"
    });
  return clientPlatform;
}

const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

let poolPtr = rnds8Pool.length;
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    crypto.randomFillSync(rnds8Pool);
    poolPtr = 0;
  }

  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

const native = {
  randomUUID: crypto.randomUUID
};

function v4(options, buf, offset) {
  if (native.randomUUID && !buf && !options) {
    return native.randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return unsafeStringify(rnds);
}

const prisma$f = new PrismaClient();
function makeRandomString32() {
  return crypto.randomBytes(32).toString("hex");
}
async function hashPassword(password) {
  try {
    return await argon2.hash(password);
  } catch (err) {
    return createError({ statusCode: 500, statusMessage: "Password error" });
  }
}
function makeUuid() {
  return v4();
}
async function generateNewPassword(uuid) {
  let error = null;
  const password = passwordGenerator.generate({
    length: 20,
    numbers: true,
    symbols: true,
    strict: true
  });
  const isValidPassword = validatePassword(password);
  if (!isValidPassword) {
    console.log("Failed to generate valid password");
    return createError({
      statusCode: 500,
      statusMessage: "Server error"
    });
  }
  const errorOrHashedPassword = await hashPassword(password);
  if (errorOrHashedPassword instanceof H3Error) {
    console.log("Error hashing password");
    return createError({
      statusCode: 500,
      statusMessage: "Server error"
    });
  }
  const hashedPassword = errorOrHashedPassword;
  await prisma$f.users.update({
    where: {
      uuid
    },
    data: {
      password: hashedPassword
    }
  }).catch(async (e) => {
    console.error(e);
    error = e;
  });
  if (error) {
    console.log("Error updating user password");
    return createError({
      statusCode: 500,
      statusMessage: "Server error"
    });
  }
  console.log("Updated user password");
  return password;
}
async function verifyPassword(hash, password) {
  try {
    if (await argon2.verify(hash, password)) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
}

const prisma$e = new PrismaClient();
async function getUserByEmail(email) {
  let user = null;
  await prisma$e.users.findFirst({
    where: {
      email
    }
  }).then(async (response) => {
    user = response;
  }).catch(async (e) => {
    console.error(e);
  });
  return user;
}
async function getUserByUuid(uuid) {
  let user = null;
  await prisma$e.users.findFirst({
    where: {
      uuid
    }
  }).then(async (response) => {
    user = response;
  }).catch(async (e) => {
    console.error(e);
  });
  return user;
}
async function getUserById(id) {
  let user = null;
  await prisma$e.users.findFirst({
    where: {
      id
    }
  }).then(async (response) => {
    user = response;
  }).catch(async (e) => {
    console.error(e);
  });
  return user;
}
async function updateLastLogin(email) {
  let result = null;
  await prisma$e.users.update({
    where: {
      email
    },
    data: {
      last_login: /* @__PURE__ */ new Date()
    }
  }).then(async (response) => {
    result = response;
  }).catch(async (e) => {
    console.error(e);
  });
  return result;
}
async function updateEmailVerifiedTrue(email) {
  let error = null;
  if (!email) {
    console.log("Error no email provided to update email verified to true");
    return createError({ statusCode: 400, statusMessage: "No email provided" });
  }
  await prisma$e.users.update({
    where: {
      email
    },
    data: {
      email_verified: true
    }
  }).catch(async (e) => {
    console.error(e);
    error = e;
  });
  if (error) {
    console.log("Error updating email verified to true");
    return createError({ statusCode: 500, statusMessage: "Password error" });
  }
}
async function updateUserProfile(event) {
  const errorOrVoid = await validateUserProfileUpdate(event);
  if (errorOrVoid instanceof H3Error)
    return errorOrVoid;
  const body = await readBody(event);
  let user = {};
  let error = null;
  const userDataOrError = await getUserByUuid(body.uuid);
  if (userDataOrError instanceof H3Error)
    return userDataOrError;
  const userData = userDataOrError;
  let newHashedPassword = "";
  if ("new_password" in body === true && "current_password" in body === true) {
    const newHashedPasswordOrError = await hashPassword(body.new_password);
    if (newHashedPasswordOrError instanceof H3Error)
      return newHashedPasswordOrError;
    newHashedPassword = newHashedPasswordOrError;
  }
  await prisma$e.users.update({
    where: {
      uuid: body.uuid
    },
    data: {
      first_name: body.first_name ? body.first_name : userData.first_name,
      last_name: body.last_name ? body.last_name : userData.last_name,
      // If we got a new password, update it, otherwise keep old password
      password: newHashedPassword.length > 0 ? newHashedPassword : userData.password
    }
  }).then(async (response) => {
    user = response;
  }).catch(async (e) => {
    console.error(e);
    error = e;
  });
  if (error)
    return error;
  return user;
}
async function createGoogleUser(payload) {
  var _a;
  let error = null;
  let providerUser = {};
  let user = null;
  if (!((_a = payload.aud) == null ? void 0 : _a.includes("googleusercontent"))) {
    console.log("Error creating Google user: token not a Google token");
    return createError({
      statusCode: 401,
      statusMessage: "Unauthorized"
    });
  }
  if (!payload.sub) {
    console.log("Missing payload subject from Google token payload");
    return createError({
      statusCode: 401,
      statusMessage: "Unauthorized"
    });
  }
  await prisma$e.provider_users.findFirst({
    where: {
      provider_user_id: payload.sub
    }
  }).then(async (result) => {
    providerUser = result;
  }).catch(async (e) => {
    console.error(e);
    error = e;
  });
  if (error) {
    console.log("Error checking if Google user exists");
    return createError({
      statusCode: 500,
      statusMessage: "Server error"
    });
  }
  if (providerUser) {
    await prisma$e.users.findFirst({
      where: {
        id: providerUser.user_id
      }
    }).then(async (result) => {
      user = result;
    }).catch(async (e) => {
      console.log("Provider user error");
      console.error(e);
      error = e;
    });
  }
  if (error) {
    console.log("Error getting already created Google user");
    return createError({
      statusCode: 500,
      statusMessage: "Server error"
    });
  }
  if (user)
    return user;
  const password = passwordGenerator.generate({
    length: 20,
    numbers: true,
    symbols: true,
    strict: true
  });
  const isValidPassword = validatePassword(password);
  if (!isValidPassword) {
    console.log("Failed to generate valid password");
    return createError({
      statusCode: 500,
      statusMessage: "Server error"
    });
  }
  const errorOrHashedPassword = await hashPassword(password);
  if (errorOrHashedPassword instanceof H3Error) {
    console.log("Error hashing password");
    return createError({
      statusCode: 500,
      statusMessage: "Server error"
    });
  }
  const hashedPassword = errorOrHashedPassword;
  user = await getUserByEmail(payload.email);
  if (!user) {
    await prisma$e.users.create({
      data: {
        first_name: payload.given_name,
        last_name: payload.family_name,
        uuid: makeUuid(),
        avatar: payload.picture,
        email: payload.email,
        email_verified: true,
        password: hashedPassword
      }
    }).then(async (response) => {
      user = response;
    }).catch(async (e) => {
      console.error(e);
      error = e;
    });
    if (error) {
      console.log("Error creating user after Google login");
      return createError({
        statusCode: 500,
        statusMessage: "Server error"
      });
    }
  }
  let verifiedUser = {};
  if (user)
    verifiedUser = user;
  if (user) {
    await prisma$e.provider_users.create({
      data: {
        provider: "GOOGLE",
        provider_user_id: payload.sub,
        user_id: verifiedUser.id
      }
    }).then(async (result) => {
      providerUser = result;
    }).catch(async (e) => {
      console.log("Error creating provider user");
      console.error(e);
      error = e;
    });
  }
  if (error) {
    return createError({
      statusCode: 500,
      statusMessage: "Server error"
    });
  }
  if (verifiedUser)
    return verifiedUser;
  console.log("We should not be getting this create Google user error");
  return createError({
    statusCode: 500,
    statusMessage: "Server error"
  });
}

const prisma$d = new PrismaClient();
async function validateUserRegistration(event) {
  const body = await readBody(event);
  const bodyError = await validateRegisterBody(event);
  if (bodyError) {
    return createError({ statusCode: 400, statusMessage: bodyError });
  }
  if (!validateEmail(body.email)) {
    return createError({ statusCode: 400, statusMessage: "Bad email format" });
  }
  const user = await getUserByEmail(body.email);
  if (user)
    return createError({
      statusCode: 409,
      statusMessage: "Email already exists"
    });
  if (!validatePassword(body.password)) {
    return createError({
      statusCode: 400,
      statusMessage: `Poor password strength. Password must contain at least 8 characters, an upper-case letter, and a lower-case letter, 
        a number, and a non-alphanumeric character.`
    });
  }
}
async function validateUserUpdate(event) {
  var _a;
  const uuid = (_a = event.context.params) == null ? void 0 : _a.uuid;
  const body = await readBody(event);
  if (!uuid)
    return createError({
      statusCode: 400,
      statusMessage: "Uuid not supplied"
    });
  if (!await userExists(uuid))
    return createError({
      statusCode: 400,
      statusMessage: "User not found"
    });
  if ("first_name" in body === false && "last_name" in body === false && "role" in body === false && "permissions" in body === false)
    return createError({
      statusCode: 400,
      statusMessage: "No updatable properties supplied"
    });
  if ("first_name" in body && !body.first_name)
    return createError({
      statusCode: 400,
      statusMessage: "first_name must have data"
    });
  if ("last_name" in body && !body.last_name)
    return createError({
      statusCode: 400,
      statusMessage: "last_name must have data"
    });
  if ("role" in body && !body.role)
    return createError({
      statusCode: 400,
      statusMessage: "role must have data"
    });
}
async function validateUserProfileUpdate(event) {
  const body = await readBody(event);
  if (!body.uuid)
    return createError({
      statusCode: 400,
      statusMessage: "User uuid not provided"
    });
  if ("first_name" in body === false && "last_name" in body === false && "current_password" in body === false && "new_password" in body === false)
    return createError({
      statusCode: 400,
      statusMessage: "No updatable properties supplied"
    });
  const user = await getUserByUuid(body.uuid);
  if (!user)
    return createError({
      statusCode: 400,
      statusMessage: "User not found"
    });
  if ("first_name" in body === true && body.first_name.trim() === "")
    return createError({
      statusCode: 400,
      statusMessage: "first_name must have a value"
    });
  if ("last_name" in body === true && body.last_name.trim() === "")
    return createError({
      statusCode: 400,
      statusMessage: "last_name must have a value"
    });
  if ("new_password" in body === true && "current_password" in body === false)
    return createError({
      statusCode: 400,
      statusMessage: "Both current_password and new_password must be supplied"
    });
  if ("new_password" in body === false && "current_password" in body === true)
    return createError({
      statusCode: 400,
      statusMessage: "Both current_password and new_password must be supplied"
    });
  if ("current_password" in body) {
    if (!await verifyPassword(user.password, body.current_password))
      return createError({
        statusCode: 400,
        statusMessage: "Wrong current password"
      });
  }
  if ("new_password" in body === true && !validatePassword(body.new_password))
    return createError({
      statusCode: 400,
      statusMessage: `Poor new password strength. Password must contain at least 8 characters, an upper-case letter, and a lower-case letter, 
      a number, and a non-alphanumeric character.`
    });
}
async function validateUserDelete(event) {
  var _a;
  const uuid = (_a = event.context.params) == null ? void 0 : _a.uuid;
  if (!uuid)
    return createError({
      statusCode: 400,
      statusMessage: "Uuid not supplied"
    });
  if (!await userExists(uuid))
    return createError({
      statusCode: 400,
      statusMessage: "User not found"
    });
}
async function validateUserLogin(event) {
  const body = await readBody(event);
  const bodyError = validateLoginBody(body);
  if (bodyError) {
    return createError({ statusCode: 400, statusMessage: bodyError });
  }
  if (!validateEmail(body.email)) {
    return createError({ statusCode: 400, statusMessage: "Bad email format" });
  }
}
async function validateRegisterBody(event) {
  const body = await readBody(event);
  console.log("BODY: ", body);
  if ("first_name" in body === false || body.first_name.trim() === "") {
    return "'first_name' is required";
  }
  if ("last_name" in body === false || body.last_name.trim() == "") {
    return "'last_name' is required";
  }
  if ("email" in body === false) {
    return "'email' is required";
  }
  if ("password" in body === false) {
    return "'password' is required";
  }
}
function validateLoginBody(body) {
  if ("email" in body === false) {
    return "'email' is required";
  }
  if ("password" in body === false) {
    return "'password' is required";
  }
}
function validateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
}
async function userExists(uuid) {
  if (!uuid)
    return false;
  let user = void 0;
  await prisma$d.users.findFirst({
    where: {
      uuid
    }
  }).then(async (result) => {
    user = result;
  }).catch(async (e) => {
    console.error(e);
  });
  if (user === null)
    return false;
  return true;
}
function validatePassword(password) {
  if (password.length < 8)
    return false;
  if (!/[A-Z]/.test(password))
    return false;
  if (!/[a-z]/.test(password))
    return false;
  if (!/\d/.test(password))
    return false;
  if (!/\W/.test(password))
    return false;
  return true;
}

const prisma$c = new PrismaClient();
async function createUserSession(userId, accessToken, event) {
  let error = null;
  let session = null;
  if (!userId) {
    console.log("User id not provided for create session");
    return createError({
      statusCode: 500,
      statusMessage: "Server error"
    });
  }
  if (!accessToken) {
    console.log("Access token not provided for create session");
    return createError({
      statusCode: 500,
      statusMessage: "Server error"
    });
  }
  if (!event) {
    console.log("Event not provided for create session");
    return createError({
      statusCode: 500,
      statusMessage: "Server error"
    });
  }
  const csrfToken = makeRandomString32();
  const ipAddress = getRequestHeader(event, "x-forwarded-for");
  await prisma$c.sessions.create({
    data: {
      user_id: userId,
      sid: makeUuid(),
      start_time: /* @__PURE__ */ new Date(),
      access_token: accessToken,
      csrf_token: csrfToken,
      is_active: true,
      ip_address: ipAddress ? ipAddress : "unable to get IP address"
    }
  }).then(async (result) => {
    session = result;
  }).catch(async (e) => {
    console.error(e);
    error = e;
  });
  if (error) {
    console.log("Error creating user session");
    return createError({
      statusCode: 500,
      statusMessage: "Server error"
    });
  }
  if (session)
    return session;
  console.log("We should not be getting this session error");
  return createError({
    statusCode: 500,
    statusMessage: "Server error"
  });
}
async function getUserSession(sessionId) {
  let error = null;
  let session = null;
  await prisma$c.sessions.findUnique({
    where: {
      sid: sessionId
    }
  }).then(async (result) => {
    session = result;
  }).catch(async (e) => {
    console.error(e);
    error = e;
  });
  if (error) {
    console.log("Error retrieving user session");
    return createError({
      statusCode: 500,
      statusMessage: "Server error"
    });
  }
  if (session)
    return session;
  console.log("We should not be getting this retrieve session error");
  return createError({
    statusCode: 500,
    statusMessage: "Server error"
  });
}
async function deactivateUserSessions(userId) {
  let error = null;
  let session = null;
  await prisma$c.sessions.updateMany({
    where: {
      user_id: userId
    },
    data: {
      is_active: false
    }
  }).then(async (result) => {
    session = result;
  }).catch(async (e) => {
    console.error(e);
    error = e;
  });
  if (error) {
    console.log("Error deactivating user session");
    return createError({
      statusCode: 500,
      statusMessage: "Server error"
    });
  }
  if (session)
    return session;
  console.log("We should not be getting this deactivate user session error");
  return createError({
    statusCode: 500,
    statusMessage: "Server error"
  });
}
async function endUserSession(sessionId) {
  let error = null;
  let session = null;
  await prisma$c.sessions.update({
    where: {
      sid: sessionId
    },
    data: {
      end_time: /* @__PURE__ */ new Date()
    }
  }).then(async (result) => {
    session = result;
  }).catch(async (e) => {
    console.error(e);
    error = e;
  });
  if (error) {
    console.log("Error ending user session");
    return createError({
      statusCode: 500,
      statusMessage: "Server error"
    });
  }
  if (session)
    return session;
  console.log("We should not be getting this update user session error");
  return createError({
    statusCode: 500,
    statusMessage: "Server error"
  });
}

const config$3 = useRuntimeConfig();
const prisma$b = new PrismaClient();
async function getNewTokens(event) {
  let refreshToken = null;
  const errorOrPlatform = getClientPlatform(event);
  if (errorOrPlatform instanceof H3Error)
    return errorOrPlatform;
  const platform = errorOrPlatform;
  if (platform === "app")
    refreshToken = event.node.req.headers["iam-refresh-token"];
  else if (["browser", "browser-dev"].includes(platform))
    refreshToken = getCookie(event, "iam-refresh-token");
  if (!refreshToken) {
    console.log("Error: No refresh token provided");
    return createError({
      statusCode: 400,
      statusMessage: "No refresh token provided"
    });
  }
  const bearerToken = refreshToken.split(" ");
  if (bearerToken[0] !== "Bearer") {
    console.log("Missing word 'Bearer' in token");
    return createError({
      statusCode: 401,
      statusMessage: "Unauthorized"
    });
  }
  if (!bearerToken[1]) {
    console.log("Missing token");
    return createError({
      statusCode: 401,
      statusMessage: "Unauthorized"
    });
  }
  const errorOrUser = await verifyRefreshToken(bearerToken[1]);
  if (errorOrUser instanceof H3Error) {
    console.log("Failed to retrieve user from token");
    return createError({
      statusCode: 403,
      statusMessage: "Forbidden"
    });
  }
  const user = errorOrUser;
  if (!user.email)
    return createError({
      statusCode: 401,
      statusMessage: "Unauthorized"
    });
  const userInDb = await getUserByEmail(user.email);
  if (userInDb === null) {
    console.log("User not found in database");
    return createError({
      statusCode: 403,
      statusMessage: "Forbidden"
    });
  }
  const errorOrTokens = createNewTokensFromRefresh(bearerToken[1], event);
  if (errorOrTokens instanceof H3Error)
    return errorOrTokens;
  const tokens = await errorOrTokens;
  return tokens;
}
function verifyAccessToken(token) {
  let error = null;
  let tokenExpiredError = null;
  let jwtUser = null;
  jwt.verify(token, config$3.iamAccessTokenSecret, (err, user) => {
    if (err) {
      console.log(err);
      if (err instanceof jwt.TokenExpiredError) {
        console.log("Expired access token");
        console.log("Attempt reauthentication");
        tokenExpiredError = err;
      }
      error = createError({
        statusCode: 401,
        statusMessage: "Unauthorized"
      });
    } else {
      jwtUser = user;
    }
  });
  if (tokenExpiredError)
    return tokenExpiredError;
  if (error)
    return createError({
      statusCode: 401,
      statusMessage: "Unauthorized"
    });
  if (jwtUser)
    return jwtUser;
  return createError({
    statusCode: 401,
    statusMessage: "Unauthorized"
  });
}
function verifyPasswordResetToken(token) {
  let error = null;
  let tokenExpiredError = null;
  let jwtUser = null;
  jwt.verify(token, config$3.iamResetTokenSecret, (err, user) => {
    if (err) {
      console.log(err);
      if (err instanceof jwt.TokenExpiredError) {
        console.log("Expired password reset token");
        tokenExpiredError = err;
      }
      error = createError({
        statusCode: 401,
        statusMessage: "Unauthorized"
      });
    } else {
      jwtUser = user;
    }
  });
  if (tokenExpiredError)
    return tokenExpiredError;
  if (error)
    return createError({
      statusCode: 401,
      statusMessage: "Unauthorized"
    });
  if (jwtUser)
    return jwtUser;
  return createError({
    statusCode: 401,
    statusMessage: "Unauthorized"
  });
}
function verifyEmailVerificationToken(token) {
  let error = null;
  let tokenExpiredError = null;
  let jwtUser = null;
  jwt.verify(token, config$3.iamVerifyTokenSecret, (err, user) => {
    if (err) {
      console.log(err);
      if (err instanceof jwt.TokenExpiredError) {
        console.log("Expired email verification token");
        tokenExpiredError = err;
      }
      error = createError({
        statusCode: 401,
        statusMessage: "Unauthorized"
      });
    } else {
      jwtUser = user;
    }
  });
  if (tokenExpiredError)
    return tokenExpiredError;
  if (error)
    return createError({
      statusCode: 401,
      statusMessage: "Unauthorized"
    });
  if (jwtUser)
    return jwtUser;
  return createError({
    statusCode: 401,
    statusMessage: "Unauthorized"
  });
}
async function createNewTokensFromRefresh(token, event) {
  const errorOrUser = await verifyRefreshToken(token);
  if (errorOrUser instanceof H3Error)
    return errorOrUser;
  const user = errorOrUser;
  const publicUser = {
    uuid: user == null ? void 0 : user.uuid,
    email: user == null ? void 0 : user.email
  };
  if (user) {
    const accessToken = jwt.sign(publicUser, config$3.iamAccessTokenSecret, {
      expiresIn: "15m"
    });
    const refreshTokenId = makeUuid();
    const refreshToken = jwt.sign(publicUser, config$3.iamRefreshTokenSecret, {
      expiresIn: "14d",
      issuer: "NuxtIam",
      jwtid: refreshTokenId
    });
    const deactivateTokenError = await deactivateRefreshTokens(user.id);
    if (deactivateTokenError)
      return deactivateTokenError;
    const storeTokenError = await storeRefreshToken(refreshTokenId, user.id);
    if (storeTokenError)
      return storeTokenError;
    const deactivateSessionsError = await deactivateUserSessions(user.id);
    if (deactivateSessionsError instanceof H3Error)
      return deactivateSessionsError;
    const sessionOrError = await createUserSession(user.id, accessToken, event);
    if (sessionOrError instanceof H3Error)
      return sessionOrError;
    const session = sessionOrError;
    return {
      accessToken,
      refreshToken,
      sid: session.sid
    };
  }
  console.log("Error creating tokens");
  return createError({
    statusCode: 500,
    statusMessage: "Server error"
  });
}
async function refreshTokenActive(tokenId) {
  let error = null;
  await prisma$b.refresh_tokens.findFirstOrThrow({
    where: {
      token_id: tokenId,
      is_active: true
    }
  }).then(async () => {
  }).catch(async (e) => {
    console.error(e);
    error = e;
  });
  if (error)
    return createError({ statusCode: 500, statusMessage: "Server error" });
}
async function verifyRefreshToken(token) {
  let error = null;
  let verifiedUser = null;
  let verifiedTokenPayload = null;
  jwt.verify(token, config$3.iamRefreshTokenSecret, async (err, token2) => {
    if (err) {
      console.log(err);
      error = createError({
        statusCode: 403,
        statusMessage: "Forbidden"
      });
    }
    verifiedTokenPayload = token2;
  });
  if (error)
    return error;
  if (verifiedTokenPayload) {
    if (verifiedTokenPayload.iss !== "NuxtIam") {
      console.log("Token issuer unknown");
      return createError({
        statusCode: 403,
        statusMessage: "Forbidden"
      });
    }
    const tokenId = verifiedTokenPayload.jti;
    if (!tokenId) {
      console.log("Token id not found");
      return createError({
        statusCode: 403,
        statusMessage: "Forbidden"
      });
    }
    const tokenNotActiveError = await refreshTokenActive(tokenId);
    if (tokenNotActiveError) {
      console.log("Token not active");
      console.log("Detecting a stolen refresh token");
      const user2 = await getUserByEmail(verifiedTokenPayload.email);
      if (!user2) {
        console.log("User not found from verified refresh token");
        console.log("This should not happen. Please check system integrity.");
        return createError({
          statusCode: 403,
          statusMessage: "Forbidden"
        });
      }
      console.log(
        `Attempt to deactivate all user:${user2.email}'s refresh tokens`
      );
      const deactivateError = await deactivateRefreshTokens(user2.id);
      if (deactivateError) {
        console.log(
          `Deactivate all user:${user2.email}'s refresh tokens failed`
        );
        console.log(
          `Should attempt to lock user's account if feature is available`
        );
        return deactivateError;
      }
      console.log(
        `All user:${user2.email}'s refresh tokens deactivated. User must login`
      );
      return tokenNotActiveError;
    }
    const user = await getUserByEmail(verifiedTokenPayload.email);
    if (!user) {
      console.log("Failed to return user by email");
      return createError({
        statusCode: 403,
        statusMessage: "Forbidden"
      });
    }
    verifiedUser = user;
  }
  if (verifiedUser)
    return verifiedUser;
  return createError({
    statusCode: 403,
    statusMessage: "Forbidden"
  });
}
async function storeRefreshToken(tokenId, userId) {
  let error = null;
  await prisma$b.refresh_tokens.create({
    data: {
      token_id: tokenId,
      user_id: userId,
      is_active: true
    }
  }).then(async () => {
  }).catch(async (e) => {
    console.error(e);
    error = e;
  });
  if (error)
    return createError({ statusCode: 500, statusMessage: "Server error" });
}
async function deactivateRefreshTokens(userId) {
  let error = null;
  await prisma$b.refresh_tokens.updateMany({
    where: {
      user_id: userId
    },
    data: {
      is_active: false
    }
  }).then(async () => {
  }).catch(async (e) => {
    console.error(e);
    error = e;
  });
  if (error)
    return createError({ statusCode: 500, statusMessage: "Server error" });
}
async function addOneTimeToken(tokenId, expiresAt) {
  let error = null;
  await prisma$b.one_time_tokens.create({
    data: {
      token_id: tokenId,
      expires_at: expiresAt
    }
  }).catch(async (e) => {
    console.error(e);
    error = e;
  });
  if (error) {
    console.log("Error adding one time token");
    return createError({
      statusCode: 500,
      statusMessage: "Server error"
    });
  }
  console.log("One time token added successfully");
  return tokenId;
}
function getTokenPayload(token, type) {
  let error = null;
  const tokenTypes = ["access", "refresh", "reset"];
  let tokenSecret = "";
  let tempPayload = null;
  let payload = null;
  if (!tokenTypes.includes(type)) {
    console.log("Invalid token type");
    return error = createError({
      statusCode: 500,
      statusMessage: "Serve error"
    });
  }
  switch (type) {
    case "access":
      tokenSecret = config$3.iamAccessTokenSecret;
      break;
    case "refresh":
      tokenSecret = config$3.iamRefreshTokenSecret;
      break;
    case "reset":
      tokenSecret = config$3.iamResetTokenSecret;
      break;
  }
  jwt.verify(token, tokenSecret, (err, jwtPayload) => {
    if (err) {
      console.log(err);
      error = createError({
        statusCode: 500,
        statusMessage: "Server error"
      });
    } else {
      tempPayload = jwtPayload;
    }
  });
  if (error)
    return error;
  if (tempPayload) {
    console.log("Jwt payload obtained successfully");
    payload = tempPayload;
    return payload;
  }
  console.log("We should never reach here");
  return createError({
    statusCode: 500,
    statusMessage: "Server error"
  });
}
async function validateCsrfToken(event) {
  const body = await readBody(event);
  const csrfToken = body.csrf_token;
  const sessionId = getCookie(event, "iam-sid");
  if (!sessionId) {
    console.log("Missing session id cookie");
    return createError({
      statusCode: 403,
      statusMessage: "Invalid session"
    });
  }
  if (!csrfToken) {
    console.log("Missing csrf token");
    return createError({
      statusCode: 403,
      statusMessage: "Missing csrf token"
    });
  }
  const sessionOrError = await validateCsrfSessionToken(sessionId, csrfToken);
  if (sessionOrError instanceof H3Error)
    return sessionOrError;
}
async function validateCsrfSessionToken(sessionId, csrfToken) {
  let error = null;
  let session = null;
  await prisma$b.sessions.findFirst({
    where: {
      sid: sessionId,
      csrf_token: csrfToken,
      is_active: true
    }
  }).then(async (result) => {
    session = result;
  }).catch(async (e) => {
    console.error(e);
    error = e;
  });
  if (error) {
    console.log("Error validating user session");
    return createError({
      statusCode: 500,
      statusMessage: "Server error"
    });
  }
  if (session)
    return session;
  console.log(
    "We should not be getting this validate csrf session token error"
  );
  return createError({
    statusCode: 500,
    statusMessage: "Server error"
  });
}

const config$2 = useRuntimeConfig();
async function login$1(event) {
  const tokens = {};
  const body = await readBody(event);
  if (!body)
    return createError({
      statusCode: 401,
      statusMessage: "No email or password provided"
    });
  const user = await getUserByEmail(body.email);
  if (user === null) {
    return createError({ statusCode: 401, statusMessage: "Invalid login" });
  }
  if (await verifyPassword(user.password, body.password)) {
    await updateLastLogin(user.email);
    const publicUser = {
      uuid: user.uuid,
      email: user.email
    };
    const accessToken = jwt.sign(publicUser, config$2.iamAccessTokenSecret, {
      expiresIn: "15m",
      issuer: "NuxtIam",
      jwtid: makeUuid()
    });
    const tokenId = makeUuid();
    const refreshToken = jwt.sign(publicUser, config$2.iamRefreshTokenSecret, {
      expiresIn: "14d",
      issuer: "NuxtIam",
      jwtid: tokenId
    });
    const deactivateTokenError = await deactivateRefreshTokens(user.id);
    if (deactivateTokenError)
      return deactivateTokenError;
    const storeTokenError = await storeRefreshToken(tokenId, user.id);
    if (storeTokenError)
      return storeTokenError;
    tokens.accessToken = accessToken;
    tokens.refreshToken = refreshToken;
    const sessionOrTokenError = await createUserSession(
      user.id,
      accessToken,
      event
    );
    if (sessionOrTokenError instanceof H3Error) {
      console.log("Trouble creating session");
      return createError({ statusCode: 500, statusMessage: "Server error" });
    }
    const session = sessionOrTokenError;
    tokens.sid = session.sid;
    return tokens;
  }
  return createError({ statusCode: 401, statusMessage: "Invalid login" });
}
async function logout$1(event) {
  let sessionOrError = {};
  const sessionId = getCookie(event, "iam-sid");
  if (sessionId)
    sessionOrError = await getUserSession(sessionId);
  if (sessionOrError instanceof H3Error) {
    console.log(
      "Error with logout. Sessions might not be disabled. Security risk."
    );
    console.log("Proceeding with removing all cookies");
    deleteCookie(event, "iam-access-token");
    deleteCookie(event, "iam-refresh-token");
    deleteCookie(event, "iam-sid");
  } else {
    const session = sessionOrError;
    const userOrNull = await getUserById(session.user_id);
    console.log("Cookies and session id removed.");
    deleteCookie(event, "iam-access-token");
    deleteCookie(event, "iam-refresh-token");
    deleteCookie(event, "iam-sid");
    if (userOrNull === null) {
      console.log("Error with logout. User not found");
    } else {
      const user = userOrNull;
      const deactivateError = await deactivateRefreshTokens(user.id);
      if (deactivateError) {
        console.log(`Failed to deactivate user:${user.email}'s refresh tokens`);
        return createError({
          statusCode: 500,
          statusMessage: "Logout error."
        });
      }
      const deactivateSessionsError = await deactivateUserSessions(user.id);
      if (deactivateSessionsError instanceof H3Error)
        return deactivateSessionsError;
      let endUserSessionOrError = {};
      if (sessionId)
        endUserSessionOrError = await endUserSession(sessionId);
      if (endUserSessionOrError instanceof H3Error) {
        console.log("Error ending user session in logout. Security risk");
      }
    }
  }
}
async function getTokensAfterGoogleLogin(user, event) {
  const tokens = {};
  if (user === null) {
    return createError({
      statusCode: 401,
      statusMessage: "Invalid login. User not found."
    });
  }
  await updateLastLogin(user.email);
  const publicUser = {
    uuid: user.uuid,
    email: user.email
  };
  const accessToken = jwt.sign(publicUser, config$2.iamAccessTokenSecret, {
    expiresIn: "15m",
    issuer: "NuxtIam",
    jwtid: makeUuid()
  });
  const tokenId = makeUuid();
  const refreshToken = jwt.sign(publicUser, config$2.iamRefreshTokenSecret, {
    expiresIn: "14d",
    issuer: "NuxtIam",
    jwtid: tokenId
  });
  const deactivateTokenError = await deactivateRefreshTokens(user.id);
  if (deactivateTokenError)
    return deactivateTokenError;
  const storeTokenError = await storeRefreshToken(tokenId, user.id);
  if (storeTokenError)
    return storeTokenError;
  tokens.accessToken = accessToken;
  tokens.refreshToken = refreshToken;
  const sessionOrTokenError = await createUserSession(
    user.id,
    accessToken,
    event
  );
  if (sessionOrTokenError instanceof H3Error) {
    console.log("Trouble creating session");
    return createError({ statusCode: 500, statusMessage: "Server error" });
  }
  const session = sessionOrTokenError;
  tokens.sid = session.sid;
  return tokens;
}
async function verifyGoogleToken(token) {
  let tokenPayload = null;
  const clientId = useRuntimeConfig().iamGoogleClientId;
  const client = new OAuth2Client();
  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: clientId
      // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    tokenPayload = ticket.getPayload();
  }
  await verify().catch(console.error);
  if (tokenPayload)
    return tokenPayload;
  else {
    console.log("Error verifying Google access token");
    return createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }
}
function getAuthenticatedRoutes() {
  return [
    "/api/iam/users",
    "/api/iam/refresh-tokens"
  ];
}

const config$1 = useRuntimeConfig();
async function sendResetEmail(user, token) {
  const emailers = ["nodemailer-service", "nodemailer-smtp", "sendgrid"];
  console.log("Preparing to send reset email");
  const emailer = config$1.iamEmailer;
  const url = config$1.iamPublicUrl;
  const service = config$1.iamNodemailerService;
  const serviceSender = config$1.iamNodemailerServiceSender;
  const servicePassword = config$1.iamNodemailerServicePassword;
  const smtpHost = config$1.iamNodemailerSmtpHost;
  const smtpPort = config$1.iamNodemailerSmtpPort;
  const smtpSender = config$1.iamNodemailerSmtpSender;
  const smtpPassword = config$1.iamNodemailerSmtpPassword;
  if (!emailers.includes(emailer)) {
    console.log(
      `Error: Emailer: ${emailer} is an unknown emailer. Aborting send.`
    );
    return createError({
      statusCode: 500,
      statusMessage: "Server error"
    });
  }
  const options = {
    to: user.email,
    subject: "Nuxt IAM reset password link",
    text: `
    Hello ${user.first_name},
    You requested to reset your password. Please follow the link below. If you did not request to reset your password, 
    disregard this email. Your last login time was: ${user.last_login}.
      
    This is a one-time password link that will reveal a temporary password.
  
    Password reset link: ${url}/iam/verify?token=${token}
    `,
    html: `
    <p>Hello ${user.first_name}</p>,
    <p>You requested to reset your password. Please follow the link below. If you did not request to reset your password, 
    disregard this email. Your last login time was: ${user.last_login}.</p>
    <p>This is a one-time password link that will reveal a temporary password.</p>
    <p>Password reset link: ${url}/iam/verify?token=${token}</p>`
  };
  if (emailer === "nodemailer-service") {
    const serviceOptions = options;
    serviceOptions.from = serviceSender;
    const errorOrSent = await emailWithNodemailerService(
      serviceSender,
      servicePassword,
      service,
      serviceOptions
    );
    if (errorOrSent instanceof H3Error)
      return errorOrSent;
    return true;
  }
  if (emailer === "nodemailer-smtp") {
    const smtpOptions = options;
    smtpOptions.from = smtpSender;
    const errorOrSent = await emailWithNodemailerSmtp(
      smtpSender,
      smtpPassword,
      smtpHost,
      smtpPort,
      smtpOptions
    );
    if (errorOrSent instanceof H3Error)
      return errorOrSent;
    return true;
  }
  if (emailer === "sendgrid") {
    const sendgridOptions = options;
    sendgridOptions.from = config$1.iamSendgridSender;
    const errorOrSent = await emailWithSendgrid(options);
    if (errorOrSent instanceof H3Error)
      return errorOrSent;
    return true;
  }
  console.log("We should not get here");
  return createError({
    statusCode: 500,
    statusMessage: "Server error"
  });
}
async function sendVerifyEmail(user, token) {
  const emailers = ["nodemailer-service", "nodemailer-smtp", "sendgrid"];
  console.log("Preparing to send verification email");
  const emailer = config$1.iamEmailer;
  const url = config$1.iamPublicUrl;
  const service = config$1.iamNodemailerService;
  const serviceSender = config$1.iamNodemailerServiceSender;
  const servicePassword = config$1.iamNodemailerServicePassword;
  const smtpHost = config$1.iamNodemailerSmtpHost;
  const smtpPort = config$1.iamNodemailerSmtpPort;
  const smtpSender = config$1.iamNodemailerSmtpSender;
  const smtpPassword = config$1.iamNodemailerSmtpPassword;
  if (!emailers.includes(emailer)) {
    console.log(
      `Error: Emailer: ${emailer} is an unknown emailer. Aborting send.`
    );
    return createError({
      statusCode: 500,
      statusMessage: "Server error"
    });
  }
  const options = {
    to: user.email,
    subject: "Nuxt IAM please verify your email",
    text: `
    Hello ${user.first_name},
    You recently created an account at ${url} on ${user.created_at}. Please verify your email to continue with your account. Please follow the link below to verify your email. 
      
    Follow the link to verify your email: ${url}/iam/verifyemail?token=${token}
    `,
    html: `
    <p>Hello ${user.first_name}</p>,
    <p>You recently created an account at ${url} on ${user.created_at}. Please verify your email to continue with your account. Please follow the link below to verify your email.</p> 
      
    <p>Follow the link to verify your email: ${url}/iam/verifyemail?token=${token}</p>`
  };
  if (emailer === "nodemailer-service") {
    const serviceOptions = options;
    serviceOptions.from = serviceSender;
    const errorOrSent = await emailWithNodemailerService(
      serviceSender,
      servicePassword,
      service,
      serviceOptions
    );
    if (errorOrSent instanceof H3Error)
      return errorOrSent;
    return true;
  }
  if (emailer === "nodemailer-smtp") {
    const smtpOptions = options;
    smtpOptions.from = smtpSender;
    const errorOrSent = await emailWithNodemailerSmtp(
      smtpSender,
      smtpPassword,
      smtpHost,
      smtpPort,
      smtpOptions
    );
    if (errorOrSent instanceof H3Error)
      return errorOrSent;
    return true;
  }
  if (emailer === "sendgrid") {
    const sendgridOptions = options;
    sendgridOptions.from = config$1.iamSendgridSender;
    const errorOrSent = await emailWithSendgrid(options);
    if (errorOrSent instanceof H3Error)
      return errorOrSent;
    return true;
  }
  console.log("We should not get here");
  return createError({
    statusCode: 500,
    statusMessage: "Server error"
  });
}
async function emailWithSendgrid(options) {
  const apiKey = config$1.iamSendGridApiKey;
  let emailError = null;
  if (!apiKey) {
    console.log("Sendgrid Api key not found. Cannot send email. Aborting.");
    return createError({ statusCode: 500, statusMessage: "Server error" });
  }
  sgMail.setApiKey(apiKey);
  const msg = {
    to: options.to,
    from: options.from,
    // Change to your verified sender
    subject: options.subject,
    text: options.text ? options.text : "",
    html: options.html ? options.html : options.text
  };
  console.log("=======SENDGRID EMAIL OPTIONS =========================");
  console.log("from: ", msg.from);
  console.log("to: ", msg.to);
  console.log("subject: ", msg.subject);
  console.log("=======SENDGRID EMAIL OPTIONS END=========================");
  console.log("Attempting to send email with Sendgrid");
  console.log(
    "Sendgrid requires verified senders. Make sure your sender is verified by Sendgrid."
  );
  await sgMail.send(msg).then(() => {
    console.log("Email sent");
  }).catch((error) => {
    console.error(error);
    emailError = error;
  });
  if (emailError) {
    console.log("Error when sending email in Sendgrid");
    return createError({ statusCode: 500, statusMessage: "Server error" });
  }
  return true;
}
async function emailWithNodemailerService(sender, password, service, options) {
  let errorFound = null;
  const emailOptions = {
    from: options.from,
    to: options.to,
    subject: options.subject,
    text: options.text,
    html: options.html
  };
  console.log("Attempting to send mail using nodemailer-service");
  if (!service) {
    console.log("Error: Service not specified. Aborting email send.");
    return createError({ statusCode: 500, statusMessage: "Server error" });
  }
  if (!sender) {
    console.log("Error: Sender email not specified. Aborting email send.");
    return createError({ statusCode: 500, statusMessage: "Server error" });
  }
  if (!password) {
    console.log("Error: Email password not specified. Aborting email send.");
    return createError({ statusCode: 500, statusMessage: "Server error" });
  }
  console.log("=======NODEMAILER-SERVICE EMAIL OPTIONS=============");
  console.log("service: ", service);
  console.log("from: ", emailOptions.from);
  console.log("to: ", emailOptions.to);
  console.log("=========NODEMAILER-SERVICE EMAIL OPTIONS END=================");
  const transporter = nodemailer.createTransport({
    service,
    auth: {
      user: sender,
      pass: password
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false
    }
  });
  transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
      console.log("Email server verify problem");
      errorFound = error;
    } else {
      console.log("Server is ready to take our messages");
      console.log("Success: ", success);
    }
  });
  if (errorFound)
    return createError({ statusCode: 500, statusMessage: "Server error" });
  transporter.sendMail(emailOptions, (err, result) => {
    console.log(`Attempting to send email to user: ${options.to}`);
    if (err) {
      console.log(err);
      errorFound = err;
      console.log("Send email error");
    } else {
      console.log("Email successfully sent");
      console.log("Email result: ", result);
    }
  });
  if (errorFound)
    return createError({ statusCode: 500, statusMessage: "Server error" });
  return true;
}
async function emailWithNodemailerSmtp(sender, password, host, port, options) {
  let errorFound = null;
  const emailOptions = {
    from: options.from,
    to: options.to,
    subject: options.subject,
    text: options.text
  };
  console.log("Attempting to send mail using nodemailer-service");
  if (!host) {
    console.log("Error: Email host not specified. Aborting email send.");
    return createError({ statusCode: 500, statusMessage: "Server error" });
  }
  if (!sender) {
    console.log("Error: Sender email not specified. Aborting email send.");
    return createError({ statusCode: 500, statusMessage: "Server error" });
  }
  if (!sender) {
    console.log("Error: Sender password not specified. Aborting email send.");
    return createError({ statusCode: 500, statusMessage: "Server error" });
  }
  console.log("=======NODEMAILER-SMTP EMAIL OPTIONS=============");
  console.log("host: ", host);
  console.log("port: ", port);
  console.log("user: ", sender);
  console.log("=========NODEMAILER-SMTP EMAIL OPTIONS END=================");
  const transporter = nodemailer.createTransport({
    host,
    port,
    pool: true,
    secure: true,
    // use TLS
    auth: {
      user: sender,
      pass: password
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false
    }
  });
  transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
      console.log("Email server verify problem");
      errorFound = error;
    } else {
      console.log("Server is ready to take our messages");
      console.log("Success: ", success);
    }
  });
  if (errorFound)
    return createError({ statusCode: 500, statusMessage: "Server error" });
  transporter.sendMail(emailOptions, (err, result) => {
    console.log(`Attempting to send email to user: ${options.to}`);
    if (err) {
      console.log(err);
      errorFound = err;
      console.log("Send email error");
    } else {
      console.log("Email successfully sent");
      console.log("Email result: ", result);
    }
  });
  if (errorFound)
    return createError({ statusCode: 500, statusMessage: "Server error" });
  return true;
}

const config = useRuntimeConfig();
const prisma$a = new PrismaClient();
async function registerUser(event) {
  const validationError = await validateUserRegistration(event);
  if (validationError)
    return validationError;
  const body = await readBody(event);
  const hashedPasswordOrError = await hashPassword(body.password);
  if (hashedPasswordOrError instanceof H3Error)
    return hashedPasswordOrError;
  const hashedPassword = hashedPasswordOrError;
  let user = {};
  let registrationError = null;
  await prisma$a.users.create({
    data: {
      first_name: body.first_name.trim(),
      last_name: body.last_name.trim(),
      uuid: makeUuid(),
      email: body.email,
      password: hashedPassword
    }
  }).then(async (response) => {
    user = response;
  }).catch(async (e) => {
    console.error(e);
    registrationError = e;
  });
  if (registrationError)
    throw createError({
      statusCode: 500,
      statusMessage: "Server error"
    });
  const newUser = user;
  return newUser;
}
async function loginUser(event) {
  const validateError = await validateUserLogin(event);
  if (validateError instanceof H3Error)
    return validateError;
  const loginErrorOrTokens = await login$1(event);
  if (loginErrorOrTokens instanceof H3Error)
    return loginErrorOrTokens;
  const tokens = loginErrorOrTokens;
  return tokens;
}
async function refreshTokens(event) {
  const errorOrTokens = await getNewTokens(event);
  if (errorOrTokens instanceof H3Error)
    return errorOrTokens;
  const tokens = errorOrTokens;
  return tokens;
}
async function logoutUser(event) {
  const error = await logout$1(event);
  if (error instanceof H3Error)
    return error;
  return true;
}
async function isAuthenticated(event) {
  let accessToken = null;
  const errorOrPlatform = getClientPlatform(event);
  if (errorOrPlatform instanceof H3Error)
    return errorOrPlatform;
  const platform = errorOrPlatform;
  if (platform === "app")
    accessToken = event.node.req.headers["iam-access-token"];
  else if (["browser", "browser-dev"].includes(platform)) {
    accessToken = getCookie(event, "iam-access-token");
  }
  if (!accessToken) {
    console.log("Error: No access token provided");
    return createError({
      statusCode: 400,
      statusMessage: "No access token provided"
    });
  }
  const accessTokenArr = accessToken.split(" ");
  const errorOrUser = verifyAccessToken(accessTokenArr[1]);
  if (errorOrUser instanceof jwt.TokenExpiredError) {
    console.log("Yes, attempt to reauthenticate");
    const errorOrTokens = await getNewTokens(event);
    if (errorOrTokens instanceof H3Error) {
      console.log("Reauthentication failed");
      return createError({
        statusCode: 500,
        statusMessage: "Reauthentication failed. Login required."
      });
    }
    const tokens = errorOrTokens;
    const errorOrPlatform2 = getClientPlatform(event);
    if (errorOrPlatform2 instanceof H3Error)
      return errorOrPlatform2;
    const platform2 = errorOrPlatform2;
    if (platform2 === "app") {
      setHeader(event, "iam-access-token", "Bearer " + tokens.accessToken);
      setHeader(event, "iam-refresh-token", "Bearer " + tokens.refreshToken);
      if (tokens.sid)
        setHeader(event, "iam-sid", tokens.sid);
    }
    if (platform2 === "browser") {
      setCookie(event, "iam-access-token", "Bearer " + tokens.accessToken, {
        httpOnly: true,
        secure: true
      });
      setCookie(event, "iam-refresh-token", "Bearer " + tokens.refreshToken, {
        httpOnly: true,
        secure: true,
        expires: dayjs().add(14, "day").toDate()
      });
      if (tokens.sid)
        setCookie(event, "iam-sid", tokens.sid);
    }
    if (platform2 === "browser-dev") {
      setCookie(event, "iam-access-token", "Bearer " + tokens.accessToken, {
        // Access tokens themselves expire in 15 mins
        expires: dayjs().add(1, "day").toDate()
      });
      setCookie(event, "iam-refresh-token", "Bearer " + tokens.refreshToken, {
        expires: dayjs().add(1, "day").toDate()
      });
      if (tokens.sid)
        setCookie(event, "iam-sid", tokens.sid);
    }
    console.log("Reauthentication successful");
    return true;
  }
  if (errorOrUser instanceof H3Error) {
    console.log("Error: ", errorOrUser);
    return false;
  } else {
    return true;
  }
}
async function getProfile(event) {
  let accessToken = null;
  const errorOrPlatform = getClientPlatform(event);
  if (errorOrPlatform instanceof H3Error)
    return errorOrPlatform;
  const platform = errorOrPlatform;
  if (platform === "app")
    accessToken = event.node.req.headers["iam-access-token"];
  else if (["browser", "browser-dev"].includes(platform))
    accessToken = getCookie(event, "iam-access-token");
  if (!accessToken) {
    console.log("Error: No access token provided");
    return createError({
      statusCode: 400,
      statusMessage: "No access token provided"
    });
  }
  const accessTokenArr = accessToken.split(" ");
  const errorOrJwtPayload = verifyAccessToken(accessTokenArr[1]);
  if (errorOrJwtPayload instanceof jwt.TokenExpiredError) {
    console.log("Yes, attempt to reauthenticate");
    const errorOrTokens = await getNewTokens(event);
    if (errorOrTokens instanceof H3Error) {
      console.log("Reauthentication failed");
      return createError({
        statusCode: 500,
        statusMessage: "Reauthentication failed. Login required."
      });
    }
    const tokens = errorOrTokens;
    if (platform === "app") {
      setHeader(event, "iam-access-token", "Bearer " + tokens.accessToken);
      setHeader(event, "iam-refresh-token", "Bearer " + tokens.refreshToken);
      if (tokens.sid)
        setHeader(event, "iam-sid", tokens.sid);
    }
    if (platform === "browser") {
      setCookie(event, "iam-access-token", "Bearer " + tokens.accessToken, {
        httpOnly: true,
        secure: true
      });
      setCookie(event, "iam-refresh-token", "Bearer " + tokens.refreshToken, {
        httpOnly: true,
        secure: true,
        expires: dayjs().add(14, "day").toDate()
      });
      if (tokens.sid)
        setCookie(event, "iam-sid", tokens.sid);
    }
    if (platform === "browser-dev") {
      setCookie(event, "iam-access-token", "Bearer " + tokens.accessToken, {
        // Access tokens themselves expire in 15 mins
        expires: dayjs().add(1, "day").toDate()
      });
      setCookie(event, "iam-refresh-token", "Bearer " + tokens.refreshToken, {
        expires: dayjs().add(1, "day").toDate()
      });
      if (tokens.sid)
        setCookie(event, "iam-sid", tokens.sid);
    }
  }
  if (errorOrJwtPayload instanceof H3Error) {
    console.log("Error: ", errorOrJwtPayload);
    return errorOrJwtPayload;
  } else {
    const jwtUser = errorOrJwtPayload;
    const user = await getUserByEmail(jwtUser.email);
    if (!user) {
      console.log("Failed obtaining user from getUserByEmail");
      return createError({
        statusCode: 500,
        statusMessage: "Failed to obtain user profile"
      });
    }
    if (!user.is_active)
      return createError({
        statusCode: 403,
        statusMessage: "Forbidden. Account has been deactivated. Please contact your administrator."
      });
    user.password = "[hidden]";
    return user;
  }
}
async function updateProfile(event) {
  let accessToken = null;
  const errorOrPlatform = getClientPlatform(event);
  if (errorOrPlatform instanceof H3Error)
    return errorOrPlatform;
  const platform = errorOrPlatform;
  if (platform === "app")
    accessToken = event.node.req.headers["iam-access-token"];
  else if (["browser", "browser-dev"].includes(platform))
    accessToken = getCookie(event, "iam-access-token");
  if (!accessToken) {
    console.log("Error: No access token provided");
    return createError({
      statusCode: 400,
      statusMessage: "No access token provided"
    });
  }
  const accessTokenArr = accessToken.split(" ");
  const errorOrJwtPayload = verifyAccessToken(accessTokenArr[1]);
  if (errorOrJwtPayload instanceof jwt.TokenExpiredError) {
    console.log("Yes, attempt to reauthenticate");
    const errorOrTokens = await getNewTokens(event);
    if (errorOrTokens instanceof H3Error) {
      console.log("Reauthentication failed");
      return createError({
        statusCode: 500,
        statusMessage: "Reauthentication failed. Login required."
      });
    }
    const tokens = errorOrTokens;
    if (platform === "app") {
      setHeader(event, "iam-access-token", "Bearer " + tokens.accessToken);
      setHeader(event, "iam-refresh-token", "Bearer " + tokens.refreshToken);
      if (tokens.sid)
        setHeader(event, "iam-sid", tokens.sid);
    }
    if (platform === "browser") {
      setCookie(event, "iam-access-token", "Bearer " + tokens.accessToken, {
        httpOnly: true,
        secure: true
      });
      setCookie(event, "iam-refresh-token", "Bearer " + tokens.refreshToken, {
        httpOnly: true,
        secure: true,
        expires: dayjs().add(14, "day").toDate()
      });
      if (tokens.sid)
        setCookie(event, "iam-sid", tokens.sid);
    }
    if (platform === "browser-dev") {
      setCookie(event, "iam-access-token", "Bearer " + tokens.accessToken, {
        // Access tokens themselves expire in 15 mins
        expires: dayjs().add(1, "day").toDate()
      });
      setCookie(event, "iam-refresh-token", "Bearer " + tokens.refreshToken, {
        expires: dayjs().add(1, "day").toDate()
      });
      if (tokens.sid)
        setCookie(event, "iam-sid", tokens.sid);
    }
  }
  if (errorOrJwtPayload instanceof H3Error) {
    console.log("Error: ", errorOrJwtPayload);
    return errorOrJwtPayload;
  } else {
    const errorOrUser = await updateUserProfile(event);
    if (errorOrUser instanceof H3Error)
      return errorOrUser;
    const user = errorOrUser;
    user.password = "[hidden]";
    return user;
  }
}
async function deleteAccount(event) {
  const body = await readBody(event);
  const uuid = body.uuid;
  if (!uuid)
    return createError({
      statusCode: 400,
      statusMessage: "User uuid not provided"
    });
  const nullOrUser = await getUserByUuid(uuid);
  if (!nullOrUser) {
    console.log(
      "User to delete from useIam not found. This should not happen."
    );
    return createError({
      statusCode: 500,
      statusMessage: "User not found"
    });
  }
  const user = nullOrUser;
  let deletedUser = null;
  let error = null;
  await prisma$a.refresh_tokens.deleteMany({
    where: {
      user_id: user.id
    }
  }).catch(async (e) => {
    console.error(e);
    error = e;
  });
  if (error)
    return createError({
      statusCode: 500,
      statusMessage: "Server error. Failed to delete account."
    });
  await prisma$a.users.delete({
    where: {
      uuid
    }
  }).then(async (result) => {
    deletedUser = result;
  }).catch(async (e) => {
    console.error(e);
    error = e;
  });
  if (error)
    return createError({
      statusCode: 500,
      statusMessage: "Server error with deleting account"
    });
  deleteCookie(event, "iam-access-token");
  deleteCookie(event, "iam-refresh-token");
  deleteCookie(event, "iam-sid");
  const deactivateSessionsError = await deactivateUserSessions(user.id);
  if (deactivateSessionsError instanceof H3Error)
    return deactivateSessionsError;
  if (deletedUser)
    return true;
  else {
    console.log(
      "This shouldn't happen: Returning false in deleting user from profile"
    );
    return false;
  }
}
async function resetPassword(event) {
  const body = await readBody(event);
  if ("email" in body === false) {
    console.log("Email missing from body for password reset");
    return createError({
      statusCode: 400,
      statusMessage: "Email missing from body for password reset"
    });
  }
  if (!validateEmail(body.email)) {
    console.log("Bad email format for password reset");
    return createError({
      statusCode: 400,
      statusMessage: "Bad email format for password reset"
    });
  }
  const nullOrUser = await getUserByEmail(body.email);
  if (!nullOrUser) {
    console.log("Could not get user from email for password reset");
    return createError({
      statusCode: 400,
      statusMessage: "Could not get user from email for password reset"
    });
  }
  const user = nullOrUser;
  const voidOrError = await deactivateRefreshTokens(user.id);
  if (voidOrError instanceof H3Error)
    return voidOrError;
  const resetUser = {
    uuid: user.uuid
  };
  const resetToken = jwt.sign(resetUser, config.iamResetTokenSecret, {
    expiresIn: "1h",
    issuer: "NuxtIam",
    jwtid: makeUuid()
  });
  const errorOrSent = await sendResetEmail(user, resetToken);
  if (errorOrSent instanceof H3Error)
    return errorOrSent;
  return true;
}
async function verifyUserEmail(event) {
  const body = await readBody(event);
  if ("email" in body === false) {
    console.log("Email missing from body for email verification");
    return createError({
      statusCode: 400,
      statusMessage: "Email missing from body for email verification"
    });
  }
  if (!validateEmail(body.email)) {
    console.log("Bad email format for email verification");
    return createError({
      statusCode: 400,
      statusMessage: "Bad email format for email verification"
    });
  }
  const nullOrUser = await getUserByEmail(body.email);
  if (!nullOrUser) {
    console.log("Could not get user from email for email verification");
    return createError({
      statusCode: 400,
      statusMessage: "Could not get user from email for email verification"
    });
  }
  const user = nullOrUser;
  const verifyUser = {
    email: user.email
  };
  const emailVerifyToken = jwt.sign(verifyUser, config.iamVerifyTokenSecret, {
    expiresIn: "24h",
    issuer: "NuxtIam",
    jwtid: makeUuid()
  });
  const errorOrSent = await sendVerifyEmail(user, emailVerifyToken);
  if (errorOrSent instanceof H3Error)
    return errorOrSent;
  return true;
}

function isOwner(userUuid, routeUuid) {
  if (userUuid !== routeUuid) {
    console.log("Authorization failed. User is not owner of record.");
    return false;
  }
  return true;
}
async function getUserFromAccessToken(event) {
  let accessToken = null;
  let tokenPayload = null;
  console.log("Attempt to get user from access token");
  let clientPlatform = event.node.req.headers["client-platform"];
  if (!clientPlatform)
    clientPlatform = "browser";
  if (clientPlatform === "app")
    accessToken = event.node.req.headers["iam-access-token"];
  else if (["browser", "browser-dev"].includes(clientPlatform)) {
    accessToken = getCookie(event, "iam-access-token");
  } else {
    console.log("Invalid client platform: ", clientPlatform);
    return null;
  }
  if (!accessToken) {
    console.log("No access token provided. Cannot get user from access token");
    return null;
  }
  const accessTokenArr = accessToken.split(" ");
  const errorOrToken = verifyAccessToken(accessTokenArr[1]);
  if (errorOrToken instanceof H3Error) {
    console.log(errorOrToken);
    console.log("Error verifying access token");
    return null;
  }
  tokenPayload = errorOrToken;
  const userOrNull = await getUserByUuid(tokenPayload.uuid);
  if (userOrNull === null) {
    console.log("Failed to get user to check for isSuperAdmin");
    return null;
  }
  const user = userOrNull;
  return user;
}

const forbiddenError$2 = createError({
  statusCode: 403,
  statusMessage: "Forbidden"
});
const _8XxIe0 = defineEventHandler(async (event) => {
  const authRoutes = getAuthenticatedRoutes();
  if (event.node.req.url)
    for (let i = 0; i < authRoutes.length; i++) {
      if (event.node.req.url.includes(authRoutes[i])) {
        const authenticated = await isAuthenticated(event);
        if (authenticated instanceof H3Error)
          throw forbiddenError$2;
        if (authenticated === false)
          throw forbiddenError$2;
        const userOrNull = await getUserFromAccessToken(event);
        if (userOrNull === null) {
          console.log("Missing access token after authentication. This should not happen.");
          throw createError({
            statusCode: 401,
            statusMessage: "Unauthorized. Missing access token."
          });
        }
        event.context.user = userOrNull;
        break;
      }
    }
});

const _pgb7i3 = defineEventHandler(async (event) => {
  console.log("request: ", event.node.req.method, " ", event.node.req.url);
});

const _opUUyl = defineEventHandler(async (event) => {
});

const _lazy_tW0eh8 = () => Promise.resolve().then(function () { return _____$7; });
const _lazy_up8FEn = () => Promise.resolve().then(function () { return index$a; });
const _lazy_u3tHjE = () => Promise.resolve().then(function () { return _____$5; });
const _lazy_q9LZ1A = () => Promise.resolve().then(function () { return index$7; });
const _lazy_BtU7F2 = () => Promise.resolve().then(function () { return _____$3; });
const _lazy_CP1XEE = () => Promise.resolve().then(function () { return index$4; });
const _lazy_M6vsqW = () => Promise.resolve().then(function () { return _____$1; });
const _lazy_xATPY9 = () => Promise.resolve().then(function () { return index$1; });
const _lazy_GjCDHB = () => Promise.resolve().then(function () { return subjects_delete$1; });
const _lazy_pQ4WSp = () => Promise.resolve().then(function () { return subjects_get$1; });
const _lazy_9hnBoz = () => Promise.resolve().then(function () { return subjects_post$1; });
const _lazy_vjwOFI = () => Promise.resolve().then(function () { return subjects_put$1; });
const _lazy_6KhEKI = () => Promise.resolve().then(function () { return tasks_delete$1; });
const _lazy_sk2ZpC = () => Promise.resolve().then(function () { return tasks_get$1; });
const _lazy_wReLNz = () => Promise.resolve().then(function () { return tasks_post$1; });
const _lazy_5psU3R = () => Promise.resolve().then(function () { return tasks_put$1; });
const _lazy_pHTytR = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '', handler: _8XxIe0, lazy: false, middleware: true, method: undefined },
  { route: '', handler: _pgb7i3, lazy: false, middleware: true, method: undefined },
  { route: '', handler: _opUUyl, lazy: false, middleware: true, method: undefined },
  { route: '/api/iam/authn/**', handler: _lazy_tW0eh8, lazy: true, middleware: false, method: undefined },
  { route: '/api/iam/authn', handler: _lazy_up8FEn, lazy: true, middleware: false, method: undefined },
  { route: '/api/iam/doodads/**', handler: _lazy_u3tHjE, lazy: true, middleware: false, method: undefined },
  { route: '/api/iam/doodads', handler: _lazy_q9LZ1A, lazy: true, middleware: false, method: undefined },
  { route: '/api/iam/refresh-tokens/**', handler: _lazy_BtU7F2, lazy: true, middleware: false, method: undefined },
  { route: '/api/iam/refresh-tokens', handler: _lazy_CP1XEE, lazy: true, middleware: false, method: undefined },
  { route: '/api/iam/users/**', handler: _lazy_M6vsqW, lazy: true, middleware: false, method: undefined },
  { route: '/api/iam/users', handler: _lazy_xATPY9, lazy: true, middleware: false, method: undefined },
  { route: '/api/subjects', handler: _lazy_GjCDHB, lazy: true, middleware: false, method: "delete" },
  { route: '/api/subjects', handler: _lazy_pQ4WSp, lazy: true, middleware: false, method: "get" },
  { route: '/api/subjects', handler: _lazy_9hnBoz, lazy: true, middleware: false, method: "post" },
  { route: '/api/subjects', handler: _lazy_vjwOFI, lazy: true, middleware: false, method: "put" },
  { route: '/api/tasks', handler: _lazy_6KhEKI, lazy: true, middleware: false, method: "delete" },
  { route: '/api/tasks', handler: _lazy_sk2ZpC, lazy: true, middleware: false, method: "get" },
  { route: '/api/tasks', handler: _lazy_wReLNz, lazy: true, middleware: false, method: "post" },
  { route: '/api/tasks', handler: _lazy_5psU3R, lazy: true, middleware: false, method: "put" },
  { route: '/__nuxt_error', handler: _lazy_pHTytR, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_pHTytR, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(true),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const server = new Server(toNodeListener(nitroApp.h3App));
function getAddress() {
  if (provider === "stackblitz" || process.env.NITRO_NO_UNIX_SOCKET) {
    return "0";
  }
  const socketName = `worker-${process.pid}-${threadId}.sock`;
  if (isWindows) {
    return join("\\\\.\\pipe\\nitro", socketName);
  } else {
    const socketDir = join(tmpdir(), "nitro");
    mkdirSync(socketDir, { recursive: true });
    return join(socketDir, socketName);
  }
}
const listenAddress = getAddress();
server.listen(listenAddress, () => {
  const _address = server.address();
  parentPort.postMessage({
    event: "listen",
    address: typeof _address === "string" ? { socketPath: _address } : { host: "localhost", port: _address.port }
  });
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection]", err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException]", err)
  );
}

const _messages = {"appName":"Nuxt","version":"","statusCode":500,"statusMessage":"Server error","description":"An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.","stack":""};
const _render = function({ messages }) {
var __t, __p = '';
__p += '<!DOCTYPE html><html><head><title>' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
' - ' +
((__t = ( messages.statusMessage )) == null ? '' : __t) +
' | ' +
((__t = ( messages.appName )) == null ? '' : __t) +
'</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1,minimum-scale=1" name="viewport"><style>.spotlight{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);opacity:0.8;filter:blur(30vh);height:60vh;bottom:-40vh}*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.bg-white{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.flex-col{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.flex-1{-webkit-box-flex:1;-ms-flex:1 1 0%;-webkit-flex:1 1 0%;flex:1 1 0%}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.font-medium{font-weight:500}.font-light{font-weight:300}.h-auto{height:auto}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-6xl{font-size:3.75rem;line-height:1}.leading-tight{line-height:1.25}.mb-8{margin-bottom:2rem}.mb-6{margin-bottom:1.5rem}.min-h-screen{min-height:100vh}.overflow-y-auto{overflow-y:auto}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-14{padding-top:3.5rem}.fixed{position:fixed}.left-0{left:0px}.right-0{right:0px}.text-black{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10{z-index:10}@media (min-width: 640px){.sm\\:text-8xl{font-size:6rem;line-height:1}.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme: dark){.dark\\:bg-black{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}</style><script>(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll(\'link[rel="modulepreload"]\'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();</script></head><body class="font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col"><div class="fixed left-0 right-0 spotlight"></div><h1 class="text-6xl sm:text-8xl font-medium mb-6">' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
'</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight">' +
((__t = ( messages.description )) == null ? '' : __t) +
'</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto"><pre class="text-xl font-light leading-tight z-10 p-8">' +
((__t = ( messages.stack )) == null ? '' : __t) +
'</pre></div></body></html>';
return __p
};
const _template = (messages) => _render({ messages: { ..._messages, ...messages } });
const template = _template;

const errorDev = /*#__PURE__*/Object.freeze({
      __proto__: null,
      template: template
});

async function register(event) {
  let response = {};
  const userOrError = await registerUser(event);
  if (userOrError instanceof H3Error) {
    response.status = "fail";
    response.error = userOrError;
    return response;
  }
  const user = userOrError;
  response.status = "success";
  response.data = {
    email: user.email
  };
  return response;
}
async function login(event) {
  const response = {};
  const errorOrPlatform = getClientPlatform(event);
  if (errorOrPlatform instanceof H3Error) {
    deleteCookie(event, "iam-access-token");
    deleteCookie(event, "iam-refresh-token");
    deleteCookie(event, "iam-sid");
    response.status = "fail";
    response.error = errorOrPlatform;
    return response;
  }
  const platform = errorOrPlatform;
  const errorOrTokens = await loginUser(event);
  if (errorOrTokens instanceof H3Error) {
    deleteCookie(event, "iam-access-token");
    deleteCookie(event, "iam-refresh-token");
    deleteCookie(event, "iam-sid");
    response.status = "fail";
    response.error = errorOrTokens;
    return response;
  }
  const tokens = errorOrTokens;
  if (platform === "app") {
    setHeader(event, "iam-access-token", "Bearer " + tokens.accessToken);
    setHeader(event, "iam-refresh-token", "Bearer " + tokens.refreshToken);
    if (tokens.sid)
      setHeader(event, "iam-sid", tokens.sid);
  }
  if (platform === "browser") {
    setCookie(event, "iam-access-token", "Bearer " + tokens.accessToken, {
      httpOnly: true,
      secure: true
    });
    setCookie(event, "iam-refresh-token", "Bearer " + tokens.refreshToken, {
      httpOnly: true,
      secure: true,
      expires: dayjs().add(14, "day").toDate()
    });
    if (tokens.sid)
      setCookie(event, "iam-sid", tokens.sid);
  }
  if (platform === "browser-dev") {
    setCookie(event, "iam-access-token", "Bearer " + tokens.accessToken, {
      // Access tokens themselves expire in 15 mins
      expires: dayjs().add(1, "day").toDate()
    });
    setCookie(event, "iam-refresh-token", "Bearer " + tokens.refreshToken, {
      expires: dayjs().add(1, "day").toDate()
    });
    if (tokens.sid)
      setCookie(event, "iam-sid", tokens.sid);
  }
  const body = await readBody(event);
  response.status = "success";
  response.data = {
    email: body.email
  };
  return response;
}
async function loginWithGoogle(event) {
  const response = {};
  const body = await readBody(event);
  const errorOrPlatform = getClientPlatform(event);
  if (errorOrPlatform instanceof H3Error) {
    deleteCookie(event, "iam-access-token");
    deleteCookie(event, "iam-refresh-token");
    deleteCookie(event, "iam-sid");
    response.status = "fail";
    response.error = errorOrPlatform;
    return response;
  }
  const platform = errorOrPlatform;
  const googleToken = body.token;
  const googleUserOrError = await verifyGoogleToken(googleToken);
  if (googleUserOrError instanceof H3Error) {
    console.log("Could not verify Google token");
    response.status = "fail";
    response.error = createError({
      statusCode: 401,
      statusMessage: "Google Login Error"
    });
    return response;
  }
  const googleUser = googleUserOrError;
  const userOrNull = await createGoogleUser(googleUser);
  if (userOrNull === null) {
    console.log("Error getting user after Google login");
    response.status = "fail";
    response.error = createError({
      statusCode: 401,
      statusMessage: "Google Login Error"
    });
    return response;
  }
  const user = userOrNull;
  const errorOrTokens = await getTokensAfterGoogleLogin(user, event);
  if (errorOrTokens instanceof H3Error) {
    deleteCookie(event, "iam-access-token");
    deleteCookie(event, "iam-refresh-token");
    deleteCookie(event, "iam-sid");
    response.status = "fail";
    response.error = errorOrTokens;
    return response;
  }
  const tokens = errorOrTokens;
  if (platform === "app") {
    setHeader(event, "iam-access-token", "Bearer " + tokens.accessToken);
    setHeader(event, "iam-refresh-token", "Bearer " + tokens.refreshToken);
    if (tokens.sid)
      setHeader(event, "iam-sid", tokens.sid);
  }
  if (platform === "browser") {
    setCookie(event, "iam-access-token", "Bearer " + tokens.accessToken, {
      httpOnly: true,
      secure: true
    });
    setCookie(event, "iam-refresh-token", "Bearer " + tokens.refreshToken, {
      httpOnly: true,
      secure: true,
      expires: dayjs().add(14, "day").toDate()
    });
    if (tokens.sid)
      setCookie(event, "iam-sid", tokens.sid);
  }
  if (platform === "browser-dev") {
    setCookie(event, "iam-access-token", "Bearer " + tokens.accessToken, {
      // Access tokens themselves expire in 15 mins
      expires: dayjs().add(1, "day").toDate()
    });
    setCookie(event, "iam-refresh-token", "Bearer " + tokens.refreshToken, {
      expires: dayjs().add(1, "day").toDate()
    });
    if (tokens.sid)
      setCookie(event, "iam-sid", tokens.sid);
  }
  response.status = "success";
  response.data = {
    email: body.email
  };
  return response;
}
async function refresh(event) {
  const response = {};
  const errorOrPlatform = getClientPlatform(event);
  if (errorOrPlatform instanceof H3Error) {
    response.status = "fail";
    response.error = errorOrPlatform;
    return response;
  }
  const platform = errorOrPlatform;
  const errorOrTokens = await refreshTokens(event);
  if (errorOrTokens instanceof H3Error) {
    response.status = "fail";
    response.error = errorOrTokens;
    return response;
  }
  const tokens = errorOrTokens;
  if (platform === "app") {
    setHeader(event, "iam-access-token", "Bearer " + tokens.accessToken);
    setHeader(event, "iam-refresh-token", "Bearer " + tokens.refreshToken);
    if (tokens.sid)
      setHeader(event, "iam-sid", tokens.sid);
  }
  if (platform === "browser") {
    setCookie(event, "iam-access-token", "Bearer " + tokens.accessToken, {
      httpOnly: true,
      secure: true
    });
    setCookie(event, "iam-refresh-token", "Bearer " + tokens.refreshToken, {
      httpOnly: true,
      secure: true,
      expires: dayjs().add(14, "day").toDate()
    });
    if (tokens.sid)
      setCookie(event, "iam-sid", tokens.sid);
  }
  if (platform === "browser-dev") {
    setCookie(event, "iam-access-token", "Bearer " + tokens.accessToken, {
      // Access tokens themselves expire in 15 mins
      expires: dayjs().add(1, "day").toDate()
    });
    setCookie(event, "iam-refresh-token", "Bearer " + tokens.refreshToken, {
      expires: dayjs().add(1, "day").toDate()
    });
    if (tokens.sid)
      setCookie(event, "iam-sid", tokens.sid);
  }
  response.status = "success";
  return response;
}
async function logout(event) {
  const response = {};
  const errorOrTrue = await logoutUser(event);
  if (errorOrTrue instanceof H3Error) {
    response.status = "fail";
    response.error = errorOrTrue;
    return response;
  }
  response.status = "success";
  return response;
}
async function isauthenticated(event) {
  const authenticated = await isAuthenticated(event);
  const response = {};
  if (authenticated instanceof H3Error) {
    response.status = "fail";
    response.error = authenticated;
  }
  if (authenticated === false) {
    response.status = "fail";
  }
  if (authenticated === true) {
    response.status = "success";
  }
  return response;
}
async function profile(event) {
  const response = {};
  let sessionOrError = {};
  const profileOrError = await getProfile(event);
  if (profileOrError instanceof H3Error) {
    response.status = "fail";
    response.error = profileOrError;
    return response;
  }
  const profile2 = profileOrError;
  const sessionId = getCookie(event, "iam-sid");
  if (sessionId)
    sessionOrError = await getUserSession(sessionId);
  if (sessionOrError instanceof H3Error) {
    console.log("Error getting user session");
    response.status = "fail";
    response.error = response.error = createError({
      statusCode: 500,
      statusMessage: "Server error"
    });
  }
  const session = sessionOrError;
  profile2.csrf_token = session.csrf_token;
  response.status = "success";
  response.data = profile2;
  return response;
}
async function update$2(event) {
  const response = {};
  const csrfTokenError = await validateCsrfToken(event);
  if (csrfTokenError instanceof H3Error) {
    console.log("Csrf token error");
    response.status = "fail";
    response.error = createError({
      statusCode: 403,
      statusMessage: "Missing or invalid csrf token"
    });
    return response;
  }
  const profileOrError = await updateProfile(event);
  if (profileOrError instanceof H3Error) {
    response.status = "fail";
    response.error = profileOrError;
    return response;
  }
  const profile2 = profileOrError;
  response.status = "success";
  response.data = profile2;
  return response;
}
async function destroy$3(event) {
  const response = {};
  const csrfTokenError = await validateCsrfToken(event);
  if (csrfTokenError instanceof H3Error) {
    console.log("Csrf token error");
    response.status = "fail";
    response.error = createError({
      statusCode: 403,
      statusMessage: "Missing or invalid csrf token"
    });
    return response;
  }
  const deleteOrError = await deleteAccount(event);
  if (deleteOrError instanceof H3Error) {
    response.status = "fail";
    response.error = deleteOrError;
    return response;
  }
  const userDeleted = deleteOrError;
  if (userDeleted === false) {
    response.status = "fail";
    response.error = createError({
      statusCode: 500,
      statusMessage: "Error deleting user account"
    });
    return response;
  }
  response.status = "success";
  return response;
}
async function reset(event) {
  const response = {};
  deleteCookie(event, "iam-access-token");
  deleteCookie(event, "iam-refresh-token");
  deleteCookie(event, "iam-sid");
  const errorOrReset = await resetPassword(event);
  if (errorOrReset instanceof H3Error) {
    console.log("Error: Failed to reset user password");
  }
  response.status = "success";
  return response;
}
async function verifyReset(event) {
  const response = {};
  deleteCookie(event, "iam-access-token");
  deleteCookie(event, "iam-refresh-token");
  deleteCookie(event, "iam-sid");
  const body = await readBody(event);
  const token = body.token;
  if (!token) {
    response.status = "fail";
    response.error = createError({
      statusCode: 401,
      statusMessage: "Unauthorized"
    });
    return response;
  }
  const userOrError = verifyPasswordResetToken(token);
  if (userOrError instanceof jwt.TokenExpiredError) {
    console.log("Expired password reset token");
    response.status = "fail";
    response.error = createError({
      statusCode: 401,
      statusMessage: "Link has expired"
    });
    return response;
  }
  if (userOrError instanceof H3Error) {
    console.log("Other error with password reset token");
    response.status = "fail";
    response.error = createError({
      statusCode: 500,
      statusMessage: "Server error"
    });
    return response;
  }
  const errorOrTokenPayload = getTokenPayload(token, "reset");
  if (errorOrTokenPayload instanceof H3Error) {
    console.log("Get token payload error");
    response.status = "fail";
    response.error = createError({
      statusCode: 500,
      statusMessage: "Server error"
    });
    return response;
  }
  const tokenPayload = errorOrTokenPayload;
  if (!tokenPayload.jti) {
    console.log("Token payload has no id (jwt.jti)");
    response.status = "fail";
    response.error = createError({
      statusCode: 500,
      statusMessage: "Server error"
    });
    return response;
  }
  if (tokenPayload.jti !== await addOneTimeToken(tokenPayload.jti, /* @__PURE__ */ new Date())) {
    console.log("Adding one time token failed. Token is probably already used");
    response.status = "fail";
    response.error = createError({
      statusCode: 500,
      statusMessage: "Server error"
    });
    return response;
  }
  const user = userOrError;
  const errorOrPassword = await generateNewPassword(user.uuid);
  if (errorOrPassword instanceof H3Error) {
    response.status = "fail";
    response.error = errorOrPassword;
    return response;
  }
  const password = errorOrPassword;
  response.status = "success";
  response.data = {
    pass: password
  };
  return response;
}
async function verifyEmail(event) {
  const response = {};
  const errorOrReset = await verifyUserEmail(event);
  if (errorOrReset instanceof H3Error) {
    console.log("Error: Failed to send email to verify user email");
  }
  response.status = "success";
  return response;
}
async function verifyEmailToken(event) {
  const response = {};
  const body = await readBody(event);
  const token = body.token;
  if (!token) {
    response.status = "fail";
    response.error = createError({
      statusCode: 401,
      statusMessage: "Unauthorized"
    });
    return response;
  }
  const jwtPayloadOrError = verifyEmailVerificationToken(token);
  if (jwtPayloadOrError instanceof jwt.TokenExpiredError) {
    console.log("Expired email verification reset token");
    response.status = "fail";
    response.error = createError({
      statusCode: 401,
      statusMessage: "Link has expired"
    });
    return response;
  }
  if (jwtPayloadOrError instanceof H3Error) {
    console.log("Other error with email reset token");
    response.status = "fail";
    response.error = createError({
      statusCode: 500,
      statusMessage: "Server error"
    });
    return response;
  }
  const jwtPayload = jwtPayloadOrError;
  const updateError = await updateEmailVerifiedTrue(jwtPayload.email);
  if (updateError) {
    console.log("Error updating verified email to true");
    response.status = "fail";
    response.error = createError({
      statusCode: 500,
      statusMessage: "Server error"
    });
    return response;
  }
  response.status = "success";
  response.data = {
    email: jwtPayload.email
  };
  return response;
}

const router$3 = createRouter$1();
router$3.get("/profile", defineEventHandler(async (event) => {
  return await profile(event);
}));
router$3.get("/isauthenticated", defineEventHandler(async (event) => {
  return await isauthenticated(event);
}));
router$3.post("/register", defineEventHandler(async (event) => {
  return await register(event);
}));
router$3.post("/login", defineEventHandler(async (event) => {
  return await login(event);
}));
router$3.post("/login-google", defineEventHandler(async (event) => {
  return await loginWithGoogle(event);
}));
router$3.post("/refresh", defineEventHandler(async (event) => {
  return await refresh(event);
}));
router$3.post("/reset", defineEventHandler(async (event) => {
  return await reset(event);
}));
router$3.post("/verifyreset/:token", defineEventHandler(async (event) => {
  return await verifyReset(event);
}));
router$3.post("/verifyemail", defineEventHandler(async (event) => {
  return await verifyEmail(event);
}));
router$3.post("/verifyemailtoken", defineEventHandler(async (event) => {
  return await verifyEmailToken(event);
}));
router$3.post("/logout", defineEventHandler(async (event) => {
  return await logout(event);
}));
router$3.put("/update", defineEventHandler(async (event) => {
  return await update$2(event);
}));
router$3.delete("/delete", defineEventHandler(async (event) => {
  return await destroy$3(event);
}));
const authnController = useBase("/api/iam/authn", router$3.handler);

const _____$6 = defineEventHandler(async (event) => {
  return authnController(event);
});

const _____$7 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: _____$6
});

const index$9 = defineEventHandler(async (event) => {
  return authnController(event);
});

const index$a = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: index$9
});

async function index$8(event) {
  const response = {};
  const info = "get all doodads";
  response.status = "success";
  response.data = {
    info
  };
  return response;
}
async function create$1(event) {
  const response = {};
  const info = "create a doodad";
  response.status = "success";
  response.data = {
    info
  };
  return response;
}
async function show$1(event) {
  const response = {};
  const info = "show a doodad";
  response.status = "success";
  response.data = {
    info
  };
  return response;
}
async function update$1(event) {
  const response = {};
  const info = "update a doodad";
  response.status = "success";
  response.data = {
    info
  };
  return response;
}
async function destroy$2(event) {
  const response = {};
  const info = "delete a doodad";
  response.status = "success";
  response.data = {
    info
  };
  return response;
}

const router$2 = createRouter$1();
router$2.get("/", defineEventHandler(async (event) => {
  return await index$8();
}));
router$2.post("/", defineEventHandler(async (event) => {
  return await create$1();
}));
router$2.get("/:id", defineEventHandler(async (event) => {
  return await show$1();
}));
router$2.put("/:id", defineEventHandler(async (event) => {
  return await update$1();
}));
router$2.delete("/:id", defineEventHandler(async (event) => {
  return await destroy$2();
}));
router$2.get("/:id/abc/:author-id", defineEventHandler((event) => {
  const headers = getHeaders(event);
  return {
    params: event.context.params,
    headers
  };
}));
const doodadsController = useBase("/api/iam/doodads", router$2.handler);

const _____$4 = defineEventHandler(async (event) => {
  return doodadsController(event);
});

const _____$5 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: _____$4
});

const index$6 = defineEventHandler(async (event) => {
  return doodadsController(event);
});

const index$7 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: index$6
});

const prisma$9 = new PrismaClient();
async function getAllRefreshTokens(event) {
  var _a, _b;
  let refreshTokens = [];
  let error = null;
  const queryParams = getQuery(event);
  let skip = queryParams.skip;
  let take = queryParams.take;
  await prisma$9.refresh_tokens.findMany({
    skip: (_a = parseInt(skip)) != null ? _a : 0,
    take: (_b = parseInt(take)) != null ? _b : 100
  }).then(async (result) => {
    refreshTokens = result;
  }).catch(async (e) => {
    console.error(e);
    error = e;
  });
  if (error) {
    console.log("Error retrieving refresh tokens");
    return createError({
      statusCode: 500,
      statusMessage: "Server error"
    });
  }
  return refreshTokens;
}
async function destroyRefreshToken(event) {
  var _a;
  const id = (_a = event.context.params) == null ? void 0 : _a.id;
  if (!id) {
    console.log("Refresh token id is missing for delete");
    return createError({
      statusCode: 400,
      statusMessage: "Refresh token id is missing for delete"
    });
  }
  let token = null;
  let error = null;
  await prisma$9.refresh_tokens.delete({
    where: {
      id: parseInt(id)
    }
  }).then(async (result) => {
    token = result;
  }).catch(async (e) => {
    console.error(e);
    error = e;
  });
  if (error) {
    console.log("Error deleting refresh token");
    return createError({
      statusCode: 500,
      statusMessage: "Server error"
    });
  }
  if (token)
    return true;
  else {
    console.log("Should not return false here");
    return false;
  }
}
async function destroyRefreshTokens(event) {
  let tokens = null;
  let error = null;
  await prisma$9.refresh_tokens.deleteMany({
    where: {
      id: {
        gt: 0
      }
    }
  }).then(async (result) => {
    tokens = result;
  }).catch(async (e) => {
    console.error(e);
    error = e;
  });
  if (error) {
    console.log("Error deleting refresh tokens");
    return createError({
      statusCode: 500,
      statusMessage: "Server error"
    });
  }
  if (tokens) {
    console.log(tokens);
    return true;
  } else {
    console.log("We should not return false here");
    return false;
  }
}

async function index$5(event) {
  const response = {};
  const errorOrTokens = await getAllRefreshTokens(event);
  if (errorOrTokens instanceof H3Error) {
    response.status = "fail";
    response.error = errorOrTokens;
    return response;
  }
  const tokens = errorOrTokens;
  response.status = "success";
  response.data = tokens;
  return response;
}
async function destroy$1(event) {
  const response = {};
  const errorOrBoolean = await destroyRefreshToken(event);
  if (errorOrBoolean instanceof H3Error) {
    response.status = "fail";
    response.error = errorOrBoolean;
    return response;
  }
  if (errorOrBoolean === false) {
    response.status = "fail";
    return response;
  } else {
    response.status = "success";
    return response;
  }
}
async function destroyAll(event) {
  const response = {};
  const errorOrBoolean = await destroyRefreshTokens();
  if (errorOrBoolean instanceof H3Error) {
    response.status = "fail";
    response.error = errorOrBoolean;
    return response;
  }
  if (errorOrBoolean === false) {
    response.status = "fail";
    return response;
  } else {
    response.status = "success";
    return response;
  }
}

function canAccessAdmin(user) {
  if (user.role === "SUPER_ADMIN" && user.email_verified)
    return true;
  return false;
}
function hasPermission(user, permission) {
  const permissions = {
    "can-access-admin": canAccessAdmin(user)
  };
  if (permission in permissions === false) {
    console.log(`No such permission as "${permission}"`);
    return false;
  } else {
    return permissions[permission];
  }
}

const userNotFoundError$1 = createError({
  statusCode: 401,
  statusMessage: "Unauthorized. User not found."
});
const forbiddenError$1 = createError({
  statusCode: 403,
  statusMessage: "Forbidden"
});
const csrfTokenError$1 = createError({
  statusCode: 403,
  statusMessage: "Missing or invalid csrf token"
});
const router$1 = createRouter$1();
router$1.get("/", defineEventHandler(async (event) => {
  if (!event.context.user)
    throw userNotFoundError$1;
  if (!canAccessAdmin(event.context.user))
    throw forbiddenError$1;
  return await index$5(event);
}));
router$1.delete("/:id", defineEventHandler(async (event) => {
  const tokenOrError = await validateCsrfToken(event);
  if (tokenOrError instanceof H3Error)
    throw csrfTokenError$1;
  if (!event.context.user)
    throw userNotFoundError$1;
  if (!canAccessAdmin(event.context.user))
    throw forbiddenError$1;
  return await destroy$1(event);
}));
router$1.delete("/", defineEventHandler(async (event) => {
  const tokenOrError = await validateCsrfToken(event);
  if (tokenOrError instanceof H3Error)
    throw csrfTokenError$1;
  if (!event.context.user)
    throw userNotFoundError$1;
  if (!canAccessAdmin(event.context.user))
    throw forbiddenError$1;
  return await destroyAll();
}));
const refreshTokensController = useBase("/api/iam/refresh-tokens", router$1.handler);

const _____$2 = defineEventHandler(async (event) => {
  return refreshTokensController(event);
});

const _____$3 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: _____$2
});

const index$3 = defineEventHandler(async (event) => {
  return refreshTokensController(event);
});

const index$4 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: index$3
});

const prisma$8 = new PrismaClient();
async function getAllUsers(event) {
  var _a, _b;
  let users = [];
  let error = null;
  const queryParams = getQuery(event);
  let skip = queryParams.skip;
  let take = queryParams.take;
  await prisma$8.users.findMany({
    skip: (_a = parseInt(skip)) != null ? _a : 0,
    take: (_b = parseInt(take)) != null ? _b : 100
  }).then(async (result) => {
    users = result;
  }).catch(async (e) => {
    console.error(e);
    error = e;
  });
  if (error) {
    console.log("Error retrieving users");
    return createError({
      statusCode: 500,
      statusMessage: "Server error"
    });
  }
  return users;
}
async function showUser(event) {
  var _a;
  const uuid = (_a = event.context.params) == null ? void 0 : _a.uuid;
  if (!uuid) {
    console.log("Missing user uuid");
    return createError({
      statusCode: 400,
      statusMessage: "Missing user uuid"
    });
  }
  let error = null;
  let user = {};
  await prisma$8.users.findUnique({
    where: {
      uuid
    }
  }).then(async (result) => {
    user = result;
  }).catch(async (e) => {
    console.error(e);
    error = e;
  });
  if (error) {
    console.log("Error getting one user");
    return createError({
      statusCode: 500,
      statusMessage: "Server error"
    });
  }
  if (user && "email" in user === false) {
    return createError({
      statusCode: 404,
      statusMessage: "User not found"
    });
  }
  if (user === null)
    return createError({
      statusCode: 404,
      statusMessage: "User not found"
    });
  return user;
}
async function updateUser(event) {
  var _a;
  const errorOrVoid = await validateUserUpdate(event);
  if (errorOrVoid instanceof H3Error)
    return errorOrVoid;
  const body = await readBody(event);
  const uuid = (_a = event.context.params) == null ? void 0 : _a.uuid;
  if (!uuid) {
    console.log("Missing user uuid");
    return createError({
      statusCode: 400,
      statusMessage: "Missing user uuid"
    });
  }
  let user = {};
  let error = null;
  await prisma$8.users.update({
    where: {
      uuid
    },
    data: {
      first_name: body.first_name,
      last_name: body.last_name,
      role: body.role,
      permissions: body.permissions,
      is_active: body.is_active
    }
  }).then(async (response) => {
    user = response;
  }).catch(async (e) => {
    console.error(e);
    error = e;
  });
  if (error)
    return createError({
      statusCode: 500,
      statusMessage: "Server error"
    });
  return user;
}
async function destroyUser(event) {
  var _a;
  console.log("Got in destroyUser");
  const errorOrVoid = await validateUserDelete(event);
  if (errorOrVoid instanceof H3Error)
    return errorOrVoid;
  const uuid = (_a = event.context.params) == null ? void 0 : _a.uuid;
  if (!uuid) {
    console.log("Missing user uuid");
    return createError({
      statusCode: 400,
      statusMessage: "Missing user uuid"
    });
  }
  let user = {};
  let error = null;
  await prisma$8.users.delete({
    where: {
      uuid
    }
  }).then(async (result) => {
    user = result;
  }).catch(async (e) => {
    console.error(e);
    error = e;
  });
  if (error) {
    console.log("Error deleting user");
    return createError({
      statusCode: 500,
      statusMessage: "Server error"
    });
  }
  if (user)
    return true;
  else
    return false;
}

async function index$2(event) {
  const response = {};
  const errorOrUsers = await getAllUsers(event);
  let sessionOrError = {};
  if (errorOrUsers instanceof H3Error) {
    response.status = "fail";
    response.error = errorOrUsers;
    return response;
  }
  const sessionId = getCookie(event, "iam-sid");
  if (sessionId)
    sessionOrError = await getUserSession(sessionId);
  if (sessionOrError instanceof H3Error) {
    console.log("Error getting user session");
    response.status = "fail";
    response.error = response.error = createError({
      statusCode: 500,
      statusMessage: "Server error"
    });
  }
  const session = sessionOrError;
  const users = errorOrUsers;
  response.status = "success";
  response.data = {
    users,
    csrf_token: session.csrf_token
  };
  return response;
}
async function create(event) {
  const response = {};
  response.status = "fail";
  response.error = createError({
    statusCode: 422,
    statusMessage: "All users must be created from authn/register endpoint"
  });
  return response;
}
async function show(event) {
  const response = {};
  const errorOrUser = await showUser(event);
  if (errorOrUser instanceof H3Error) {
    response.status = "fail";
    response.error = errorOrUser;
    return response;
  }
  const user = errorOrUser;
  response.status = "success";
  response.data = user;
  return response;
}
async function permission(event) {
  var _a;
  const response = {};
  const user = event.context.user;
  const permission2 = (_a = event.context.params) == null ? void 0 : _a.permission;
  if (!user) {
    console.log("Failed to get user for permission check.");
    response.status = "fail";
    response.error = createError({
      statusCode: 401,
      statusMessage: "Failed to get user."
    });
    return response;
  }
  if (!permission2) {
    console.log("No permission given to check if user has permission");
    response.status = "fail";
    response.error = createError({
      statusCode: 400,
      statusMessage: "No permission given"
    });
    return response;
  }
  const userHasPermission = hasPermission(user, permission2);
  if (!userHasPermission) {
    console.log(`User: ${user.uuid} does NOT have permission: ${permission2}`);
    response.status = "fail";
    response.error = createError({
      statusCode: 401,
      statusMessage: `User: ${user.uuid} does NOT have permission: ${permission2}`
    });
    return response;
  } else {
    response.status = "success";
    response.data = `User: ${user.uuid} has permission: ${permission2}`;
    return response;
  }
}
async function update(event) {
  const response = {};
  const errorOrUser = await updateUser(event);
  if (errorOrUser instanceof H3Error) {
    response.status = "fail";
    response.error = errorOrUser;
    return response;
  }
  const user = errorOrUser;
  response.status = "success";
  response.data = user;
  return response;
}
async function destroy(event) {
  const response = {};
  const errorOrBoolean = await destroyUser(event);
  if (errorOrBoolean instanceof H3Error) {
    response.status = "fail";
    response.error = errorOrBoolean;
    return response;
  }
  if (errorOrBoolean === false) {
    response.status = "fail";
    return response;
  } else {
    response.status = "success";
    return response;
  }
}

const userNotFoundError = createError({
  statusCode: 401,
  statusMessage: "Unauthorized. User not found."
});
const forbiddenError = createError({
  statusCode: 403,
  statusMessage: "Forbidden"
});
const csrfTokenError = createError({
  statusCode: 403,
  statusMessage: "Missing or invalid csrf token"
});
const router = createRouter$1();
router.get("/", defineEventHandler(async (event) => {
  if (!event.context.user)
    throw userNotFoundError;
  if (!canAccessAdmin(event.context.user))
    throw forbiddenError;
  return await index$2(event);
}));
router.post("/", defineEventHandler(async (event) => {
  return await create();
}));
router.get("/:uuid", defineEventHandler(async (event) => {
  var _a;
  if (!event.context.user)
    throw userNotFoundError;
  const uuid = (_a = event.context.params) == null ? void 0 : _a.uuid;
  if (uuid) {
    if (event.context.user.uuid && !canAccessAdmin(event.context.user) && !isOwner(event.context.user.uuid, uuid))
      throw forbiddenError;
  }
  return await show(event);
}));
router.get("/:uuid/permission/:permission", defineEventHandler(async (event) => {
  if (!event.context.user)
    throw userNotFoundError;
  if (!canAccessAdmin(event.context.user))
    throw forbiddenError;
  return await permission(event);
}));
router.put("/:uuid", defineEventHandler(async (event) => {
  var _a;
  const tokenOrError = await validateCsrfToken(event);
  if (tokenOrError instanceof H3Error)
    throw csrfTokenError;
  if (!event.context.user)
    throw userNotFoundError;
  const uuid = (_a = event.context.params) == null ? void 0 : _a.uuid;
  if (uuid) {
    if (event.context.user.uuid && !canAccessAdmin(event.context.user) && !isOwner(event.context.user.uuid, uuid))
      throw forbiddenError;
  }
  return await update(event);
}));
router.delete("/:uuid", defineEventHandler(async (event) => {
  var _a;
  const tokenOrError = await validateCsrfToken(event);
  if (tokenOrError instanceof H3Error)
    throw csrfTokenError;
  if (!event.context.user)
    throw userNotFoundError;
  const uuid = (_a = event.context.params) == null ? void 0 : _a.uuid;
  if (uuid) {
    if (event.context.user.uuid && !canAccessAdmin(event.context.user) && !isOwner(event.context.user.uuid, uuid))
      throw forbiddenError;
  }
  return await destroy(event);
}));
const usersController = useBase("/api/iam/users", router.handler);

const _____ = defineEventHandler(async (event) => {
  return await usersController(event);
});

const _____$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: _____
});

const index = defineEventHandler(async (event) => {
  return await usersController(event);
});

const index$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: index
});

const prisma$7 = new PrismaClient();
const subjects_delete = defineEventHandler(async (event) => {
  const body = await readBody(event);
  let subject = null;
  let error = null;
  if (body.id) {
    await prisma$7.subjects.delete({
      where: {
        id: body.id
      }
    }).then((response) => {
      subject = response;
    }).catch(async (e) => {
      error = e;
    });
  }
  if (error)
    return createError({ statusCode: 500, statusMessage: "Server error" });
  return subject;
});

const subjects_delete$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: subjects_delete
});

const prisma$6 = new PrismaClient();
const subjects_get = defineEventHandler(async () => {
  return await prisma$6.subjects.findMany();
});

const subjects_get$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: subjects_get
});

const prisma$5 = new PrismaClient();
const subjects_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  let subject = null;
  if (body.nama_matkul && body.nama_dosen && body.hari && body.jam) {
    await prisma$5.subjects.create({
      data: {
        nama_matkul: body.nama_matkul,
        nama_dosen: body.nama_dosen,
        hari: body.hari,
        jam: body.jam
      }
    }).then((response) => {
      subject = response;
    });
  }
  return {
    subject
  };
});

const subjects_post$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: subjects_post
});

const prisma$4 = new PrismaClient();
const subjects_put = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const id = body.id;
  const nama_matkul = body.nama_matkul;
  const nama_dosen = body.nama_dosen;
  const hari = body.hari;
  const jam = body.jam;
  if (!(id && nama_matkul && nama_dosen && hari && jam))
    return createError({ statusCode: 400, statusMessage: "Missing ID and soon " });
  let subject;
  if (id && nama_matkul && nama_dosen && hari && jam) {
    subject = await prisma$4.subjects.update({
      where: {
        id
      },
      data: {
        nama_matkul,
        nama_dosen,
        hari,
        jam
      }
    });
  }
  return subject;
});

const subjects_put$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: subjects_put
});

const prisma$3 = new PrismaClient();
const tasks_delete = defineEventHandler(async (event) => {
  const body = await readBody(event);
  let task = null;
  let error = null;
  if (body.id) {
    await prisma$3.tasks.delete({
      where: {
        id: body.id
      }
    }).then((response) => {
      task = response;
    }).catch(async (e) => {
      error = e;
    });
  }
  if (error)
    return createError({ statusCode: 500, statusMessage: "Server error" });
  return task;
});

const tasks_delete$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: tasks_delete
});

const prisma$2 = new PrismaClient();
const tasks_get = defineEventHandler(async () => {
  return await prisma$2.tasks.findMany();
});

const tasks_get$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: tasks_get
});

const prisma$1 = new PrismaClient();
const tasks_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  let task = null;
  if (body.subject_id && body.job && body.jenis && body.deadline && body.status) {
    await prisma$1.tasks.create({
      data: {
        job: body.job,
        subject_id: body.subject_id,
        jenis: body.jenis,
        deadline: body.deadline,
        status: body.status
      }
    }).then((response) => {
      task = response;
    });
  }
  return {
    task
  };
});

const tasks_post$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: tasks_post
});

const prisma = new PrismaClient();
const tasks_put = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const id = body.id;
  const job = body.job;
  const subject_id = body.subject_id;
  const jenis = body.jenis;
  const deadline = body.deadline;
  const status = body.status;
  if (!(id && subject_id && job && jenis && deadline && status))
    return createError({ statusCode: 400, statusMessage: "Missing ID and soon " });
  let subject;
  if (id && subject_id && job && jenis && deadline && status) {
    subject = await prisma.tasks.update({
      where: {
        id
      },
      data: {
        job,
        subject_id,
        jenis,
        deadline,
        status
      }
    });
  }
  return subject;
});

const tasks_put$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: tasks_put
});

const appRootId = "__nuxt";

const appRootTag = "div";

function buildAssetsURL(...path) {
  return joinURL(publicAssetsURL(), useRuntimeConfig().app.buildAssetsDir, ...path);
}
function publicAssetsURL(...path) {
  const publicBase = useRuntimeConfig().app.cdnURL || useRuntimeConfig().app.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
}

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const getClientManifest = () => import('file://D:/Project%20Web/Eling-Tugas-Nuxt/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getStaticRenderedHead = () => Promise.resolve().then(function () { return _virtual__headStatic$1; }).then((r) => r.default || r);
const getServerEntry = () => import('file://D:/Project%20Web/Eling-Tugas-Nuxt/.nuxt/dist/server/server.mjs').then((r) => r.default || r);
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return `<${appRootTag} id="${appRootId}">${html}</${appRootTag}>`;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const options = {
    manifest,
    renderToString: () => `<${appRootTag} id="${appRootId}"></${appRootTag}>`,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig();
    ssrContext.payload = {
      serverRendered: false,
      config: {
        public: config.public,
        app: config.app
      },
      data: {},
      state: {}
    };
    ssrContext.renderMeta = ssrContext.renderMeta ?? getStaticRenderedHead;
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
const PAYLOAD_URL_RE = /\/_payload(\.[a-zA-Z0-9]+)?.js(\?.*)?$/;
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.node.req.url?.startsWith("/__nuxt_error") ? getQuery(event) : null;
  if (ssrError && ssrError.statusCode) {
    ssrError.statusCode = parseInt(ssrError.statusCode);
  }
  if (ssrError && event.node.req.socket.readyState !== "readOnly") {
    throw createError("Cannot directly render error page!");
  }
  const islandContext = void 0;
  let url = ssrError?.url || islandContext?.url || event.node.req.url;
  const isRenderingPayload = PAYLOAD_URL_RE.test(url);
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(),
    noSSR: !!event.node.req.headers["x-nuxt-no-ssr"] || routeOptions.ssr === false || (false),
    error: !!ssrError,
    nuxt: void 0,
    /* NuxtApp */
    payload: ssrError ? { error: ssrError } : {},
    islandContext
  };
  const renderer = ssrContext.noSSR ? await getSPARenderer() : await getSSRRenderer();
  const _rendered = await renderer.renderToString(ssrContext).catch((error) => {
    throw !ssrError && ssrContext.payload?.error || error;
  });
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext });
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response2 = renderPayloadResponse(ssrContext);
    return response2;
  }
  const renderedMeta = await ssrContext.renderMeta?.() ?? {};
  const inlinedStyles = "";
  const htmlContext = {
    island: Boolean(islandContext),
    htmlAttrs: normalizeChunks([renderedMeta.htmlAttrs]),
    head: normalizeChunks([
      renderedMeta.headTags,
      null,
      _rendered.renderResourceHints(),
      _rendered.renderStyles(),
      inlinedStyles,
      ssrContext.styles
    ]),
    bodyAttrs: normalizeChunks([renderedMeta.bodyAttrs]),
    bodyPrepend: normalizeChunks([
      renderedMeta.bodyScriptsPrepend,
      ssrContext.teleports?.body
    ]),
    body: [_rendered.html],
    bodyAppend: normalizeChunks([
      `<script>window.__NUXT__=${devalue(ssrContext.payload)}<\/script>`,
      _rendered.renderScripts(),
      // Note: bodyScripts may contain tags other than <script>
      renderedMeta.bodyScripts
    ])
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: event.node.res.statusCode,
    statusMessage: event.node.res.statusMessage,
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
  return response;
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  return chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html>
<html ${joinAttrs(html.htmlAttrs)}>
<head>${joinTags(html.head)}</head>
<body ${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body>
</html>`;
}
function renderPayloadResponse(ssrContext) {
  return {
    body: `export default ${devalue(splitPayload(ssrContext).payload)}`,
    statusCode: ssrContext.event.node.res.statusCode,
    statusMessage: ssrContext.event.node.res.statusMessage,
    headers: {
      "content-type": "text/javascript;charset=UTF-8",
      "x-powered-by": "Nuxt"
    }
  };
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}

const renderer$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: renderer
});

const _virtual__headStatic = {"headTags":"<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">","bodyTags":"","bodyTagsOpen":"","htmlAttrs":"","bodyAttrs":""};

const _virtual__headStatic$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: _virtual__headStatic
});
//# sourceMappingURL=index.mjs.map
