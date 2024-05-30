function _0x56a0(_0x3df0e9, _0xb4968) {
  const _0xc47527 = _0xc475();
  return (
    (_0x56a0 = function (_0x56a0fb, _0x21520a) {
      _0x56a0fb = _0x56a0fb - 0x68;
      let _0x333161 = _0xc47527[_0x56a0fb];
      return _0x333161;
    }),
    _0x56a0(_0x3df0e9, _0xb4968)
  );
}
(function (_0x217252, _0x5cdee9) {
  const _0x4c1093 = _0x56a0,
    _0x320ac5 = _0x217252();
  while (!![]) {
    try {
      const _0x114cd3 =
        -parseInt(_0x4c1093(0x70)) / 0x1 +
        (parseInt(_0x4c1093(0x77)) / 0x2) * (-parseInt(_0x4c1093(0x6f)) / 0x3) +
        -parseInt(_0x4c1093(0x76)) / 0x4 +
        -parseInt(_0x4c1093(0x69)) / 0x5 +
        parseInt(_0x4c1093(0x74)) / 0x6 +
        (parseInt(_0x4c1093(0x6a)) / 0x7) * (-parseInt(_0x4c1093(0x6b)) / 0x8) +
        parseInt(_0x4c1093(0x72)) / 0x9;
      if (_0x114cd3 === _0x5cdee9) break;
      else _0x320ac5["push"](_0x320ac5["shift"]());
    } catch (_0x365621) {
      _0x320ac5["push"](_0x320ac5["shift"]());
    }
  }
})(_0xc475, 0x1e299);
function _0xc475() {
  const _0x3a1da0 = [
    "\x0a\x20\x0a\x20\x20\x20\x20\x20If\x20the\x20code\x20doesn\x27t\x20make\x20sense\x20or\x20the\x20content\x20of\x20code\x20doesn\x27t\x20seem\x20like\x20code\x20send\x20response\x20\x27NONE\x27\x20only.\x0a\x20\x0a\x20\x0a\x20\x20\x20",
    "1363674fLQvJr",
    "text",
    "472588tBsFAC",
    "84516Rkvdhb",
    "getGenerativeModel",
    "\x20with\x20code\x20content\x20-\x0a\x20\x0a\x20\x20\x20\x20\x20",
    "969260sciYKZ",
    "903zpaBpU",
    "9384LtaJXk",
    "startChat",
    "sendMessage",
    "length",
    "6ThwJOz",
    "202014cTCRuW",
    "gemini-pro",
    "5815008uGSKYE",
  ];
  _0xc475 = function () {
    return _0x3a1da0;
  };
  return _0xc475();
}
import { GoogleGenerativeAI } from "@google/generative-ai";
const API_KEY = "AIzaSyCWFXGhEaPfOlRPcGkNJQPb0hD7dM61jks",
  genAI = new GoogleGenerativeAI(API_KEY);
async function generateComments(_0x163e72, _0x4b59f0) {
  const _0x29b692 = _0x56a0;
  try {
    const _0x184c69 = genAI[_0x29b692(0x78)]({ model: _0x29b692(0x71) }),
      _0x2ce627 = _0x184c69[_0x29b692(0x6c)]({
        history: [],
        generationConfig: { maxOutputTokens: Infinity },
      }),
      _0x196002 =
        "\x0a\x20\x20\x20You\x27re\x20a\x20Code\x20commentor,\x20your\x20job\x20is\x20to\x20only\x20write\x20comments\x20when\x20provided\x20code\x20and\x20output\x20only\x20the\x20modified\x20raw\x20code\x20with\x20comments\x20without\x20using\x20markdown.\x20You\x20MUST\x20NOT\x20modify\x20the\x20code\x20in\x20any\x20way.\x0a\x20\x20\x20\x20\x20Write\x20comments\x20in\x20the\x20following\x20file\x20" +
        _0x4b59f0 +
        _0x29b692(0x68) +
        _0x163e72 +
        _0x29b692(0x73),
      _0xec3e62 = await _0x2ce627[_0x29b692(0x6d)](_0x196002),
      _0x5e50f2 = await _0xec3e62["response"],
      _0xa1ccfd = await _0x5e50f2[_0x29b692(0x75)]();
    return _0xa1ccfd[_0x29b692(0x6e)] > 0x0 ? _0xa1ccfd : null;
  } catch (_0x4559c7) {
    return null;
  }
}
export default generateComments;
