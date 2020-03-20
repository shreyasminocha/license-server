import _fs from "fs";
import path from "path";
import Koa from "koa";
import serve from "koa-static";
import Router from "koa-router";
import template from "es6-template-strings";

const fs = _fs.promises;

const app = new Koa();
const router = new Router();

router.get(
    [
        "/",
        "/:license",
        "/:license/:dates(\\d{4})",
        "/:license/:dates(\\d{4}-)",
        "/:license/:dates(\\d{4}-\\d{4})"
    ],
    async ctx => {
        const license = ctx.params.license || "MIT";
        const dates = ctx.params.dates || new Date().getFullYear();
        const holder = process.env.LICENSE_HOLDER || "Example";

        const text = await fs.readFile(path.join("licenses", `${license}.txt`));
        const interpolated = template(text, {
            year: dates,
            holder: holder
        });

        ctx.body = interpolated;
    }
);

app.use(serve("static"));
app.use(router.routes());

app.listen(process.env.PORT || 3000);
