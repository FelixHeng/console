// @ts-ignore
import colors from "ansi-colors";
// @ts-ignore
import { assertEquals } from "testing/asserts.ts";
import { consoleStyle as style } from "./mod.ts";

Deno.test("altdx console style", () => {
  assertEquals(
    colors.bold("hello"),
    style.bold().render("hello"),
    "should render modifiers",
  );
  style.reset().bold().dim().italic().underline().inverse().hidden()
    .strikethrough();
  assertEquals(
    colors.bold.dim.italic.underline.inverse.hidden.strikethrough("hello"),
    style.render("hello"),
    "should render modifiers",
  );

  style.reset();
  assertEquals(
    colors.blue("hello"),
    style.color("blue").render("hello"),
    "should render normal color",
  );

  style.reset();
  assertEquals(
    colors.blueBright("hello"),
    style.color("blue", true).render("hello"),
    "should render light color",
  );

  style.reset();
  assertEquals(
    colors.bgWhite("hello"),
    style.bgc("white").render("hello"),
    "should render normal background color",
  );

  style.reset();
  assertEquals(
    colors.bgWhiteBright("hello"),
    style.bgc("white", true).render("hello"),
    "should render light background color",
  );

  assertEquals("hello", style.reset().render("hello"), "should reset style");
});
