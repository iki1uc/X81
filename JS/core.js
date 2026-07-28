export async function Kernel3x81() {
    const Elektron = await fetch("../X81/X.tmp").then(r => r.text());
    const Proton   = await fetch("../X81/q.tmp").then(r => r.text());
    const Operator = await fetch("../X81/operator.tmp").then(r => r.text());
    const Orbit    = await fetch("../X81/U.orbit").then(r => r.text());
    const Neutron  = await fetch("../81.tmp/81.tmp").then(r => r.text());

    return {
        Elektron,
        Proton,
        Neutron,
        Operator,
        Orbit
    };
}
