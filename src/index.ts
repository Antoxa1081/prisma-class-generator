import { generatorHandler } from "@prisma/generator-helper";
import { generate } from "./generator";

generatorHandler({
  onManifest: () => ({
    defaultOutput: "../src/_gen/prisma-class",
    prettyName: "Prisma Class Generator",
  }),
  onGenerate: generate,
});