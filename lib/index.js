"use strict";

const RESET = "\x1b[0m"
const BOLD = "\x1b[1m"
const GREEN = "\x1b[32m"
const BLUE = "\x1b[34m"
const GREEN_BRIGHT = "\x1b[92m"
const CYAN = "\x1b[36m"
const YELLOW = "\x1b[33m"

function printBaileysBanner() {
  console.clear()

  const banner = [
    "██████╗  █████╗ ██╗██╗     ███████╗██╗   ██╗███████╗",
    "██╔══██╗██╔══██╗██║██║     ██╔════╝╚██╗ ██╔╝██╔════╝",
    "██████╔╝███████║██║██║     █████╗   ╚████╔╝ ███████╗",
    "██╔══██╗██╔══██║██║██║     ██╔══╝    ╚██╔╝  ╚════██║",
    "██████╔╝██║  ██║██║███████╗███████╗   ██║   ███████║",
    "╚═════╝ ╚═╝  ╚═╝╚═╝╚══════╝╚══════╝   ╚═╝   ╚══════╝"
  ]

  const colors = [GREEN, BLUE]

  for (let i = 0; i < banner.length; i++) {
    console.log(BOLD + colors[i % 2] + banner[i] + RESET)
  }

  console.log()
  console.log(BOLD + GREEN + "╭────────────────────────────────────────────╮" + RESET)
  console.log(BOLD + GREEN + "│              BAILEYS STARTER               │" + RESET)
  console.log(BOLD + GREEN + "├────────────────────────────────────────────┤" + RESET)
  console.log(BOLD + BLUE  + "│  System   : WhatsApp Multi Device          │" + RESET)
  console.log(BOLD + CYAN  + "│  Mode     : Pairing / QR                   │" + RESET)
  console.log(BOLD + YELLOW + "│  Status   : Starting Library...            │" + RESET)
  console.log(BOLD + BLUE  + "│  Package  : baileys                        │" + RESET)
  console.log(BOLD + GREEN + "╰────────────────────────────────────────────╯" + RESET)
  console.log()

  console.log(BOLD + GREEN_BRIGHT + "  Thanks For Using My Baileys" + RESET)
  console.log(BOLD + GREEN_BRIGHT + "  Modifed By : Nyzz" + RESET)
  console.log(BOLD + GREEN_BRIGHT + "  Telegram   : @NyzzCs" + RESET)
  console.log()
}

printBaileysBanner()

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));

var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;

const Socket_1 = __importDefault(require("./Socket"));

exports.makeWASocket = Socket_1.default;

__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;