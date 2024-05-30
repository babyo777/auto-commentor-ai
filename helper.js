const _0x1419b8 = _0x2cc8;
(function (_0x33b8f1, _0x3430b3) {
  const _0x22fcdc = _0x2cc8,
    _0x50ebc3 = _0x33b8f1();
  while (!![]) {
    try {
      const _0xa3ed00 =
        (parseInt(_0x22fcdc(0x176)) / 0x1) *
          (-parseInt(_0x22fcdc(0x173)) / 0x2) +
        -parseInt(_0x22fcdc(0x170)) / 0x3 +
        -parseInt(_0x22fcdc(0x16d)) / 0x4 +
        parseInt(_0x22fcdc(0x174)) / 0x5 +
        (parseInt(_0x22fcdc(0x17b)) / 0x6) *
          (parseInt(_0x22fcdc(0x178)) / 0x7) +
        -parseInt(_0x22fcdc(0x16e)) / 0x8 +
        (-parseInt(_0x22fcdc(0x172)) / 0x9) *
          (-parseInt(_0x22fcdc(0x16f)) / 0xa);
      if (_0xa3ed00 === _0x3430b3) break;
      else _0x50ebc3["push"](_0x50ebc3["shift"]());
    } catch (_0x32a40f) {
      _0x50ebc3["push"](_0x50ebc3["shift"]());
    }
  }
})(_0x55fd, 0xa886c);
function _0x55fd() {
  const _0x430875 = [
    "\x0a\x20\x20\x20\x20You\x27re\x20a\x20Code\x20commentor,\x20your\x20job\x20is\x20to\x20only\x20write\x20comments\x20when\x20provided\x20code\x20and\x20output\x20only\x20the\x20modified\x20raw\x20code\x20with\x20comments\x20without\x20using\x20markdown.\x20You\x20must\x20modify\x20the\x20code\x20in\x20any\x20way.\x20MAKE\x20SURE\x20TO\x20NOT\x20REPLY\x20WITH\x20MARKDOWN\x20LANGUAGE\x0a\x20\x20\x20\x20Write\x20comments\x20in\x20the\x20following\x20file\x20",
    "817476JDLJkx",
    "\x20with\x20code\x20content\x20-\x0a\x20\x20\x20\x20",
    "AIzaSyCWFXGhEaPfOlRPcGkNJQPb0hD7dM61jks",
    "\x0a\x20\x20\x20\x20",
    "552000GMevxM",
    "2255096QqEmTJ",
    "13152340rwYGzp",
    "2337189WLnydX",
    "text",
    "9PcMWfh",
    "2DCvfQl",
    "2657675CHHKyf",
    "gemini-pro",
    "93781eMhpIl",
    "generateContent",
    "7ZAOFSv",
    "getGenerativeModel",
  ];
  _0x55fd = function () {
    return _0x430875;
  };
  return _0x55fd();
}
import { GoogleGenerativeAI } from "@google/generative-ai";
const API_KEY = _0x1419b8(0x16b),
  genAI = new GoogleGenerativeAI(API_KEY);
function _0x2cc8(_0x1ac84b, _0x2a11aa) {
  const _0x55fd14 = _0x55fd();
  return (
    (_0x2cc8 = function (_0x2cc8aa, _0x1cb8ef) {
      _0x2cc8aa = _0x2cc8aa - 0x16b;
      let _0x430c27 = _0x55fd14[_0x2cc8aa];
      return _0x430c27;
    }),
    _0x2cc8(_0x1ac84b, _0x2a11aa)
  );
}
async function generateComments(_0x4b385b, _0xad2e71) {
  const _0x46ed73 = _0x1419b8;
  try {
    const _0x362246 = genAI[_0x46ed73(0x179)]({ model: _0x46ed73(0x175) }),
      _0x1b82ac =
        _0x46ed73(0x17a) +
        _0xad2e71 +
        _0x46ed73(0x17c) +
        _0x4b385b +
        _0x46ed73(0x16c),
      _0x123710 = await _0x362246[_0x46ed73(0x177)](_0x1b82ac),
      _0x123b86 = await _0x123710["response"],
      _0x2a44e9 = await _0x123b86[_0x46ed73(0x171)]();
    return _0x2a44e9["length"] > 0x0 ? _0x2a44e9 : null;
  } catch (_0x2f4594) {
    return null;
  }
}
export default generateComments;
