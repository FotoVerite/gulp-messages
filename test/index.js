import assert from "node:assert";
import { describe, it } from "node:test";

import messages from "../index.js";

describe("messages", function () {
  it("does not have a duplicate symbol", function () {
    var seen = new Set();
    Object.values(messages).forEach(function (symbol) {
      assert.deepStrictEqual(seen.has(symbol), false);
      seen.add(symbol);
    });
  });
});
