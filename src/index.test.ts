import test from "tape-catch";
import * as App from "./index"

test("it runs the tests", (assert) => {
  assert.plan(1);
  assert.equals(App.app(), "it works")
});
