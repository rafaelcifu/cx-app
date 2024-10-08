"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkipAuth = exports.SKIP_AUTH_KEY = void 0;
const common_1 = require("@nestjs/common");
// Define the key for skipping authentication
exports.SKIP_AUTH_KEY = "skipAuth";
// Create a decorator function that sets metadata to true for skipping authentication
const SkipAuth = () => (0, common_1.SetMetadata)(exports.SKIP_AUTH_KEY, true);
exports.SkipAuth = SkipAuth;
//# sourceMappingURL=skip-auth.decorator.js.map