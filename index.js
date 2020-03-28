import _fs from "fs";
import path from "path";
import Koa from "koa";
import serve from "koa-static";
import Router from "koa-router";
import template from "es6-template-strings";

const fs = _fs.promises;

const app = new Koa();
const router = new Router();

const holder = process.env.LICENSE_HOLDER || "Example";

router.get("/:license/:start(\\d{4})-:end(\\d{4})?", async ctx => {
    const license = ctx.params.license || "MIT";
    const start = ctx.params.start;
    const end = ctx.params.end || new Date().getFullYear();

    await renderLicense(ctx, {
        license: license,
        years: `${start}–${end}`,
        holder: holder
    });
});

router.get(["/", "/:license", "/:license/:start(\\d{4})"], async ctx => {
    const license = ctx.params.license || "MIT";
    const start = ctx.params.start || new Date().getFullYear();

    await renderLicense(ctx, {
        license: license,
        years: start,
        holder: holder
    });
});

app.use(serve("static"));
app.use(router.routes());

app.listen(process.env.PORT || 3000);

async function renderLicense(ctx, fields) {
    const { license, years, holder } = fields;

    const text = await fs.readFile(path.join("licenses", `${license}.txt`));
    const interpolated = template(text, {
        year: years,
        holder: holder
    });

    ctx.body = interpolated;
}
