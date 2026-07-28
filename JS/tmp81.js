import { Kernel3x81 } from "./3x81.kernel.js";

export async function _81tmp() {
    const atom = await Kernel3x81();

    return {
        "81_A": atom.Elektron,
        "81_B": atom.Proton,
        "81_C": atom.Neutron,
        "81_D": atom.Operator,
        "81_E": atom.Orbit,
        "ID": 415
    };
}
