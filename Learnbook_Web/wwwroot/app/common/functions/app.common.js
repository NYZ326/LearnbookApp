"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppCommon {
    // Is Null or Empty check
    isNullOrEmpty(obj) {
        if (obj == null || obj.length === 0 || typeof obj !== "object") {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.AppCommon = AppCommon;
//# sourceMappingURL=app.common.js.map