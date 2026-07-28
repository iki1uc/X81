// x81.js
import { JEIN } from "./JEIN.js";

export function x81(v) {

    const basis = JEIN(v);

    return {
        typ: "x81",
        input: v,
        status: basis.erfüllt,
        aktiv: basis.bool,
        nenner: basis.kleinster_nenner,
        quantität: basis.bool ? Number(v) : 0
    };
}
